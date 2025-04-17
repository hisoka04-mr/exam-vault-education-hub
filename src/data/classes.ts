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
  specialization?: string;
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
  
  // 2ème Année - Économie et Gestion
  {
    id: "high-2-eco",
    name: "2ème Année",
    level: "high",
    specialization: "Économie et Gestion",
    slug: "2eme-annee-economie",
    subjects: [
      {
        id: "math-2-eco",
        name: "Mathématiques",
        description: "Mathématiques appliquées à l'économie et la gestion",
        slug: "math-2-eco",
        icon: "Calculator"
      },
      {
        id: "eco-general-2",
        name: "Économie Générale",
        description: "Principes fondamentaux de l'économie",
        slug: "eco-general-2",
        icon: "LineChart"
      },
      {
        id: "gestion-2",
        name: "Gestion",
        description: "Principes de base de la gestion d'entreprise",
        slug: "gestion-2",
        icon: "Briefcase"
      },
      {
        id: "info-base-2",
        name: "Informatique de base",
        description: "Compétences informatiques fondamentales pour la gestion",
        slug: "info-base-2",
        icon: "Computer"
      },
      {
        id: "francais-2-eco",
        name: "Français",
        description: "Langue française appliquée au contexte professionnel",
        slug: "francais-2-eco",
        icon: "Languages"
      },
      {
        id: "anglais-2-eco",
        name: "Anglais",
        description: "Anglais des affaires et communication professionnelle",
        slug: "anglais-2-eco",
        icon: "Languages"
      }
    ]
  },
  
  // 2ème Année - Lettres
  {
    id: "high-2-lettres",
    name: "2ème Année",
    level: "high",
    specialization: "Lettres",
    slug: "2eme-annee-lettres",
    subjects: [
      {
        id: "lit-arabe-2",
        name: "Littérature Arabe",
        description: "Étude approfondie de la littérature arabe classique et moderne",
        slug: "lit-arabe-2",
        icon: "BookText"
      },
      {
        id: "philo-2",
        name: "Philosophie",
        description: "Introduction aux concepts philosophiques fondamentaux",
        slug: "philo-2",
        icon: "BrainCircuit"
      },
      {
        id: "francais-2-lettres",
        name: "Français",
        description: "Littérature et expression écrite en français",
        slug: "francais-2-lettres",
        icon: "BookOpen"
      },
      {
        id: "anglais-2-lettres",
        name: "Anglais",
        description: "Compréhension et expression en langue anglaise",
        slug: "anglais-2-lettres",
        icon: "Languages"
      },
      {
        id: "histoire-geo-2",
        name: "Histoire / Géographie",
        description: "Histoire mondiale et géographie humaine et physique",
        slug: "histoire-geo-2",
        icon: "Globe"
      }
    ]
  },
  
  // 2ème Année - Sciences
  {
    id: "high-2-sciences",
    name: "2ème Année",
    level: "high",
    specialization: "Sciences",
    slug: "2eme-annee-sciences",
    subjects: [
      {
        id: "math-2-sciences",
        name: "Mathématiques",
        description: "Algèbre, géométrie et analyse pour les sciences",
        slug: "math-2-sciences",
        icon: "Calculator"
      },
      {
        id: "physique-2",
        name: "Sciences Physiques",
        description: "Mécanique, électricité et optique",
        slug: "physique-2",
        icon: "Atoms"
      },
      {
        id: "svt-2",
        name: "Sciences de la Vie et de la Terre",
        description: "Biologie cellulaire, génétique et géologie",
        slug: "svt-2",
        icon: "Leaf"
      },
      {
        id: "info-2-sci",
        name: "Informatique",
        description: "Introduction à la programmation et aux systèmes informatiques",
        slug: "info-2-sci",
        icon: "Code"
      },
      {
        id: "langues-2-sci",
        name: "Français / Anglais",
        description: "Communication scientifique en langues étrangères",
        slug: "langues-2-sci",
        icon: "Languages"
      }
    ]
  },
  
  // 2ème Année - Technologie de l'Informatique
  {
    id: "high-2-info",
    name: "2ème Année",
    level: "high",
    specialization: "Technologie de l'Informatique",
    slug: "2eme-annee-info",
    subjects: [
      {
        id: "algo-2",
        name: "Algorithmique",
        description: "Conception et analyse d'algorithmes",
        slug: "algo-2",
        icon: "Code"
      },
      {
        id: "prog-base-2",
        name: "Programmation (base)",
        description: "Introduction aux langages de programmation",
        slug: "prog-base-2",
        icon: "FileCode"
      },
      {
        id: "reseaux-intro-2",
        name: "Réseaux (introduction)",
        description: "Fondamentaux des réseaux informatiques",
        slug: "reseaux-intro-2",
        icon: "Network"
      },
      {
        id: "math-2-info",
        name: "Mathématiques",
        description: "Mathématiques discrètes et logique",
        slug: "math-2-info",
        icon: "Calculator"
      },
      {
        id: "physique-2-info",
        name: "Sciences Physiques",
        description: "Électronique et électricité",
        slug: "physique-2-info",
        icon: "Zap"
      },
      {
        id: "langues-2-info",
        name: "Français / Anglais",
        description: "Communication technique en langues étrangères",
        slug: "langues-2-info",
        icon: "Languages"
      }
    ]
  },
  
  // 3ème Année - Économie et Gestion
  {
    id: "high-3-eco",
    name: "3ème Année",
    level: "high",
    specialization: "Économie et Gestion",
    slug: "3eme-annee-economie",
    subjects: [
      {
        id: "compta-3",
        name: "Comptabilité",
        description: "Principes et techniques comptables",
        slug: "compta-3",
        icon: "FileSpreadsheet"
      },
      {
        id: "eco-entreprise-3",
        name: "Économie d'entreprise",
        description: "Organisation et fonctionnement des entreprises",
        slug: "eco-entreprise-3",
        icon: "Building"
      },
      {
        id: "math-3-eco",
        name: "Mathématiques",
        description: "Mathématiques financières et statistiques",
        slug: "math-3-eco",
        icon: "Calculator"
      },
      {
        id: "gestion-fin-3",
        name: "Gestion Financière",
        description: "Analyse et planification financière",
        slug: "gestion-fin-3",
        icon: "Banknote"
      },
      {
        id: "info-appliquee-3",
        name: "Informatique appliquée",
        description: "Logiciels de gestion et bases de données",
        slug: "info-appliquee-3",
        icon: "Database"
      }
    ]
  },
  
  // 3ème Année - Lettres
  {
    id: "high-3-lettres",
    name: "3ème Année",
    level: "high",
    specialization: "Lettres",
    slug: "3eme-annee-lettres",
    subjects: [
      {
        id: "lit-arabe-approf-3",
        name: "Littérature Arabe approfondie",
        description: "Analyse littéraire avancée des textes arabes",
        slug: "lit-arabe-approf-3",
        icon: "BookText"
      },
      {
        id: "culture-gen-3",
        name: "Culture Générale",
        description: "Connaissances interdisciplinaires et actualités",
        slug: "culture-gen-3",
        icon: "BookOpen"
      },
      {
        id: "philo-3-lettres",
        name: "Philosophie",
        description: "Courants philosophiques et analyse critique",
        slug: "philo-3-lettres",
        icon: "BrainCircuit"
      },
      {
        id: "francais-3-lettres",
        name: "Français",
        description: "Littérature et dissertation",
        slug: "francais-3-lettres",
        icon: "BookOpen"
      },
      {
        id: "anglais-3-lettres",
        name: "Anglais",
        description: "Littérature anglophone et expression écrite",
        slug: "anglais-3-lettres",
        icon: "Languages"
      },
      {
        id: "histoire-geo-3",
        name: "Histoire / Géographie",
        description: "Histoire contemporaine et géopolitique",
        slug: "histoire-geo-3",
        icon: "Globe"
      }
    ]
  },
  
  // 3ème Année - Sciences
  {
    id: "high-3-sciences",
    name: "3ème Année",
    level: "high",
    specialization: "Sciences",
    slug: "3eme-annee-sciences",
    subjects: [
      {
        id: "math-3-sci",
        name: "Mathématiques",
        description: "Analyse, probabilités et géométrie avancée",
        slug: "math-3-sci",
        icon: "Calculator"
      },
      {
        id: "physique-3-sci",
        name: "Sciences Physiques",
        description: "Mécanique, thermodynamique et électromagnétisme",
        slug: "physique-3-sci",
        icon: "Atoms"
      },
      {
        id: "svt-3",
        name: "SVT",
        description: "Physiologie, écologie et géologie approfondie",
        slug: "svt-3",
        icon: "Leaf"
      },
      {
        id: "langues-3-sci",
        name: "Français / Anglais",
        description: "Communication scientifique en langues étrangères",
        slug: "langues-3-sci",
        icon: "Languages"
      },
      {
        id: "info-3-sci",
        name: "Informatique",
        description: "Programmation et algorithmes pour les sciences",
        slug: "info-3-sci",
        icon: "Code"
      }
    ]
  },
  
  // 3ème Année - Technologie de l'Informatique
  {
    id: "high-3-info",
    name: "3ème Année",
    level: "high",
    specialization: "Technologie de l'Informatique",
    slug: "3eme-annee-info",
    subjects: [
      {
        id: "algo-avancee-3",
        name: "Algorithmique avancée",
        description: "Complexité algorithmique et structures de données",
        slug: "algo-avancee-3",
        icon: "Code"
      },
      {
        id: "reseaux-sys-3",
        name: "Réseaux & Systèmes",
        description: "Administration réseau et systèmes d'exploitation",
        slug: "reseaux-sys-3",
        icon: "Network"
      },
      {
        id: "poo-3",
        name: "Programmation orientée objet",
        description: "Conception et développement orientés objet",
        slug: "poo-3",
        icon: "FileCode"
      },
      {
        id: "math-3-info",
        name: "Mathématiques",
        description: "Mathématiques pour l'informatique",
        slug: "math-3-info",
        icon: "Calculator"
      },
      {
        id: "physique-app-3",
        name: "Physique appliquée",
        description: "Électronique et signaux",
        slug: "physique-app-3",
        icon: "Zap"
      }
    ]
  },
  
  // 3ème Année - Mathématiques
  {
    id: "high-3-math",
    name: "3ème Année",
    level: "high",
    specialization: "Mathématiques",
    slug: "3eme-annee-math",
    subjects: [
      {
        id: "math-avancees-3",
        name: "Mathématiques (Analyse, Algèbre, Statistiques)",
        description: "Étude approfondie des concepts mathématiques avancés",
        slug: "math-avancees-3",
        icon: "Calculator"
      },
      {
        id: "physique-3-math",
        name: "Physique",
        description: "Physique théorique et applications mathématiques",
        slug: "physique-3-math",
        icon: "Atoms"
      },
      {
        id: "info-3-math",
        name: "Informatique",
        description: "Programmation et modélisation mathématique",
        slug: "info-3-math",
        icon: "Code"
      },
      {
        id: "langues-3-math",
        name: "Français / Anglais",
        description: "Communication scientifique en langues étrangères",
        slug: "langues-3-math",
        icon: "Languages"
      }
    ]
  },
  
  // Baccalauréat - Économie et Gestion
  {
    id: "bac-eco",
    name: "BAC",
    level: "high",
    specialization: "Économie et Gestion",
    slug: "bac-economie",
    subjects: [
      {
        id: "gestion-entreprises-bac",
        name: "Gestion des Entreprises",
        description: "Management stratégique et opérationnel",
        slug: "gestion-entreprises-bac",
        icon: "Briefcase"
      },
      {
        id: "compta-approf-bac",
        name: "Comptabilité Approfondie",
        description: "Techniques comptables avancées et normes internationales",
        slug: "compta-approf-bac",
        icon: "FileSpreadsheet"
      },
      {
        id: "eco-internationale-bac",
        name: "Économie Internationale",
        description: "Commerce international et mondialisation",
        slug: "eco-internationale-bac",
        icon: "Globe"
      },
      {
        id: "math-app-bac",
        name: "Mathématiques appliquées",
        description: "Mathématiques financières et statistiques avancées",
        slug: "math-app-bac",
        icon: "Calculator"
      },
      {
        id: "info-gestion-bac",
        name: "Informatique de Gestion",
        description: "Systèmes d'information et logiciels de gestion",
        slug: "info-gestion-bac",
        icon: "Database"
      }
    ]
  },
  
  // Baccalauréat - Lettres
  {
    id: "bac-lettres",
    name: "BAC",
    level: "high",
    specialization: "Lettres",
    slug: "bac-lettres",
    subjects: [
      {
        id: "lit-arabe-classique-bac",
        name: "Littérature Arabe classique & moderne",
        description: "Analyse critique des œuvres littéraires arabes",
        slug: "lit-arabe-classique-bac",
        icon: "BookText"
      },
      {
        id: "philo-approf-bac",
        name: "Philosophie approfondie",
        description: "Étude avancée des courants philosophiques",
        slug: "philo-approf-bac",
        icon: "BrainCircuit"
      },
      {
        id: "histoire-contemp-bac",
        name: "Histoire contemporaine",
        description: "Histoire du XXe siècle et enjeux actuels",
        slug: "histoire-contemp-bac",
        icon: "Clock"
      },
      {
        id: "langues-bac-lettres",
        name: "Français / Anglais / 3ème langue",
        description: "Maîtrise avancée des langues étrangères",
        slug: "langues-bac-lettres",
        icon: "Languages"
      }
    ]
  },
  
  // Baccalauréat - Sciences
  {
    id: "bac-sciences",
    name: "BAC",
    level: "high",
    specialization: "Sciences",
    slug: "bac-sciences",
    subjects: [
      {
        id: "bio-avancee-bac",
        name: "Biologie (SVT) avancée",
        description: "Biologie moléculaire, génétique et écologie approfondie",
        slug: "bio-avancee-bac",
        icon: "Dna"
      },
      {
        id: "chimie-bac",
        name: "Chimie",
        description: "Chimie organique, inorganique et analyse chimique",
        slug: "chimie-bac",
        icon: "FlaskConical"
      },
      {
        id: "physique-bac-sci",
        name: "Physique",
        description: "Mécanique quantique, relativité et physique moderne",
        slug: "physique-bac-sci",
        icon: "Atoms"
      },
      {
        id: "math-bac-sci",
        name: "Mathématiques",
        description: "Analyse complexe, algèbre linéaire et probabilités",
        slug: "math-bac-sci",
        icon: "Calculator"
      },
      {
        id: "info-bac-sci",
        name: "Informatique",
        description: "Programmation scientifique et
