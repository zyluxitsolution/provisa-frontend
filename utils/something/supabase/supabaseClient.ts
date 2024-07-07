import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://bwlxylhhnhcpevyeseyr.supabase.co";

// service key
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bHh5bGhobmhjcGV2eWVzZXlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODMwMzQ1MCwiZXhwIjoyMDMzODc5NDUwfQ.yo-7kqJ4UkDr9NkVD2uJyl0i0G_eYSZKSyaQUWhcYyU";

// anonymous key
// const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bHh5bGhobmhjcGV2eWVzZXlyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMDM0NTAsImV4cCI6MjAzMzg3OTQ1MH0.wYu4RRMMh9WICPpX0NUBCub6iNc1-frtDtJwu9Ea380";

// const jwt_secret = "8Da/s3pSVXuXwmWJr/sj0jFNGPGc0MbzFfmDB6CR8NJwJ7trawZq4x0msPS+F7Rm4LZ15+HJTQDvFMMar/fvTA==";
export const supabase = createClient(supabaseUrl, supabaseKey);



// import { createClient } from "@supabase/supabase-js";

//   const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>");