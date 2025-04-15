
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { classes } from "@/data/classes";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";
import ExamCard from "@/components/ExamCard";
import { getExamsByCategory } from "@/data/exams";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ClassDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  
  const schoolClass = classes.find((c) => c.slug === slug);
  
  if (!schoolClass) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">{t("classNotFound") || "Class Not Found"}</h1>
          <p className="text-gray-600 mb-6">{t("classNotFoundDesc") || "The class you're looking for doesn't exist."}</p>
          <Button asChild>
            <Link to="/classes">{t("backToClasses") || "Back to Classes"}</Link>
          </Button>
        </div>
      </div>
    );
  }

  // Get the level icon
  let LevelIcon;
  switch (schoolClass.level) {
    case "primary":
      LevelIcon = LucideIcons.School;
      break;
    case "middle":
      LevelIcon = LucideIcons.BookOpen;
      break;
    case "high":
      LevelIcon = LucideIcons.GraduationCap;
      break;
    default:
      LevelIcon = LucideIcons.School;
  }

  // Get exams for this class
  const classExams = getExamsByCategory(schoolClass.id);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/classes" className="inline-flex items-center text-education-primary hover:underline mb-6 dark:text-blue-400">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("backToClasses") || "Back to Classes"}
          </Link>
          
          <div className="flex items-center space-x-4 mb-2">
            <div className="p-3 rounded-full bg-education-light dark:bg-blue-900/30 text-education-primary dark:text-blue-400">
              <LevelIcon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{schoolClass.name}</h1>
              <Badge variant="outline" className="mt-2">
                {schoolClass.level === "primary" && (t("primarySchool") || "Primary School")}
                {schoolClass.level === "middle" && (t("middleSchool") || "Middle School")}
                {schoolClass.level === "high" && (t("highSchool") || "High School")}
              </Badge>
            </div>
          </div>
        </div>

        <Tabs defaultValue="subjects" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="subjects">
              <LucideIcons.BookOpen className="h-4 w-4 mr-2" />
              {t("subjects") || "Subjects"}
            </TabsTrigger>
            <TabsTrigger value="exams">
              <LucideIcons.FileText className="h-4 w-4 mr-2" />
              {t("exams") || "Exam Papers"}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="subjects">
            <h2 className="text-xl font-semibold mb-4 dark:text-white">{t("availableSubjects") || "Available Subjects"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolClass.subjects.map((subject) => {
                const IconComponent = (LucideIcons as any)[subject.icon] || LucideIcons.BookText;
                
                return (
                  <Card key={subject.id} className="overflow-hidden hover:shadow-md transition-shadow duration-300 dark:bg-gray-900 dark:border-gray-800">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-education-light dark:bg-blue-900/30 text-education-primary dark:text-blue-400">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg dark:text-white">{subject.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{subject.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="exams">
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold dark:text-white">{t("availableExams") || "Available Exam Papers"}</h2>
            </div>
            
            {classExams.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {classExams.map((exam) => (
                  <ExamCard key={exam.id} exam={exam} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <LucideIcons.FileQuestion className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-600 mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  {t("noExamsAvailable") || "No Exams Available"}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {t("noExamsDesc") || "There are no exam papers available for this class yet."}
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ClassDetail;
