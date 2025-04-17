
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, File, X, Check, AlertCircle } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";

interface FileUploadFormProps {
  onFileUploaded?: (fileInfo: {
    name: string;
    size: string;
    type: string;
    url: string;
    dateAdded: string;
    file: File;
    description: string;
  }) => void;
  category?: string;
  className?: string;
}

const FileUploadForm = ({ onFileUploaded, category = "general", className }: FileUploadFormProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [dragActive, setDragActive] = useState(false);

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      file: null as unknown as FileList,
    },
  });

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " bytes";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      validateAndSetFile(file);
    }
  };
  
  const validateAndSetFile = (file: File) => {
    // Check if file is a PDF
    if (file.type !== "application/pdf") {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive",
      });
      return;
    }
    
    // Check file size (limit to 10MB)
    if (file.size > 10 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 10MB",
        variant: "destructive",
      });
      return;
    }
    
    setSelectedFile(file);
    
    // Auto-fill the title field with the filename (without extension)
    const fileName = file.name.replace(/\.[^/.]+$/, "");
    form.setValue("title", fileName);
  };

  const removeFile = () => {
    setSelectedFile(null);
    form.setValue("file", null as unknown as FileList);
  };

  const onSubmit = form.handleSubmit((data) => {
    if (!selectedFile) {
      toast({
        title: "No file selected",
        description: "Please select a PDF file to upload",
        variant: "destructive",
      });
      return;
    }

    if (!category || category === "general") {
      toast({
        title: "No category selected",
        description: "Please select a category for this file",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 10;
      });
    }, 300);

    // With Supabase, we'll let the examService handle the actual upload
    setTimeout(() => {
      clearInterval(interval);
      setUploadProgress(100);
      
      const fileInfo = {
        name: data.title || selectedFile.name,
        size: formatFileSize(selectedFile.size),
        type: "PDF",
        url: URL.createObjectURL(selectedFile), // This is just for preview, Supabase will handle storage
        dateAdded: new Date().toISOString().split("T")[0],
        file: selectedFile,
        description: data.description
      };

      if (onFileUploaded) {
        onFileUploaded(fileInfo);
      }

      // Reset the form after successful upload
      form.reset();
      setSelectedFile(null);
      setIsUploading(false);
      setUploadProgress(0);
    }, 1000);
  });

  // Handle drag events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };
  
  // Handle drop event
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndSetFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-5">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Document Title</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Enter a title for the document" 
                    {...field} 
                    className="bg-white/80 dark:bg-gray-800/80"
                  />
                </FormControl>
                <FormDescription>
                  This will be displayed to users browsing the exams
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter a brief description of this document" 
                    {...field}
                    className="resize-none bg-white/80 dark:bg-gray-800/80"
                    rows={3}
                  />
                </FormControl>
                <FormDescription>
                  Helpful details like exam topics, grade level, or important information
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="file"
            render={() => (
              <FormItem>
                <FormLabel>Upload PDF File</FormLabel>
                <FormControl>
                  <div className="flex flex-col gap-2">
                    {!selectedFile ? (
                      <div 
                        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                          dragActive 
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                            : "border-gray-300 hover:border-blue-500 dark:border-gray-600 dark:hover:border-blue-400"
                        }`}
                        onClick={() => document.getElementById("file-upload")?.click()}
                        onDragEnter={handleDrag}
                        onDragLeave={handleDrag}
                        onDragOver={handleDrag}
                        onDrop={handleDrop}
                      >
                        <Upload className={`h-12 w-12 mx-auto mb-4 ${dragActive ? "text-blue-500" : "text-gray-400"}`} />
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
                          <span className="font-medium">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">PDF files only (Max 10MB)</p>
                        <Input
                          id="file-upload"
                          type="file"
                          accept=".pdf"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </div>
                    ) : (
                      <Card className="border border-green-200 dark:border-green-900">
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                              <File className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                              <p className="font-medium text-green-800 dark:text-green-300">{selectedFile.name}</p>
                              <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-500 dark:text-gray-400">{formatFileSize(selectedFile.size)}</span>
                                <span className="flex items-center text-xs text-green-600 dark:text-green-400">
                                  <Check className="h-3 w-3 mr-1" /> Ready to upload
                                </span>
                              </div>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            type="button"
                            onClick={removeFile}
                            className="text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isUploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>Uploading to Supabase Storage...</span>
                <span>{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          )}

          <div className="flex items-center gap-2 pt-2">
            <AlertCircle className="h-4 w-4 text-amber-500" />
            <p className="text-xs text-gray-600 dark:text-gray-400">
              Make sure you've selected a category before uploading
            </p>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-education-primary hover:bg-education-primary-dark"
            disabled={isUploading || !selectedFile}
          >
            {isUploading ? (
              <>
                <span className="mr-2">Uploading...</span>
                <span className="text-xs">{uploadProgress}%</span>
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload PDF Document
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FileUploadForm;
