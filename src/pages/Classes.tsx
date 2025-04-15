
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ClassList from "@/components/ClassList";

const Classes = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            {t("schoolClasses") || "School Classes"}
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            {t("classesDescription") || "Browse our collection of educational resources organized by school year. Select a class to see all available subjects."}
          </p>
        </div>
        
        <ClassList />
      </div>
    </div>
  );
};

export default Classes;
