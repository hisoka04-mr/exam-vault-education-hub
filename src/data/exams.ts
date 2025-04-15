
export interface Exam {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
  dateAdded: string;
}

export const exams: Exam[] = [
  {
    id: "math-algebra-midterm",
    title: "Algebra I Midterm",
    description: "Comprehensive midterm covering linear equations, inequalities, and basic functions",
    categoryId: "mathematics",
    fileType: "PDF",
    fileSize: "2.3 MB",
    downloadUrl: "#",
    dateAdded: "2025-03-15"
  },
  {
    id: "math-calculus-final",
    title: "AP Calculus Final Exam",
    description: "AP-style calculus exam covering derivatives, integrals, and applications",
    categoryId: "mathematics",
    fileType: "PDF",
    fileSize: "3.1 MB",
    downloadUrl: "#",
    dateAdded: "2025-03-10"
  },
  {
    id: "science-chemistry-periodic",
    title: "Chemistry Periodic Table Quiz",
    description: "Test covering periodic table elements, properties, and trends",
    categoryId: "science",
    fileType: "PDF",
    fileSize: "1.5 MB",
    downloadUrl: "#",
    dateAdded: "2025-03-20"
  },
  {
    id: "science-biology-cells",
    title: "Biology Cell Structure Exam",
    description: "Comprehensive test on cell organelles, functions, and processes",
    categoryId: "science",
    fileType: "PDF",
    fileSize: "2.8 MB",
    downloadUrl: "#",
    dateAdded: "2025-03-05"
  },
  {
    id: "english-grammar",
    title: "English Grammar Assessment",
    description: "Evaluation covering parts of speech, punctuation, and sentence structure",
    categoryId: "english",
    fileType: "DOCX",
    fileSize: "1.2 MB",
    downloadUrl: "#",
    dateAdded: "2025-03-22"
  },
  {
    id: "english-literature",
    title: "English Literature Final",
    description: "Comprehensive exam on major literary works and movements",
    categoryId: "english",
    fileType: "PDF",
    fileSize: "2.5 MB",
    downloadUrl: "#",
    dateAdded: "2025-03-18"
  },
  {
    id: "history-world",
    title: "World History Midterm",
    description: "Test covering ancient civilizations through the Renaissance",
    categoryId: "history",
    fileType: "PDF",
    fileSize: "3.0 MB",
    downloadUrl: "#",
    dateAdded: "2025-03-12"
  },
  {
    id: "geography-skills",
    title: "Geography Skills Quiz",
    description: "Assessment on map reading, geographical terms, and world features",
    categoryId: "geography",
    fileType: "PDF",
    fileSize: "1.8 MB",
    downloadUrl: "#",
    dateAdded: "2025-03-25"
  },
  {
    id: "arabic-exam",
    title: "Arabic Language Exam",
    description: "Comprehensive test on Arabic vocabulary, grammar, and conversation",
    categoryId: "arabic-language",
    fileType: "PDF",
    fileSize: "2.2 MB",
    downloadUrl: "#",
    dateAdded: "2025-03-08"
  },
  {
    id: "technology-programming",
    title: "Technology Assessment",
    description: "Assessment covering computer technology concepts and applications",
    categoryId: "technology",
    fileType: "PDF",
    fileSize: "1.7 MB",
    downloadUrl: "#",
    dateAdded: "2025-03-17"
  }
];

export const getExamsByCategory = (categoryId: string): Exam[] => {
  return exams.filter(exam => exam.categoryId === categoryId);
};
