
import { Download, FileText, Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Exam } from "@/data/exams";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";

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
    
    // Check if it's a blob URL (locally uploaded file)
    if (exam.downloadUrl.startsWith('blob:')) {
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
      return;
    }
    
    // Regular download for external URLs
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

  const handlePreview = () => {
    window.open(exam.downloadUrl, '_blank');
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md bg-white/80 dark:bg-gray-800/60 border-gray-200 dark:border-gray-700">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-md bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 mt-1">
            <FileText className="h-5 w-5 text-education-primary dark:text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-sm mb-1 truncate">{exam.title}</h4>
            <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 mb-2">{exam.description}</p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="text-xs bg-gray-50 dark:bg-gray-700 py-0 px-1">
                {exam.fileType}
              </Badge>
              <Badge variant="outline" className="text-xs bg-gray-50 dark:bg-gray-700 py-0 px-1">
                {exam.fileSize}
              </Badge>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(exam.dateAdded).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0 flex gap-2 bg-gray-50/50 dark:bg-gray-800/80">
        <Button 
          className="flex-1" 
          size="sm" 
          variant="outline"
          onClick={handlePreview}
        >
          <Eye size={14} className="mr-2" /> 
          Preview
        </Button>
        <Button 
          className="flex-1" 
          size="sm" 
          variant="default"
          onClick={handleDownload}
          disabled={isDownloading}
        >
          <Download size={14} className={`mr-2 ${isDownloading ? 'animate-pulse' : ''}`} /> 
          {isDownloading ? 'Downloading...' : 'Download'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
