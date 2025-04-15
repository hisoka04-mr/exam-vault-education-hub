
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div>
              <h3 className="text-education-primary text-2xl font-bold">
                {language === 'arabic' ? 'الشامل في التعليم' : 'Education'}
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                {language === 'arabic' 
                  ? 'مصدرك الموثوق للمواد التعليمية.' 
                  : 'Your trusted resource for educational materials.'}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; {new Date().getFullYear()} Education. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
