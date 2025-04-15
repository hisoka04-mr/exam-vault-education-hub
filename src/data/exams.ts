
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
  // Mathematics exams
  {
    id: "math-algebra-midterm",
    title: "Algebra I Midterm",
    description: "Comprehensive midterm covering linear equations, inequalities, and basic functions",
    categoryId: "mathematics",
    fileType: "PDF",
    fileSize: "2.3 MB",
    downloadUrl: "https://example.com/exams/algebra_midterm.pdf", // Update with real URLs when available
    dateAdded: "2025-03-15"
  },
  {
    id: "math-calculus-final",
    title: "AP Calculus Final Exam",
    description: "AP-style calculus exam covering derivatives, integrals, and applications",
    categoryId: "mathematics",
    fileType: "PDF",
    fileSize: "3.1 MB",
    downloadUrl: "https://example.com/exams/calculus_final.pdf",
    dateAdded: "2025-03-10"
  },
  
  // Science exams
  {
    id: "science-chemistry-periodic",
    title: "Chemistry Periodic Table Quiz",
    description: "Test covering periodic table elements, properties, and trends",
    categoryId: "science",
    fileType: "PDF",
    fileSize: "1.5 MB",
    downloadUrl: "https://example.com/exams/chemistry_periodic.pdf",
    dateAdded: "2025-03-20"
  },
  {
    id: "science-biology-cells",
    title: "Biology Cell Structure Exam",
    description: "Comprehensive test on cell organelles, functions, and processes",
    categoryId: "science",
    fileType: "PDF",
    fileSize: "2.8 MB",
    downloadUrl: "https://example.com/exams/biology_cells.pdf",
    dateAdded: "2025-03-05"
  },
  
  // English exams
  {
    id: "english-grammar",
    title: "English Grammar Assessment",
    description: "Evaluation covering parts of speech, punctuation, and sentence structure",
    categoryId: "english",
    fileType: "DOCX",
    fileSize: "1.2 MB",
    downloadUrl: "https://example.com/exams/english_grammar.docx",
    dateAdded: "2025-03-22"
  },
  {
    id: "english-literature",
    title: "English Literature Final",
    description: "Comprehensive exam on major literary works and movements",
    categoryId: "english",
    fileType: "PDF",
    fileSize: "2.5 MB",
    downloadUrl: "https://example.com/exams/english_literature.pdf",
    dateAdded: "2025-03-18"
  },
  
  // History exams
  {
    id: "history-world",
    title: "World History Midterm",
    description: "Test covering ancient civilizations through the Renaissance",
    categoryId: "history",
    fileType: "PDF",
    fileSize: "3.0 MB",
    downloadUrl: "https://example.com/exams/history_world.pdf",
    dateAdded: "2025-03-12"
  },
  
  // Geography exams
  {
    id: "geography-skills",
    title: "Geography Skills Quiz",
    description: "Assessment on map reading, geographical terms, and world features",
    categoryId: "geography",
    fileType: "PDF",
    fileSize: "1.8 MB",
    downloadUrl: "https://example.com/exams/geography_skills.pdf",
    dateAdded: "2025-03-25"
  },
  
  // Arabic language exams
  {
    id: "arabic-exam",
    title: "Arabic Language Exam",
    description: "Comprehensive test on Arabic vocabulary, grammar, and conversation",
    categoryId: "arabic-language",
    fileType: "PDF",
    fileSize: "2.2 MB",
    downloadUrl: "https://example.com/exams/arabic_language.pdf",
    dateAdded: "2025-03-08"
  },
  
  // Technology exams
  {
    id: "technology-programming",
    title: "Technology Assessment",
    description: "Assessment covering computer technology concepts and applications",
    categoryId: "technology",
    fileType: "PDF",
    fileSize: "1.7 MB",
    downloadUrl: "https://example.com/exams/technology_programming.pdf",
    dateAdded: "2025-03-17"
  },
  
  // Class-specific exams - Primary School
  {
    id: "primary-1-arabic-midterm",
    title: "Arabic Midterm Exam",
    description: "Basic Arabic language skills assessment for beginners",
    categoryId: "primary-1",
    fileType: "PDF",
    fileSize: "1.1 MB",
    downloadUrl: "https://example.com/exams/primary_1_arabic.pdf",
    dateAdded: "2025-03-10"
  },
  {
    id: "primary-1-math-quiz",
    title: "Basic Mathematics Quiz",
    description: "Simple arithmetic and number recognition quiz",
    categoryId: "primary-1",
    fileType: "PDF",
    fileSize: "0.8 MB",
    downloadUrl: "https://example.com/exams/primary_1_math.pdf",
    dateAdded: "2025-03-14"
  },
  {
    id: "primary-3-french",
    title: "French Introduction Test",
    description: "First year French vocabulary and basic phrases test",
    categoryId: "primary-3",
    fileType: "PDF",
    fileSize: "1.3 MB",
    downloadUrl: "https://example.com/exams/primary_3_french.pdf",
    dateAdded: "2025-03-21"
  },
  
  // Middle School exams
  {
    id: "middle-8-physics",
    title: "Physics Principles Exam",
    description: "Assessment on fundamental physics concepts and simple experiments",
    categoryId: "middle-8",
    fileType: "PDF",
    fileSize: "2.1 MB",
    downloadUrl: "https://example.com/exams/middle_8_physics.pdf",
    dateAdded: "2025-03-19"
  },
  {
    id: "middle-9-math",
    title: "Advanced Algebra Test",
    description: "Comprehensive algebra and geometry assessment for 9th graders",
    categoryId: "middle-9",
    fileType: "PDF",
    fileSize: "2.4 MB",
    downloadUrl: "https://example.com/exams/middle_9_math.pdf",
    dateAdded: "2025-03-16"
  },
  
  // High School exams
  {
    id: "high-2-chemistry",
    title: "Chemistry Final Exam",
    description: "Advanced chemistry concepts and laboratory procedures assessment",
    categoryId: "high-2",
    fileType: "PDF",
    fileSize: "3.2 MB",
    downloadUrl: "https://example.com/exams/high_2_chemistry.pdf",
    dateAdded: "2025-03-09"
  },
  {
    id: "bac-arabic",
    title: "BAC Arabic Language Exam",
    description: "Official-style BAC Arabic language assessment",
    categoryId: "bac",
    fileType: "PDF",
    fileSize: "2.9 MB",
    downloadUrl: "https://example.com/exams/bac_arabic.pdf",
    dateAdded: "2025-03-07"
  },
  {
    id: "bac-math",
    title: "BAC Mathematics Sample Exam",
    description: "Practice exam for BAC mathematics with complete solutions",
    categoryId: "bac",
    fileType: "PDF",
    fileSize: "3.5 MB",
    downloadUrl: "https://example.com/exams/bac_math.pdf",
    dateAdded: "2025-03-11"
  }
];

export const getExamsByCategory = (categoryId: string): Exam[] => {
  return exams.filter(exam => exam.categoryId === categoryId);
};
