
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileUploadForm from "@/components/FileUploadForm";
import { Exam } from "@/data/exams";
import { categories } from "@/data/categories";
import { classes } from "@/data/classes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { FileText, Upload, FolderOpen, Trash2, LogOut } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/contexts/AuthContext";
import { getExams, deleteExam, uploadExam, ExamUpload } from "@/services/examService";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const Admin = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [exams, setExams] = useState<Exam[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("upload");
  const { user, signOut } = useAuth();

  useEffect(() => {
    const fetchExams = async () => {
      try {
        setIsLoading(true);
        const data = await getExams();
        setExams(data);
      } catch (error) {
        console.error("Error fetching exams:", error);
        toast({
          title: "Error",
          description: "Failed to load exams. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchExams();
  }, []);

  const handleFileUploaded = async (fileInfo: {
    name: string;
    size: string;
    type: string;
    url: string;
    dateAdded: string;
    file: File;
    description: string;
  }) => {
    if (!selectedCategory) {
      toast({
        title: "Error",
        description: "Please select a category or class",
        variant: "destructive",
      });
      return;
    }

    try {
      const examUpload: ExamUpload = {
        title: fileInfo.name,
        description: fileInfo.description,
        categoryId: selectedCategory,
        file: fileInfo.file,
      };

      const uploaded = await uploadExam(examUpload);

      if (uploaded) {
        setExams(prev => [uploaded, ...prev]);
        
        toast({
          title: "Exam added successfully",
          description: `${fileInfo.name} has been added to ${getCategoryOrClassName(selectedCategory)}`,
        });
        
        setSelectedTab("manage");
      } else {
        throw new Error("Failed to upload exam");
      }
    } catch (error) {
      toast({
        title: "Upload Failed",
        description: "There was an error uploading the exam. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDeleteExam = async (id: string) => {
    try {
      const success = await deleteExam(id);
      if (success) {
        setExams(prev => prev.filter(exam => exam.id !== id));
        toast({
          title: "Exam deleted",
          description: "The exam has been successfully deleted.",
        });
      } else {
        throw new Error("Failed to delete exam");
      }
    } catch (error) {
      toast({
        title: "Delete Failed",
        description: "There was an error deleting the exam. Please try again.",
        variant: "destructive",
      });
    }
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

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Upload and manage PDF exams for your website
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                Logged in as: {user?.email}
              </p>
              <Button variant="outline" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" /> Sign Out
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-md flex items-center gap-2">
              <FileText className="text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm font-medium">Total Exams</p>
                <p className="text-xl font-bold">{exams.length}</p>
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
                  View, download and remove exam files
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-medium mb-2 mt-6">All Exams</h3>
                
                {isLoading ? (
                  <div className="text-center py-10">
                    <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4" />
                    <p>Loading exams...</p>
                  </div>
                ) : exams.length > 0 ? (
                  <div className="space-y-4">
                    {exams.map((exam) => (
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
                          
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button variant="destructive" size="sm">
                                <Trash2 className="h-4 w-4 mr-1" /> Delete
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                <AlertDialogDescription>
                                  This will permanently delete the exam "{exam.title}". This action cannot be undone.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction onClick={() => handleDeleteExam(exam.id)}>
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white/50 dark:bg-gray-700/30 border border-dashed rounded-md">
                    <FileText className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                    <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-200">No exams found</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Upload your first exam file to get started
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
