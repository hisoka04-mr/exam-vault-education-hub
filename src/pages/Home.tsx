
import HeroSection from "@/components/HeroSection";
import CategoryList from "@/components/CategoryList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Users, FileText } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Explore Categories
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Find educational resources organized by subject area.
            </p>
          </div>
          
          <div className="mt-12">
            <CategoryList />
          </div>
          
          <div className="mt-10 text-center">
            <Link 
              to="/categories"
              className="inline-flex items-center text-education-primary hover:text-education-dark font-medium"
            >
              View all categories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose Our Platform?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-education-light text-education-primary">
                  <FileText size={24} />
                </div>
                <CardTitle className="mt-4">Quality Resources</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  All our educational materials are carefully curated and reviewed by experienced educators.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-education-light text-education-primary">
                  <Download size={24} />
                </div>
                <CardTitle className="mt-4">Easy Access</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Quickly find and download the resources you need with our intuitive search and filtering.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-col items-center">
                <div className="p-3 rounded-full bg-education-light text-education-primary">
                  <Users size={24} />
                </div>
                <CardTitle className="mt-4">Community Driven</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">
                  Join thousands of educators and students sharing and collaborating on educational content.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
