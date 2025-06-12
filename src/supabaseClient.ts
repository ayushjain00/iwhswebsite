import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ceaacypzwjdxfnjhfysd.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNlYWFjeXB6d2pkeGZuamhmeXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk2NTE0OTgsImV4cCI6MjA2NTIyNzQ5OH0.9NKlptX_-57u9f52Z9nuybhBzSYzwplF3BMkpnJ9eL4'

export const supabase = createClient(supabaseUrl, supabaseKey)
