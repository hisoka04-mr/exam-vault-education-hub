export interface Subject {
  id: string;
  name: string;
  description: string;
  slug: string;
  icon: string;
}

export interface SchoolClass {
  id: string;
  name: string;
  level: "primary" | "middle" | "high";
  subjects: Subject[];
  slug: string;
}

export const classes: SchoolClass[] = [
  // Primary School
  {
    id: "primary-1",
    name: "1 école primaire",
    level: "primary",
    slug: "1-ecole-primaire",
    subjects: [
      {
        id: "arabic-primary-1",
        name: "Arabic",
        description: "Basic Arabic language learning for beginners",
        slug: "arabic-primary-1",
        icon: "BookText"
      },
      {
        id: "math-primary-1",
        name: "Mathematics",
        description: "Basic mathematics concepts and operations",
        slug: "math-primary-1",
        icon: "Calculator"
      },
      {
        id: "science-primary-1",
        name: "Science Discovery",
        description: "Introduction to basic science concepts",
        slug: "science-primary-1",
        icon: "FlaskConical"
      }
    ]
  },
  {
    id: "primary-2",
    name: "2 école primaire",
    level: "primary",
    slug: "2-ecole-primaire",
    subjects: [
      {
        id: "arabic-primary-2",
        name: "Arabic",
        description: "Advancing Arabic language skills",
        slug: "arabic-primary-2",
        icon: "BookText"
      },
      {
        id: "math-primary-2",
        name: "Mathematics",
        description: "Building on basic mathematics concepts",
        slug: "math-primary-2",
        icon: "Calculator"
      },
      {
        id: "science-primary-2",
        name: "Science Discovery",
        description: "Continued exploration of science concepts",
        slug: "science-primary-2",
        icon: "FlaskConical"
      }
    ]
  },
  {
    id: "primary-3",
    name: "3 école primaire",
    level: "primary",
    slug: "3-ecole-primaire",
    subjects: [
      {
        id: "arabic-primary-3",
        name: "Arabic",
        description: "Intermediate Arabic language skills",
        slug: "arabic-primary-3",
        icon: "BookText"
      },
      {
        id: "french-primary-3",
        name: "French",
        description: "Introduction to French language",
        slug: "french-primary-3",
        icon: "Languages"
      },
      {
        id: "math-primary-3",
        name: "Mathematics",
        description: "Developing mathematical reasoning",
        slug: "math-primary-3",
        icon: "Calculator"
      },
      {
        id: "science-primary-3",
        name: "Science",
        description: "Basic natural and physical sciences",
        slug: "science-primary-3",
        icon: "FlaskConical"
      }
    ]
  },
  {
    id: "primary-4",
    name: "4 école primaire",
    level: "primary",
    slug: "4-ecole-primaire",
    subjects: [
      {
        id: "arabic-primary-4",
        name: "Arabic",
        description: "Advanced Arabic language skills",
        slug: "arabic-primary-4",
        icon: "BookText"
      },
      {
        id: "french-primary-4",
        name: "French",
        description: "Building French vocabulary and grammar",
        slug: "french-primary-4",
        icon: "Languages"
      },
      {
        id: "math-primary-4",
        name: "Mathematics",
        description: "Introduction to geometry and fractions",
        slug: "math-primary-4",
        icon: "Calculator"
      },
      {
        id: "science-primary-4",
        name: "Science",
        description: "Exploring natural phenomena",
        slug: "science-primary-4",
        icon: "FlaskConical"
      }
    ]
  },
  {
    id: "primary-5",
    name: "5 école primaire",
    level: "primary",
    slug: "5-ecole-primaire",
    subjects: [
      {
        id: "arabic-primary-5",
        name: "Arabic",
        description: "Comprehensive Arabic language studies",
        slug: "arabic-primary-5",
        icon: "BookText"
      },
      {
        id: "french-primary-5",
        name: "French",
        description: "Intermediate French language skills",
        slug: "french-primary-5",
        icon: "Languages"
      },
      {
        id: "math-primary-5",
        name: "Mathematics",
        description: "Problem-solving and advanced operations",
        slug: "math-primary-5",
        icon: "Calculator"
      },
      {
        id: "science-primary-5",
        name: "Science",
        description: "Introduction to biology, physics, and chemistry",
        slug: "science-primary-5",
        icon: "FlaskConical"
      },
      {
        id: "history-primary-5",
        name: "History & Geography",
        description: "Introduction to history and geography concepts",
        slug: "history-primary-5",
        icon: "Globe"
      }
    ]
  },
  {
    id: "primary-6",
    name: "6 école primaire",
    level: "primary",
    slug: "6-ecole-primaire",
    subjects: [
      {
        id: "arabic-primary-6",
        name: "Arabic",
        description: "Advanced Arabic literacy and literature",
        slug: "arabic-primary-6",
        icon: "BookText"
      },
      {
        id: "french-primary-6",
        name: "French",
        description: "Developing French reading and writing skills",
        slug: "french-primary-6",
        icon: "Languages"
      },
      {
        id: "math-primary-6",
        name: "Mathematics",
        description: "Advanced mathematical concepts",
        slug: "math-primary-6",
        icon: "Calculator"
      },
      {
        id: "science-primary-6",
        name: "Science",
        description: "Applied sciences and experiments",
        slug: "science-primary-6",
        icon: "FlaskConical"
      },
      {
        id: "history-primary-6",
        name: "History & Geography",
        description: "Local and world history and geography",
        slug: "history-primary-6",
        icon: "Globe"
      }
    ]
  },
  
  // Middle School
  {
    id: "middle-7",
    name: "7ème année",
    level: "middle",
    slug: "7eme-annee",
    subjects: [
      {
        id: "arabic-middle-7",
        name: "Arabic",
        description: "Advanced Arabic language and literature",
        slug: "arabic-middle-7",
        icon: "BookText"
      },
      {
        id: "french-middle-7",
        name: "French",
        description: "Comprehensive French language studies",
        slug: "french-middle-7",
        icon: "Languages"
      },
      {
        id: "english-middle-7",
        name: "English",
        description: "Building English language foundations",
        slug: "english-middle-7",
        icon: "Languages"
      },
      {
        id: "math-middle-7",
        name: "Mathematics",
        description: "Algebra fundamentals and geometry",
        slug: "math-middle-7",
        icon: "Calculator"
      },
      {
        id: "science-middle-7",
        name: "Natural Sciences",
        description: "Biology, ecology, and earth sciences",
        slug: "science-middle-7",
        icon: "Leaf"
      },
      {
        id: "physics-middle-7",
        name: "Physics & Chemistry",
        description: "Introduction to physics and chemistry",
        slug: "physics-middle-7",
        icon: "FlaskConical"
      },
      {
        id: "history-middle-7",
        name: "History & Geography",
        description: "Ancient civilizations and world geography",
        slug: "history-middle-7",
        icon: "Globe"
      }
    ]
  },
  {
    id: "middle-8",
    name: "8ème année",
    level: "middle",
    slug: "8eme-annee",
    subjects: [
      {
        id: "arabic-middle-8",
        name: "Arabic",
        description: "Advanced Arabic literature and composition",
        slug: "arabic-middle-8",
        icon: "BookText"
      },
      {
        id: "french-middle-8",
        name: "French",
        description: "Intermediate French literature and grammar",
        slug: "french-middle-8",
        icon: "Languages"
      },
      {
        id: "english-middle-8",
        name: "English",
        description: "Developing English communication skills",
        slug: "english-middle-8",
        icon: "Languages"
      },
      {
        id: "math-middle-8",
        name: "Mathematics",
        description: "Advanced algebra and geometric concepts",
        slug: "math-middle-8",
        icon: "Calculator"
      },
      {
        id: "science-middle-8",
        name: "Natural Sciences",
        description: "Human biology and environmental science",
        slug: "science-middle-8",
        icon: "Leaf"
      },
      {
        id: "physics-middle-8",
        name: "Physics & Chemistry",
        description: "Fundamental concepts in physics and chemistry",
        slug: "physics-middle-8",
        icon: "FlaskConical"
      },
      {
        id: "history-middle-8",
        name: "History & Geography",
        description: "Medieval history and economic geography",
        slug: "history-middle-8",
        icon: "Globe"
      }
    ]
  },
  {
    id: "middle-9",
    name: "9ème année",
    level: "middle",
    slug: "9eme-annee",
    subjects: [
      {
        id: "arabic-middle-9",
        name: "Arabic",
        description: "Advanced literary analysis and writing",
        slug: "arabic-middle-9",
        icon: "BookText"
      },
      {
        id: "french-middle-9",
        name: "French",
        description: "Advanced French literature and composition",
        slug: "french-middle-9",
        icon: "Languages"
      },
      {
        id: "english-middle-9",
        name: "English",
        description: "Comprehensive English language skills",
        slug: "english-middle-9",
        icon: "Languages"
      },
      {
        id: "math-middle-9",
        name: "Mathematics",
        description: "Advanced algebra, geometry, and statistics",
        slug: "math-middle-9",
        icon: "Calculator"
      },
      {
        id: "science-middle-9",
        name: "Natural Sciences",
        description: "Advanced concepts in biology and ecology",
        slug: "science-middle-9",
        icon: "Leaf"
      },
      {
        id: "physics-middle-9",
        name: "Physics & Chemistry",
        description: "Advanced physics and chemistry concepts",
        slug: "physics-middle-9",
        icon: "FlaskConical"
      },
      {
        id: "history-middle-9",
        name: "History & Geography",
        description: "Modern history and political geography",
        slug: "history-middle-9",
        icon: "Globe"
      },
      {
        id: "technology-middle-9",
        name: "Technology",
        description: "Information technology and technical design",
        slug: "technology-middle-9",
        icon: "Cpu"
      }
    ]
  },

  // High School
  {
    id: "high-1",
    name: "1ère année",
    level: "high",
    slug: "1ere-annee",
    subjects: [
      {
        id: "arabic-high-1",
        name: "Arabic",
        description: "Advanced Arabic language and literature analysis",
        slug: "arabic-high-1",
        icon: "BookText"
      },
      {
        id: "french-high-1",
        name: "French",
        description: "Advanced French literature and language studies",
        slug: "french-high-1",
        icon: "Languages"
      },
      {
        id: "english-high-1",
        name: "English",
        description: "Advanced English language and literature",
        slug: "english-high-1",
        icon: "Languages"
      },
      {
        id: "math-high-1",
        name: "Mathematics",
        description: "Advanced algebraic concepts and calculus introduction",
        slug: "math-high-1",
        icon: "Calculator"
      },
      {
        id: "biology-high-1",
        name: "Biology",
        description: "Advanced concepts in molecular and cellular biology",
        slug: "biology-high-1",
        icon: "Leaf"
      },
      {
        id: "physics-high-1",
        name: "Physics",
        description: "Mechanics, thermodynamics, and wave phenomena",
        slug: "physics-high-1",
        icon: "Atoms"
      },
      {
        id: "chemistry-high-1",
        name: "Chemistry",
        description: "Organic and inorganic chemistry fundamentals",
        slug: "chemistry-high-1",
        icon: "FlaskConical"
      },
      {
        id: "history-high-1",
        name: "History & Geography",
        description: "Contemporary history and economic geography",
        slug: "history-high-1",
        icon: "Globe"
      },
      {
        id: "philosophy-high-1",
        name: "Philosophy",
        description: "Introduction to philosophical concepts",
        slug: "philosophy-high-1",
        icon: "BrainCircuit"
      }
    ]
  },
  {
    id: "high-2",
    name: "2ère année",
    level: "high",
    slug: "2ere-annee",
    subjects: [
      {
        id: "arabic-high-2",
        name: "Arabic",
        description: "Literary criticism and advanced composition",
        slug: "arabic-high-2",
        icon: "BookText"
      },
      {
        id: "french-high-2",
        name: "French",
        description: "Advanced French linguistics and literature",
        slug: "french-high-2",
        icon: "Languages"
      },
      {
        id: "english-high-2",
        name: "English",
        description: "Advanced English composition and literary analysis",
        slug: "english-high-2",
        icon: "Languages"
      },
      {
        id: "math-high-2",
        name: "Mathematics",
        description: "Calculus, analytical geometry, and statistics",
        slug: "math-high-2",
        icon: "Calculator"
      },
      {
        id: "biology-high-2",
        name: "Biology",
        description: "Genetics, evolution, and human physiology",
        slug: "biology-high-2",
        icon: "Leaf"
      },
      {
        id: "physics-high-2",
        name: "Physics",
        description: "Electricity, magnetism, and modern physics",
        slug: "physics-high-2",
        icon: "Atoms"
      },
      {
        id: "chemistry-high-2",
        name: "Chemistry",
        description: "Analytical chemistry and biochemistry",
        slug: "chemistry-high-2",
        icon: "FlaskConical"
      },
      {
        id: "history-high-2",
        name: "History & Geography",
        description: "Global geopolitics and modern international relations",
        slug: "history-high-2",
        icon: "Globe"
      },
      {
        id: "philosophy-high-2",
        name: "Philosophy",
        description: "Ethics, epistemology, and metaphysics",
        slug: "philosophy-high-2",
        icon: "BrainCircuit"
      }
    ]
  },
  {
    id: "high-3",
    name: "3ère année",
    level: "high",
    slug: "3ere-annee",
    subjects: [
      {
        id: "arabic-high-3",
        name: "Arabic",
        description: "Advanced literary analysis and research",
        slug: "arabic-high-3",
        icon: "BookText"
      },
      {
        id: "french-high-3",
        name: "French",
        description: "Literary research and critical analysis",
        slug: "french-high-3",
        icon: "Languages"
      },
      {
        id: "english-high-3",
        name: "English",
        description: "Advanced discourse and academic writing",
        slug: "english-high-3",
        icon: "Languages"
      },
      {
        id: "math-high-3",
        name: "Mathematics",
        description: "Advanced calculus, complex numbers, and probability",
        slug: "math-high-3",
        icon: "Calculator"
      },
      {
        id: "biology-high-3",
        name: "Biology",
        description: "Molecular biology, biotechnology, and ecology",
        slug: "biology-high-3",
        icon: "Leaf"
      },
      {
        id: "physics-high-3",
        name: "Physics",
        description: "Quantum mechanics, nuclear physics, and relativity",
        slug: "physics-high-3",
        icon: "Atoms"
      },
      {
        id: "chemistry-high-3",
        name: "Chemistry",
        description: "Physical chemistry and chemical thermodynamics",
        slug: "chemistry-high-3",
        icon: "FlaskConical"
      },
      {
        id: "history-high-3",
        name: "History & Geography",
        description: "Contemporary issues in global context",
        slug: "history-high-3",
        icon: "Globe"
      },
      {
        id: "philosophy-high-3",
        name: "Philosophy",
        description: "Contemporary philosophical debates and critical thinking",
        slug: "philosophy-high-3",
        icon: "BrainCircuit"
      }
    ]
  },
  {
    id: "bac",
    name: "BAC",
    level: "high",
    slug: "bac",
    subjects: [
      {
        id: "arabic-bac",
        name: "Arabic",
        description: "Final-level Arabic language and literature",
        slug: "arabic-bac",
        icon: "BookText"
      },
      {
        id: "french-bac",
        name: "French",
        description: "Advanced French linguistics and literature",
        slug: "french-bac",
        icon: "Languages"
      },
      {
        id: "english-bac",
        name: "English",
        description: "Advanced English language proficiency",
        slug: "english-bac",
        icon: "Languages"
      },
      {
        id: "math-bac",
        name: "Mathematics",
        description: "Comprehensive mathematics for BAC examination",
        slug: "math-bac",
        icon: "Calculator"
      },
      {
        id: "physics-bac",
        name: "Physics & Chemistry",
        description: "Final-level physics and chemistry concepts",
        slug: "physics-bac",
        icon: "FlaskConical"
      },
      {
        id: "biology-bac",
        name: "Biology",
        description: "Comprehensive biological sciences for BAC examination",
        slug: "biology-bac",
        icon: "Leaf"
      },
      {
        id: "philosophy-bac",
        name: "Philosophy",
        description: "Final-level philosophical studies and analysis",
        slug: "philosophy-bac",
        icon: "BrainCircuit"
      },
      {
        id: "history-bac",
        name: "History & Geography",
        description: "Comprehensive historical and geographical studies",
        slug: "history-bac",
        icon: "Globe"
      }
    ]
  }
];
