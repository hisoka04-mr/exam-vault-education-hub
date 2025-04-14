import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
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
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                  Site
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/" className="text-base text-gray-600 hover:text-gray-800">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/categories" className="text-base text-gray-600 hover:text-gray-800">
                      Categories
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-800">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-800">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-800">
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-800">
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                  Resources
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-800">
                      Study Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-800">
                      Practice Tests
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-800">
                      Flashcards
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                  Contribute
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-800">
                      Upload Resources
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-800">
                      Become a Contributor
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-600 hover:text-gray-800">
                      Partner with Us
                    </a>
                  </li>
                </ul>
              </div>
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
