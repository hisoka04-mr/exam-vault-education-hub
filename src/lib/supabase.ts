
import { createClient } from '@supabase/supabase-js';

// Get environment variables with fallbacks to prevent runtime errors
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Log warning if credentials are missing
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase credentials missing. Make sure you have set your environment variables:');
  console.error('- VITE_SUPABASE_URL');
  console.error('- VITE_SUPABASE_ANON_KEY');
  console.error('If using Lovable with Supabase integration, ensure you have completed the connection process.');
}

// Initialize with error handling to prevent runtime crashes
export const supabase = createClient(
  supabaseUrl || 'https://placeholder-url.supabase.co',  // Prevents runtime error
  supabaseAnonKey || 'placeholder-key'                   // Prevents runtime error
);

// Helper function to check if a user is admin
export const isAdmin = async (): Promise<boolean> => {
  try {
    // Check if Supabase is properly configured first
    if (!supabaseUrl || !supabaseAnonKey) {
      console.error('Cannot check admin status: Supabase not configured');
      return false;
    }
    
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
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};
