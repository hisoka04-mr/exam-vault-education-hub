
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials missing. Make sure your environment variables are set correctly.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper function to check if a user is admin
export const isAdmin = async (): Promise<boolean> => {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return false;
  
  // Check if user has admin role in Supabase
  const { data, error } = await supabase
    .from('admin_users')
    .select('*')
    .eq('user_id', user.id)
    .single();
  
  if (error || !data) return false;
  return true;
};
