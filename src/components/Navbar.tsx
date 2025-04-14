import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-education-primary text-xl font-bold">
                  {language === 'arabic' ? 'الشامل في التعليم' : 'Education'}
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className="border-transparent text-gray-500 hover:text-gray-800 inline-flex items-center px-1 pt-1 border-b-2"
              >
                {t('home')}
              </Link>
              <Link
                to="/categories"
                className="border-transparent text-gray-500 hover:text-gray-800 inline-flex items-center px-1 pt-1 border-b-2"
              >
                {t('categories')}
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <LanguageSelector />
            <Button variant="outline" className="mx-2">
              {t('signIn')}
            </Button>
            <Button>
              {t('createAccount')}
            </Button>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              to="/categories"
              className="block pl-3 pr-4 py-2 text-base font-medium hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              {t('categories')}
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-2">
              <LanguageSelector />
              <Button variant="outline" className="w-full">
                {t('signIn')}
              </Button>
              <Button className="w-full">
                {t('createAccount')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
