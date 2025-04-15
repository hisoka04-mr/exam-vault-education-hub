
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { classes } from "@/data/classes";
import { useLanguage } from "@/contexts/LanguageContext";
import * as LucideIcons from "lucide-react";
import { GraduationCap, School, BookOpen } from "lucide-react";

const ClassList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();
  
  const primaryClasses = classes.filter(c => c.level === "primary");
  const middleClasses = classes.filter(c => c.level === "middle");
  const highClasses = classes.filter(c => c.level === "high");

  const filteredPrimaryClasses = primaryClasses.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredMiddleClasses = middleClasses.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const filteredHighClasses = highClasses.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <div className="mt-2 text-xs text-gray-500">
            {schoolClass.subjects.length} {schoolClass.subjects.length === 1 ? "subject" : "subjects"}
          </div>
        </CardHeader>
      </Card>
    </Link>
  );

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
          {filteredHighClasses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredHighClasses.map(renderClassCard)}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">{t("noClassesFound") || "No classes found"}</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClassList;
