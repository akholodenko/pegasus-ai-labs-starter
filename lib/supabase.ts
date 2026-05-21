import { createClient } from '@supabase/supabase-js'

// Add your Supabase URL here
const supabaseUrl = ''

// Add your Supabase anon key here
const supabaseAnonKey = ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
