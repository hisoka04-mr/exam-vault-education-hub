
import HeroSection from "@/components/HeroSection";
import CategoryList from "@/components/CategoryList";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <HeroSection />
      
      <div className="py-12 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              {t('exploreCategories')}
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              {t('findResources')}
            </p>
          </div>
          
          <div className="mt-12">
            <CategoryList />
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/categories"
              className="inline-flex items-center text-education-primary dark:text-blue-400 hover:text-education-dark dark:hover:text-blue-500 font-medium"
            >
              {t('viewAllCategories')} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
