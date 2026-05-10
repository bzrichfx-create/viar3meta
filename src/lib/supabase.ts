import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://pzeivcxqzygphyejyrhq.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjQ4YzY0ZDU4LWQ4NGQtNDQ2MS05ZjlhLTJjODA0NWE1NzliZiJ9.eyJwcm9qZWN0SWQiOiJwemVpdmN4cXp5Z3BoeWVqeXJocSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzc4NDM0MDc1LCJleHAiOjIwOTM3OTQwNzUsImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.8YYiyzF-eLCSleMWQteegCgkBH-Dm2wVQBk8CVMYEJc';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };