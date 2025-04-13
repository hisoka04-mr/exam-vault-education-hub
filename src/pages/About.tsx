
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">About Education</h1>
          <p className="mt-4 text-lg text-gray-600">
            Supporting teachers and students with quality educational resources
          </p>
        </div>
        
        <Card className="mb-10">
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Education was created with a simple yet powerful mission: to make quality educational materials accessible to everyone. 
              We believe that education should be a right, not a privilege, and our platform serves as a bridge connecting educators 
              and learners with the resources they need to succeed.
            </p>
            
            <h2 className="text-xl font-semibold mb-4 mt-8">What We Offer</h2>
            <p className="text-gray-700 mb-4">
              Our platform hosts thousands of educational materials, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Exams and tests for various subjects</li>
              <li>Assessment materials for different grade levels</li>
              <li>Study guides and review materials</li>
              <li>Practice questions and worksheets</li>
            </ul>
            
            <h2 className="text-xl font-semibold mb-4 mt-8">For Teachers</h2>
            <p className="text-gray-700">
              Teachers can save valuable time by accessing ready-to-use assessments and exams. 
              Our resources are designed to align with curriculum standards and can be easily adapted 
              to meet the specific needs of your classroom. Additionally, you can contribute your own 
              materials to help fellow educators.
            </p>
            
            <h2 className="text-xl font-semibold mb-4 mt-8">For Students</h2>
            <p className="text-gray-700">
              Students can enhance their learning by practicing with authentic test materials. 
              Whether you're reviewing for an upcoming exam or looking to strengthen your understanding 
              of a particular subject, our resources provide valuable practice opportunities.
            </p>
            
            <h2 className="text-xl font-semibold mb-4 mt-8">Join Our Community</h2>
            <p className="text-gray-700">
              Education is more than just a resource repository—it's a community of educators and learners 
              committed to educational excellence. Join us in our mission to make quality education accessible to all.
            </p>
          </CardContent>
        </Card>
        
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Have Questions?</h2>
          <p className="text-gray-600 mb-6">
            We're here to help. Feel free to reach out to us with any questions or feedback.
          </p>
          <a href="#" className="text-education-primary hover:text-education-dark font-medium">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
