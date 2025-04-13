
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Category } from "@/data/categories";
import * as LucideIcons from "lucide-react";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  // Dynamic icon selection based on the category's icon name
  const IconComponent = (LucideIcons as any)[category.icon] || LucideIcons.FileQuestion;

  return (
    <Link to={`/categories/${category.slug}`}>
      <Card className="h-full transition-all hover:shadow-md hover:border-education-primary">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <div className="p-2 rounded-full bg-education-light text-education-primary">
            <IconComponent size={24} />
          </div>
          <h3 className="text-lg font-medium">{category.name}</h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 text-sm">{category.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CategoryCard;
