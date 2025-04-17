
import { supabase } from '@/lib/supabase';
import { Exam } from '@/data/exams';

export interface ExamUpload {
  title: string;
  description: string;
  categoryId: string;
  file: File;
}

export const uploadExam = async (examData: ExamUpload): Promise<Exam | null> => {
  try {
    // 1. Upload the file to storage
    const fileExt = examData.file.name.split('.').pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `exams/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('exam_files')
      .upload(filePath, examData.file);

    if (uploadError) throw uploadError;

    // 2. Get the public URL
    const { data: { publicUrl } } = supabase.storage
      .from('exam_files')
      .getPublicUrl(filePath);

    // 3. Insert record in the database
    const newExam = {
      title: examData.title,
      description: examData.description,
      categoryId: examData.categoryId,
      fileType: fileExt?.toUpperCase() || 'PDF',
      fileSize: formatFileSize(examData.file.size),
      downloadUrl: publicUrl,
      dateAdded: new Date().toISOString().split('T')[0],
    };

    const { data, error } = await supabase
      .from('exams')
      .insert(newExam)
      .select()
      .single();

    if (error) throw error;
    
    return data as Exam;
  } catch (error: any) {
    console.error('Error uploading exam:', error.message);
    return null;
  }
};

export const getExams = async (): Promise<Exam[]> => {
  try {
    const { data, error } = await supabase
      .from('exams')
      .select('*')
      .order('dateAdded', { ascending: false });

    if (error) throw error;
    return data as Exam[];
  } catch (error) {
    console.error('Error fetching exams:', error);
    return [];
  }
};

export const getExamsByCategory = async (categoryId: string): Promise<Exam[]> => {
  try {
    const { data, error } = await supabase
      .from('exams')
      .select('*')
      .eq('categoryId', categoryId)
      .order('dateAdded', { ascending: false });

    if (error) throw error;
    return data as Exam[];
  } catch (error) {
    console.error('Error fetching category exams:', error);
    return [];
  }
};

export const deleteExam = async (id: string): Promise<boolean> => {
  try {
    // First get the exam to get the file path
    const { data: exam, error: fetchError } = await supabase
      .from('exams')
      .select('downloadUrl')
      .eq('id', id)
      .single();

    if (fetchError) throw fetchError;

    // Delete from database
    const { error: deleteError } = await supabase
      .from('exams')
      .delete()
      .eq('id', id);

    if (deleteError) throw deleteError;

    // Try to delete the file if possible
    if (exam?.downloadUrl) {
      // Extract file path from URL
      const urlParts = exam.downloadUrl.split('/');
      const filePath = urlParts[urlParts.length - 1];
      
      // Delete from storage
      await supabase.storage
        .from('exam_files')
        .remove([`exams/${filePath}`]);
    }

    return true;
  } catch (error) {
    console.error('Error deleting exam:', error);
    return false;
  }
};

const formatFileSize = (bytes: number): string => {
  if (bytes < 1024) return bytes + ' bytes';
  else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
  else return (bytes / 1048576).toFixed(1) + ' MB';
};
