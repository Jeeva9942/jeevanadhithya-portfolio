// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pjmrfznqmzisakwjbitm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBqbXJmem5xbXppc2Frd2piaXRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI5MjUyODcsImV4cCI6MjA2ODUwMTI4N30.1n4VHEdqYFkEjIb5OlUQz1f5ia34yaeBf9fkMQBtBno";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});