
import { Download } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Exam } from "@/data/exams";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface ExamCardProps {
  exam: Exam;
}

const ExamCard = ({ exam }: ExamCardProps) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Simulate download if the URL is a placeholder
    if (exam.downloadUrl === "#") {
      setTimeout(() => {
        toast({
          title: "Download Simulated",
          description: `${exam.title} would download now if URL was configured.`,
        });
        setIsDownloading(false);
      }, 1000);
      return;
    }
    
    // Real download
    try {
      const link = document.createElement("a");
      link.href = exam.downloadUrl;
      link.target = "_blank";
      link.download = `${exam.title.replace(/\s+/g, "-").toLowerCase()}.${exam.fileType.toLowerCase()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Download Started",
        description: `${exam.title} is now downloading.`,
      });
    } catch (error) {
      toast({
        title: "Download Failed",
        description: "There was an error downloading the file.",
        variant: "destructive",
      });
      console.error("Download error:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <Card className="h-full flex flex-col dark:bg-gray-900 dark:border-gray-800">
      <CardHeader className="pb-2">
        <h3 className="text-lg font-medium dark:text-white">{exam.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm dark:text-gray-300">{exam.description}</p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-500 dark:text-gray-400">
          <div>
            <span className="font-medium">Format:</span> {exam.fileType}
          </div>
          <div>
            <span className="font-medium">Size:</span> {exam.fileSize}
          </div>
          <div className="col-span-2">
            <span className="font-medium">Added:</span> {new Date(exam.dateAdded).toLocaleDateString()}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          className="w-full" 
          size="sm" 
          onClick={handleDownload}
          disabled={isDownloading}
        >
          <Download size={16} className={`mr-2 ${isDownloading ? 'animate-pulse' : ''}`} /> 
          {isDownloading ? 'Downloading...' : 'Download'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
