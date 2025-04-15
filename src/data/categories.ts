
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "mathematics",
    name: "Mathematics",
    icon: "Calculator",
    description: "Algebra, Calculus, Geometry, Trigonometry, and more",
    slug: "mathematics"
  },
  {
    id: "science",
    name: "Science",
    icon: "FlaskConical",
    description: "Physics, Chemistry, Biology, and Earth Science",
    slug: "science"
  },
  {
    id: "english",
    name: "English",
    icon: "BookOpen",
    description: "English language courses, grammar, vocabulary, and literature",
    slug: "english"
  },
  {
    id: "geography",
    name: "Geography",
    icon: "Globe",
    description: "World geography, physical geography, and cartography",
    slug: "geography"
  },
  {
    id: "history",
    name: "History",
    icon: "History",
    description: "World history, ancient civilizations, and modern history",
    slug: "history"
  },
  {
    id: "technology",
    name: "Technology",
    icon: "Cpu",
    description: "Computer technology, programming, and digital literacy",
    slug: "technology"
  },
  {
    id: "arabic-language",
    name: "Arabic",
    icon: "Flag",
    description: "Arabic language courses, grammar, vocabulary, and conversational practice",
    slug: "arabic-language"
  },
  {
    id: "french-language",
    name: "French",
    icon: "Flag",
    description: "French language courses, grammar, vocabulary, and conversational practice",
    slug: "french-language"
  },
  {
    id: "computer-science",
    name: "Computer Science",
    icon: "Code",
    description: "Programming, Web Development, and Computer Literacy",
    slug: "computer-science"
  }
];
