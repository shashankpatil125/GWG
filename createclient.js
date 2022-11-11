import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
    'https://ilmdokwizfwrxisiejiq.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsbWRva3dpemZ3cnhpc2llamlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk5NTQwNTEsImV4cCI6MTk3NTUzMDA1MX0.55cyt865pWsMi3p5z5RoKLKICPGb5ehYeJJHtjGABG0'
)