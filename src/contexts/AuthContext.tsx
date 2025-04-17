
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase, isAdmin } from '@/lib/supabase';
import { toast } from '@/components/ui/use-toast';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  isAdminUser: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  checkAdmin: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  isLoading: true,
  isAuthenticated: false,
  isAdminUser: false,
  signIn: async () => {},
  signOut: async () => {},
  checkAdmin: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdminUser, setIsAdminUser] = useState(false);

  useEffect(() => {
    const setData = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      setUser(session?.user || null);
      setIsLoading(false);
      
      if (session?.user) {
        const adminStatus = await isAdmin();
        setIsAdminUser(adminStatus);
      }
    };

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user || null);
      setIsLoading(false);
    });

    setData();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const checkAdmin = async () => {
    const adminStatus = await isAdmin();
    setIsAdminUser(adminStatus);
  };

  const signIn = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      
      await checkAdmin();
      toast({
        title: "Signed in successfully",
        description: "Welcome back, admin!",
      });
    } catch (error: any) {
      toast({
        title: "Error signing in",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setIsAdminUser(false);
      toast({
        title: "Signed out",
        description: "You have been signed out successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      session,
      isLoading,
      isAuthenticated: !!user,
      isAdminUser,
      signIn,
      signOut,
      checkAdmin,
    }}>
      {children}
    </AuthContext.Provider>
  );
};
