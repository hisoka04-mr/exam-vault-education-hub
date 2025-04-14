
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'english' | 'arabic' | 'french';

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, Record<string, string>>;
  t: (key: string) => string;
};

const translations = {
  english: {
    home: 'Home',
    categories: 'Categories',
    search: 'Search',
    searchPlaceholder: 'Search for exams, tests, and materials...',
    signIn: 'Sign In',
    createAccount: 'Create Account',
    exploreCategories: 'Explore Categories',
    findResources: 'Find educational resources organized by subject area.',
    viewAllCategories: 'View all categories',
    whyChoosePlatform: 'Why Choose Our Platform?',
    qualityResources: 'Quality Resources',
    qualityResourcesDesc: 'All our educational materials are carefully curated and reviewed by experienced educators.',
    easyAccess: 'Easy Access',
    easyAccessDesc: 'Quickly find and download the resources you need with our intuitive search and filtering.',
    communityDriven: 'Community Driven',
    communityDrivenDesc: 'Join thousands of educators and students sharing and collaborating on educational content.',
    heroTitle: 'Educational Resources for Everyone',
    heroDescription: 'Access thousands of free exams, tests, and educational materials to enhance your teaching or accelerate your learning.',
  },
  arabic: {
    home: 'الرئيسية',
    categories: 'الفئات',
    search: 'بحث',
    searchPlaceholder: 'ابحث عن الاختبارات والامتحانات والمواد التعليمية...',
    signIn: 'تسجيل الدخول',
    createAccount: 'إنشاء حساب',
    exploreCategories: 'استكشف الفئات',
    findResources: 'ابحث عن موارد تعليمية منظمة حسب المواضيع.',
    viewAllCategories: 'عرض جميع الفئات',
    whyChoosePlatform: 'لماذا تختار منصتنا؟',
    qualityResources: 'موارد عالية الجودة',
    qualityResourcesDesc: 'جميع موادنا التعليمية تمت مراجعتها بعناية من قبل مدرسين ذوي خبرة.',
    easyAccess: 'سهولة الوصول',
    easyAccessDesc: 'ابحث وحمّل الموارد التي تحتاجها بسرعة باستخدام نظام البحث والتصفية سهل الاستخدام.',
    communityDriven: 'مدعوم من المجتمع',
    communityDrivenDesc: 'انضم إلى آلاف المعلمين والطلاب الذين يشاركون ويتعاونون في المحتوى التعليمي.',
    heroTitle: 'موارد تعليمية للجميع',
    heroDescription: 'الوصول إلى آلاف الاختبارات والامتحانات والمواد التعليمية المجانية لتعزيز التدريس أو تسريع التعلم.',
  },
  french: {
    home: 'Accueil',
    categories: 'Catégories',
    search: 'Rechercher',
    searchPlaceholder: 'Rechercher des examens, des tests et des matériels...',
    signIn: 'Se connecter',
    createAccount: 'Créer un compte',
    exploreCategories: 'Explorer les catégories',
    findResources: 'Trouvez des ressources éducatives organisées par sujet.',
    viewAllCategories: 'Voir toutes les catégories',
    whyChoosePlatform: 'Pourquoi choisir notre plateforme?',
    qualityResources: 'Ressources de qualité',
    qualityResourcesDesc: 'Tous nos matériels éducatifs sont soigneusement sélectionnés et révisés par des éducateurs expérimentés.',
    easyAccess: 'Accès facile',
    easyAccessDesc: 'Trouvez et téléchargez rapidement les ressources dont vous avez besoin grâce à notre recherche et filtrage intuitifs.',
    communityDriven: 'Communauté active',
    communityDrivenDesc: 'Rejoignez des milliers d\'enseignants et d\'étudiants qui partagent et collaborent sur du contenu éducatif.',
    heroTitle: 'Ressources éducatives pour tous',
    heroDescription: 'Accédez à des milliers d\'examens, de tests et de matériels éducatifs gratuits pour améliorer votre enseignement ou accélérer votre apprentissage.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('english');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
