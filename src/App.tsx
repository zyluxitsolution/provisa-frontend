import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Universities from "./pages/universities";
import { createClient } from "@supabase/supabase-js";
import Footer from "./components/website/footer";
import Navbar from "./components/website/navbar";
import TopNavbar from "./components/website/top-navbar";
import FAQ from "./pages/faq";
import Team from "./pages/team";

export default function App() {
  const supabase = createClient("https://bwlxylhhnhcpevyeseyr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bHh5bGhobmhjcGV2eWVzZXlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODMwMzQ1MCwiZXhwIjoyMDMzODc5NDUwfQ.yo-7kqJ4UkDr9NkVD2uJyl0i0G_eYSZKSyaQUWhcYyU");

  return (
    <Router>
      <TopNavbar />
      {/* <Navbar/> */}
      <Routes>
        <Route
          path="/"
          element={<p>Hello</p>}
        />
        <Route
          path="/universities"
          element={<Universities />}
        />

        <Route
          path="/faq"
          element={<FAQ />}
        />


<Route
          path="/team"
          element={<Team />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}
