
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import CategoryList from "@/components/CategoryList";

const Categories = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
            All Categories
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive collection of educational resources organized by subject area.
          </p>
          
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative flex items-center">
              <Search className="h-5 w-5 absolute left-3 text-gray-400" />
              <Input
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <CategoryList />
        </div>
      </div>
    </div>
  );
};

export default Categories;
