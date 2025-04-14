
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
    id: "language-arts",
    name: "Language Arts",
    icon: "BookOpen",
    description: "Reading, Writing, Grammar, and Literature",
    slug: "language-arts"
  },
  {
    id: "social-studies",
    name: "Social Studies",
    icon: "Globe",
    description: "History, Geography, Civics, and Economics",
    slug: "social-studies"
  },
  {
    id: "foreign-language",
    name: "Foreign Language",
    icon: "Languages",
    description: "Spanish, French, German, Chinese, and more",
    slug: "foreign-language"
  },
  {
    id: "computer-science",
    name: "Computer Science",
    icon: "Code",
    description: "Programming, Web Development, and Computer Literacy",
    slug: "computer-science"
  }
];
