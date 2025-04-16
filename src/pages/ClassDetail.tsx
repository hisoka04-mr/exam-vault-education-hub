
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { classes } from "@/data/classes";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import * as LucideIcons from "lucide-react";
import ExamCard from "@/components/ExamCard";
import { getExamsByCategory } from "@/data/exams";
import { useState } from "react";

const ClassDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  
  const schoolClass = classes.find((c) => c.slug === slug);
  
  if (!schoolClass) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold mb-2">{t("classNotFound") || "Class Not Found"}</h1>
        <p className="text-gray-600 mb-6">{t("classNotFoundDesc") || "The class you're looking for doesn't exist."}</p>
        <Button asChild>
          <Link to="/classes">{t("backToClasses") || "Back to Classes"}</Link>
        </Button>
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

  // Handle subject selection
  const handleSubjectClick = (subjectId: string) => {
    setSelectedSubject(selectedSubject === subjectId ? null : subjectId);
  };

  // Get current subject
  const currentSubject = selectedSubject 
    ? schoolClass.subjects.find(s => s.id === selectedSubject) 
    : null;

  // Get exams for current subject
  const subjectExams = currentSubject
    ? classExams.filter(exam => 
        exam.title.toLowerCase().includes(currentSubject.name.toLowerCase()) ||
        exam.description.toLowerCase().includes(currentSubject.name.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            to="/classes" 
            className="inline-flex items-center text-education-primary hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t("backToClasses") || "Back to Classes"}
          </Link>
          
          <div className="flex items-center space-x-4 mb-2 bg-white/60 backdrop-blur-md rounded-lg p-4 shadow-md">
            <div className="p-3 rounded-full bg-education-light text-education-primary">
              <LevelIcon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{schoolClass.name}</h1>
              <Badge variant="outline" className="mt-2">
                {schoolClass.level === "primary" && (t("primarySchool") || "Primary School")}
                {schoolClass.level === "middle" && (t("middleSchool") || "Middle School")}
                {schoolClass.level === "high" && (t("highSchool") || "High School")}
              </Badge>
            </div>
          </div>
        </div>

        {selectedSubject ? (
          <div>
            <Button 
              variant="outline" 
              onClick={() => setSelectedSubject(null)} 
              className="mb-6 bg-white/60 backdrop-blur-md"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all subjects
            </Button>
            
            {currentSubject && (
              <>
                <div className="flex items-center gap-3 mb-4 bg-white/60 backdrop-blur-md rounded-lg p-4 shadow-md">
                  <div className="p-2 rounded-full bg-education-light text-education-primary">
                    {(() => {
                      const IconComponent = (LucideIcons as any)[currentSubject.icon] || LucideIcons.BookText;
                      return <IconComponent className="h-5 w-5" />;
                    })()}
                  </div>
                  <h2 className="text-2xl font-semibold">{currentSubject.name}</h2>
                </div>
                
                <p className="text-gray-600 mb-6 bg-white/60 backdrop-blur-md rounded-lg p-4 shadow-md">{currentSubject.description}</p>
                
                {subjectExams.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {subjectExams.map((exam) => (
                      <ExamCard key={exam.id} exam={exam} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white/60 backdrop-blur-md rounded-lg shadow-md">
                    <FileText className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-4 text-lg font-medium text-gray-900">No exams available</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      There are no exams available for this subject yet.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-semibold mb-6">{t("availableSubjects") || "Available Subjects"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {schoolClass.subjects.map((subject) => {
                const IconComponent = (LucideIcons as any)[subject.icon] || LucideIcons.BookText;
                // Filter exams for this specific subject
                const subjectExams = classExams.filter(exam => 
                  exam.title.toLowerCase().includes(subject.name.toLowerCase()) ||
                  exam.description.toLowerCase().includes(subject.name.toLowerCase())
                );
                
                return (
                  <Card 
                    key={subject.id} 
                    className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer bg-white/70 backdrop-blur-md"
                    onClick={() => handleSubjectClick(subject.id)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-full bg-education-light text-education-primary">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <CardTitle className="text-lg">{subject.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-3">{subject.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {subjectExams.length} {subjectExams.length === 1 ? 'exam' : 'exams'} available
                        </span>
                        <Button variant="ghost" size="sm" className="text-education-primary hover:text-education-primary/80">
                          View exams
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassDetail;
