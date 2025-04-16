
import { Download, FileText } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
    <Card className="bg-gray-50 border border-gray-200">
      <CardContent className="p-3">
        <div className="flex items-start gap-2">
          <FileText className="h-5 w-5 text-education-primary mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-sm">{exam.title}</h4>
            <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
              <span>{exam.fileType} • {exam.fileSize}</span>
              <span>{new Date(exam.dateAdded).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-2 pt-0 flex gap-2">
        <Button 
          className="flex-1" 
          size="sm" 
          variant="outline"
          onClick={handlePreview}
        >
          <FileText size={14} className="mr-2" /> 
          Preview
        </Button>
        <Button 
          className="flex-1" 
          size="sm" 
          variant="outline"
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
