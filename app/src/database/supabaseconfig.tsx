import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wigitzumqayfmpjconhx.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpZ2l0enVtcWF5Zm1wamNvbmh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTAwMTkwODksImV4cCI6MjAyNTU5NTA4OX0.pamddO2E9RJ5lk-zAQw0A0UhXSWE1rjVH0jH0Epf1HI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
