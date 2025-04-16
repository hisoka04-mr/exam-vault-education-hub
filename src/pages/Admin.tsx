
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUploadForm from "@/components/FileUploadForm";
import { exams, Exam } from "@/data/exams";
import { categories } from "@/data/categories";
import { classes } from "@/data/classes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";

const Admin = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [uploadedExams, setUploadedExams] = useState<Exam[]>([]);
  const navigate = useNavigate();

  const handleFileUploaded = (fileInfo: {
    name: string;
    size: string;
    type: string;
    url: string;
    dateAdded: string;
  }) => {
    if (!selectedCategory) {
      toast({
        title: "Error",
        description: "Please select a category or class",
        variant: "destructive",
      });
      return;
    }

    const newExam: Exam = {
      id: `exam-${Date.now()}`,
      title: fileInfo.name,
      description: `Uploaded exam: ${fileInfo.name}`,
      categoryId: selectedCategory,
      fileType: fileInfo.type,
      fileSize: fileInfo.size,
      downloadUrl: fileInfo.url,
      dateAdded: fileInfo.dateAdded,
    };

    // In a real application, you would save this to a database
    // For demonstration, we'll just add it to state
    setUploadedExams(prev => [...prev, newExam]);
    
    toast({
      title: "Exam added successfully",
      description: `${fileInfo.name} has been added to ${selectedCategory}`,
    });
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <Tabs defaultValue="upload" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="upload">Upload Exams</TabsTrigger>
            <TabsTrigger value="manage">Manage Uploaded Exams</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload">
            <Card>
              <CardHeader>
                <CardTitle>Upload New Exam</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Select Category or Class</Label>
                    <Select
                      onValueChange={setSelectedCategory}
                      value={selectedCategory}
                    >
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select a category or class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="" disabled>Select a category or class</SelectItem>
                        
                        <SelectItem value="category-header" disabled className="font-bold">
                          --- Subjects ---
                        </SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                        
                        <SelectItem value="class-header" disabled className="font-bold">
                          --- Classes ---
                        </SelectItem>
                        {classes.map((cls) => (
                          <SelectItem key={cls.id} value={cls.id}>
                            {cls.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <FileUploadForm 
                    onFileUploaded={handleFileUploaded} 
                    category={selectedCategory} 
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="manage">
            <Card>
              <CardHeader>
                <CardTitle>Recently Uploaded Exams</CardTitle>
              </CardHeader>
              <CardContent>
                {uploadedExams.length > 0 ? (
                  <div className="space-y-4">
                    {uploadedExams.map((exam) => (
                      <div key={exam.id} className="p-4 border rounded-md flex items-center justify-between">
                        <div>
                          <p className="font-medium">{exam.title}</p>
                          <p className="text-sm text-gray-500">
                            {exam.fileType} • {exam.fileSize} • {new Date(exam.dateAdded).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <a 
                            href={exam.downloadUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm"
                          >
                            View
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No exams have been uploaded yet.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
