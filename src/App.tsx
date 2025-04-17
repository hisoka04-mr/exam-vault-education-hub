
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import Classes from "./pages/Classes";
import ClassDetail from "./pages/ClassDetail";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

type ProtectedRouteProps = {
  element: React.ReactNode;
};

// Admin route protection
const ProtectedAdminRoute = ({ element }: ProtectedRouteProps) => {
  const { isAuthenticated, isAdminUser, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  if (!isAuthenticated || !isAdminUser) {
    return <Navigate to="/login" />;
  }
  
  return <>{element}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/index" element={<Index />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:slug" element={<CategoryDetail />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/classes/:slug" element={<ClassDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<ProtectedAdminRoute element={<Admin />} />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <BrowserRouter>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <AppRoutes />
              </main>
              <Footer />
            </div>
          </TooltipProvider>
        </BrowserRouter>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
