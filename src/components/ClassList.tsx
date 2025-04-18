
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { classes } from "@/data/classes";
import { useLanguage } from "@/contexts/LanguageContext";
import * as LucideIcons from "lucide-react";
import { GraduationCap, School, BookOpen, Bookmark } from "lucide-react";

const ClassList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();
  
  // Group classes by level
  const primaryClasses = classes.filter(c => c.level === "primary");
  const middleClasses = classes.filter(c => c.level === "middle");
  
  // Group high school classes by year
  const firstYearClasses = classes.filter(c => c.level === "high" && c.name.includes("1ère"));
  const secondYearClasses = classes.filter(c => c.level === "high" && c.name.includes("2ème"));
  const thirdYearClasses = classes.filter(c => c.level === "high" && c.name.includes("3ème"));
  const bacClasses = classes.filter(c => c.level === "high" && c.name.includes("BAC"));

  // Filter classes by search term
  const filterClasses = (classArray) => {
    return classArray.filter(c => 
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (c.specialization && c.specialization.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  const filteredPrimaryClasses = filterClasses(primaryClasses);
  const filteredMiddleClasses = filterClasses(middleClasses);
  const filteredFirstYearClasses = filterClasses(firstYearClasses);
  const filteredSecondYearClasses = filterClasses(secondYearClasses);
  const filteredThirdYearClasses = filterClasses(thirdYearClasses);
  const filteredBacClasses = filterClasses(bacClasses);

  // Combined high school classes
  const filteredHighClasses = [
    ...filteredFirstYearClasses,
    ...filteredSecondYearClasses,
    ...filteredThirdYearClasses, 
    ...filteredBacClasses
  ];

  const renderClassCard = (schoolClass) => (
    <Link to={`/classes/${schoolClass.slug}`} key={schoolClass.id}>
      <Card className="hover:shadow-md transition-shadow duration-300 h-full">
        <CardHeader>
          <div className="flex items-center gap-3">
            {schoolClass.level === "primary" && <School className="h-5 w-5 text-blue-500" />}
            {schoolClass.level === "middle" && <BookOpen className="h-5 w-5 text-green-500" />}
            {schoolClass.level === "high" && <GraduationCap className="h-5 w-5 text-purple-500" />}
            <CardTitle className="text-lg">{schoolClass.name}</CardTitle>
          </div>
          {schoolClass.specialization && (
            <Badge variant="secondary" className="mt-1">
              {schoolClass.specialization}
            </Badge>
          )}
          <div className="mt-2 text-xs text-gray-500">
            {schoolClass.subjects.length} {schoolClass.subjects.length === 1 ? "subject" : "subjects"}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
  
  // Group classes by year for high school tab
  const renderHighSchoolContent = () => {
    if (filteredHighClasses.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500">{t("noClassesFound") || "No classes found"}</p>
        </div>
      );
    }
    
    // Create groups
    const yearGroups = [
      { 
        title: "1ère Année", 
        classes: filteredFirstYearClasses,
        icon: <Bookmark className="h-5 w-5 text-blue-400" />
      },
      { 
        title: "2ème Année", 
        classes: filteredSecondYearClasses,
        icon: <Bookmark className="h-5 w-5 text-green-400" />
      },
      { 
        title: "3ème Année", 
        classes: filteredThirdYearClasses,
        icon: <Bookmark className="h-5 w-5 text-yellow-400" />
      },
      { 
        title: "Baccalauréat", 
        classes: filteredBacClasses,
        icon: <Bookmark className="h-5 w-5 text-red-400" />
      }
    ];
    
    return (
      <div className="space-y-8">
        {yearGroups.map(group => (
          group.classes.length > 0 && (
            <div key={group.title}>
              <div className="flex items-center mb-4">
                {group.icon}
                <h3 className="text-xl font-bold ml-2">{group.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.classes.map(renderClassCard)}
              </div>
            </div>
          )
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            type="text"
            placeholder={t("searchClasses") || "Search classes..."}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <Tabs defaultValue="primary" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="primary">
            <School className="h-4 w-4 mr-2" />
            {t("primary") || "Primary School"}
          </TabsTrigger>
          <TabsTrigger value="middle">
            <BookOpen className="h-4 w-4 mr-2" />
            {t("middle") || "Middle School"}
          </TabsTrigger>
          <TabsTrigger value="high">
            <GraduationCap className="h-4 w-4 mr-2" />
            {t("high") || "High School"}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="primary">
          {filteredPrimaryClasses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredPrimaryClasses.map(renderClassCard)}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">{t("noClassesFound") || "No classes found"}</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="middle">
          {filteredMiddleClasses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredMiddleClasses.map(renderClassCard)}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">{t("noClassesFound") || "No classes found"}</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="high">
          {renderHighSchoolContent()}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClassList;
