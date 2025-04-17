
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Lock, User } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { signIn, isAuthenticated, isAdminUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already authenticated as admin
    if (isAuthenticated && isAdminUser) {
      navigate('/admin');
    }
  }, [isAuthenticated, isAdminUser, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast({
        title: 'Missing fields',
        description: 'Please enter your email and password.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);
    await signIn(email, password);
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <Card className="w-full max-w-md bg-white/90 dark:bg-gray-800/90 backdrop-blur-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Sign in to access the admin dashboard
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-blue-400 bg-white dark:bg-gray-700 overflow-hidden">
                <div className="px-3 py-2 text-gray-400">
                  <User size={20} />
                </div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-blue-400 bg-white dark:bg-gray-700 overflow-hidden">
                <div className="px-3 py-2 text-gray-400">
                  <Lock size={20} />
                </div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-education-primary hover:bg-education-primary-dark"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Login;
