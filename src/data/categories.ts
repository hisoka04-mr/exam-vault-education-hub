
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
    icon: "calculator",
    description: "Algebra, Calculus, Geometry, Trigonometry, and more",
    slug: "mathematics"
  },
  {
    id: "science",
    name: "Science",
    icon: "flask-conical",
    description: "Physics, Chemistry, Biology, and Earth Science",
    slug: "science"
  },
  {
    id: "language-arts",
    name: "Language Arts",
    icon: "book-open",
    description: "Reading, Writing, Grammar, and Literature",
    slug: "language-arts"
  },
  {
    id: "social-studies",
    name: "Social Studies",
    icon: "globe",
    description: "History, Geography, Civics, and Economics",
    slug: "social-studies"
  },
  {
    id: "foreign-language",
    name: "Foreign Language",
    icon: "languages",
    description: "Spanish, French, German, Chinese, and more",
    slug: "foreign-language"
  },
  {
    id: "computer-science",
    name: "Computer Science",
    icon: "code",
    description: "Programming, Web Development, and Computer Literacy",
    slug: "computer-science"
  }
];
