import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUploadForm from "@/components/FileUploadForm";
import { exams, Exam } from "@/data/exams";
import { categories } from "@/data/categories";
import { classes } from "@/data/classes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { FileText, Upload, FolderOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Admin = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [uploadedExams, setUploadedExams] = useState<Exam[]>([]);
  const [selectedTab, setSelectedTab] = useState("upload");
  const navigate = useNavigate();

  const handleFileUploaded = (fileInfo: {
    name: string;
    size: string;
    type: string;
    url: string;
    dateAdded: string;
  }) => {
    if (!selectedCategory) {
      toast({
        title: "Error",
        description: "Please select a category or class",
        variant: "destructive",
      });
      return;
    }

    const newExam: Exam = {
      id: `exam-${Date.now()}`,
      title: fileInfo.name,
      description: `Uploaded exam: ${fileInfo.name}`,
      categoryId: selectedCategory,
      fileType: fileInfo.type,
      fileSize: fileInfo.size,
      downloadUrl: fileInfo.url,
      dateAdded: fileInfo.dateAdded,
    };

    setUploadedExams(prev => [...prev, newExam]);
    
    toast({
      title: "Exam added successfully",
      description: `${fileInfo.name} has been added to ${getCategoryOrClassName(selectedCategory)}`,
    });
    
    setSelectedTab("manage");
  };

  const getCategoryOrClassName = (id: string) => {
    const category = categories.find(cat => cat.id === id);
    if (category) return category.name;
    
    const cls = classes.find(c => c.id === id);
    if (cls) return cls.name;
    
    return id;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (category) return category.name;
    
    const cls = classes.find(c => c.id === categoryId);
    if (cls) return cls.name;
    
    return "Unknown Category";
  };

  const existingExamsCount = exams.length;

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Upload and manage PDF exams for your website
          </p>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-md flex items-center gap-2">
              <FileText className="text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm font-medium">Existing Exams</p>
                <p className="text-xl font-bold">{existingExamsCount}</p>
              </div>
            </div>
            
            <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-md flex items-center gap-2">
              <Upload className="text-green-600 dark:text-green-400" />
              <div>
                <p className="text-sm font-medium">Uploaded Today</p>
                <p className="text-xl font-bold">{uploadedExams.length}</p>
              </div>
            </div>
          </div>
        </div>
        
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <TabsList className="mb-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md w-full justify-start">
            <TabsTrigger value="upload" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
              <Upload className="h-4 w-4 mr-2" />
              Upload New Exams
            </TabsTrigger>
            <TabsTrigger value="manage" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-blue-900/30">
              <FolderOpen className="h-4 w-4 mr-2" />
              Manage Exams
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upload">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-blue-600" />
                  Upload New Exam
                </CardTitle>
                <CardDescription>
                  Upload PDF exams and associate them with a category or class
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-base">Select Category or Class</Label>
                    <Select
                      onValueChange={setSelectedCategory}
                      value={selectedCategory}
                    >
                      <SelectTrigger id="category" className="bg-white/80 dark:bg-gray-800/80">
                        <SelectValue placeholder="Select a category or class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="" disabled>Select a category or class</SelectItem>
                        
                        <SelectItem value="category-header" disabled className="font-bold">
                          --- Subjects ---
                        </SelectItem>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))}
                        
                        <SelectItem value="class-header" disabled className="font-bold">
                          --- Classes ---
                        </SelectItem>
                        {classes.map((cls) => (
                          <SelectItem key={cls.id} value={cls.id}>
                            {cls.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {selectedCategory && (
                      <Badge variant="outline" className="mt-2 bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300">
                        Selected: {getCategoryOrClassName(selectedCategory)}
                      </Badge>
                    )}
                  </div>

                  <Separator className="my-6" />

                  <FileUploadForm 
                    onFileUploaded={handleFileUploaded} 
                    category={selectedCategory} 
                    className="mt-4"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="manage">
            <Card className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FolderOpen className="h-5 w-5 text-blue-600" />
                  Manage Exams
                </CardTitle>
                <CardDescription>
                  View and manage all uploaded exam files
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md">
                  <p className="text-amber-800 dark:text-amber-200 text-sm">
                    <strong>Note:</strong> In a real application, all exams would be stored in a database. 
                    Currently, uploaded exams are only stored in memory and will disappear after page refresh.
                  </p>
                </div>
                
                <h3 className="font-medium mb-2 mt-6">Recently Uploaded Exams</h3>
                {uploadedExams.length > 0 ? (
                  <div className="space-y-4">
                    {uploadedExams.map((exam) => (
                      <div key={exam.id} className="p-4 border bg-white/80 dark:bg-gray-700/50 rounded-md shadow-sm flex items-center justify-between hover:shadow-md transition-all">
                        <div className="flex items-center gap-3">
                          <FileText className="h-8 w-8 text-blue-500" />
                          <div>
                            <p className="font-medium">{exam.title}</p>
                            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                              <span>{exam.fileType}</span> 
                              <span>•</span> 
                              <span>{exam.fileSize}</span>
                              <span>•</span>
                              <Badge variant="outline" className="bg-blue-50 text-xs text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
                                {getCategoryName(exam.categoryId)}
                              </Badge> 
                            </div>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <a 
                            href={exam.downloadUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline text-sm px-3 py-1 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-300 rounded-md"
                          >
                            View PDF
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white/50 dark:bg-gray-700/30 border border-dashed rounded-md">
                    <FileText className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-200">No recent uploads</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Files you upload will appear here
                    </p>
                  </div>
                )}
                
                <Separator className="my-6" />
                
                <h3 className="font-medium mb-2 mt-6">Existing Exam Files</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {exams.slice(0, 6).map((exam) => (
                    <div key={exam.id} className="p-4 border bg-white/80 dark:bg-gray-700/50 rounded-md shadow-sm hover:shadow-md transition-all">
                      <div className="flex items-center gap-3 mb-2">
                        <FileText className="h-6 w-6 text-blue-500" />
                        <p className="font-medium">{exam.title}</p>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2 line-clamp-2">{exam.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <Badge variant="outline" className="bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-300">
                          {getCategoryName(exam.categoryId)}
                        </Badge>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{exam.dateAdded}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {exams.length > 6 && (
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Showing 6 of {exams.length} exams
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;
