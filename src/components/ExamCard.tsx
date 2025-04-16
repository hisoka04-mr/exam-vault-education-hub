
import { Download } from "lucide-react";
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
    <Card className="bg-gray-50 border border-gray-200">
      <CardContent className="p-3">
        <h4 className="font-medium text-sm">{exam.title}</h4>
        <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
          <span>{exam.fileType} • {exam.fileSize}</span>
          <span>{new Date(exam.dateAdded).toLocaleDateString()}</span>
        </div>
      </CardContent>
      <CardFooter className="p-2 pt-0">
        <Button 
          className="w-full" 
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
