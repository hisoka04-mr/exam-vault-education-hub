
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Facebook } from "lucide-react";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <h3 className="text-education-primary dark:text-blue-400 text-2xl font-bold">
                {language === 'arabic' ? 'الشامل في التعليم' : 'Education'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">
                {language === 'arabic' 
                  ? 'مصدرك الموثوق للمواد التعليمية.' 
                  : 'Your trusted resource for educational materials.'}
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/Completeneducation"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500"
              >
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-base text-gray-400 dark:text-gray-500 xl:text-center">
            &copy; {new Date().getFullYear()} Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
