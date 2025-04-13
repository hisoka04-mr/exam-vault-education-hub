
import { Download } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Exam } from "@/data/exams";

interface ExamCardProps {
  exam: Exam;
}

const ExamCard = ({ exam }: ExamCardProps) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <h3 className="text-lg font-medium">{exam.title}</h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-gray-600 text-sm">{exam.description}</p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-gray-500">
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
        <Button className="w-full" size="sm">
          <Download size={16} className="mr-2" /> Download
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExamCard;
