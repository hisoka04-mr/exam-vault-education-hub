
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, File, X } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

interface FileUploadFormProps {
  onFileUploaded?: (fileInfo: {
    name: string;
    size: string;
    type: string;
    url: string;
    dateAdded: string;
  }) => void;
  category?: string;
  className?: string;
}

const FileUploadForm = ({ onFileUploaded, category = "general", className }: FileUploadFormProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

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
      // Check if file is a PDF
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
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

    setIsUploading(true);

    // In a real application, you would upload the file to a server here
    // For demonstration, we'll simulate an upload delay
    setTimeout(() => {
      // Create a local URL (only works for demonstration)
      const fileUrl = URL.createObjectURL(selectedFile);
      
      const fileInfo = {
        name: data.title || selectedFile.name,
        size: formatFileSize(selectedFile.size),
        type: "PDF",
        url: fileUrl,
        dateAdded: new Date().toISOString().split("T")[0],
      };

      if (onFileUploaded) {
        onFileUploaded(fileInfo);
      }

      toast({
        title: "File uploaded successfully",
        description: `${selectedFile.name} has been uploaded.`,
      });

      // Reset the form
      form.reset();
      setSelectedFile(null);
      setIsUploading(false);
    }, 1500);
  });

  return (
    <div className={className}>
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-4">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Document Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter document title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter a brief description" {...field} />
                </FormControl>
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
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-education-primary transition-colors"
                        onClick={() => document.getElementById("file-upload")?.click()}>
                        <Upload className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Click to select or drop a PDF file</p>
                        <Input
                          id="file-upload"
                          type="file"
                          accept=".pdf"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </div>
                    ) : (
                      <Card>
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <File className="h-8 w-8 text-education-primary" />
                            <div>
                              <p className="font-medium">{selectedFile.name}</p>
                              <p className="text-xs text-gray-500">{formatFileSize(selectedFile.size)}</p>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            type="button"
                            onClick={removeFile}
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

          <Button 
            type="submit" 
            className="w-full bg-education-primary hover:bg-education-primary-dark"
            disabled={isUploading || !selectedFile}
          >
            {isUploading ? (
              <>
                <span className="animate-pulse mr-2">Uploading...</span>
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Upload Document
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FileUploadForm;
