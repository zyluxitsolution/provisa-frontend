import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/website/navbar";
import Footer from "./components/website/footer";
import MessageBtn from "./pages/messageBtn";
import "./App.css";

// Dynamic imports
const Home = lazy(() => import("./pages/home"));
const Universities = lazy(() => import("./pages/universities"));
const FAQ = lazy(() => import("./pages/faq"));
const Team = lazy(() => import("./pages/team"));
const Contact = lazy(() => import("./pages/contact"));
const About = lazy(() => import("./pages/about"));
const Blogs = lazy(() => import("./pages/blogs"));
const Appointment = lazy(() => import("./pages/appointment"));
const StudyAbroad = lazy(() => import("./pages/study-abroad"));
const SingleStudyAbroad = lazy(() => import("./pages/single-study-abroad"));
const SingleTestPreparation = lazy(
  () => import("./pages/single-test-preparation")
);
const SingleService = lazy(() => import("./pages/single-service"));
const SingleBlog = lazy(() => import("./pages/single-blog"));
const BioData = lazy(() => import("./pages/biodata"));
const InterviewPrep = lazy(() => import("./pages/interview"));
const Course = lazy(() => import("./pages/courseSelect"));
const Australia = lazy(() => import("./pages/abroadStudy/Australia"));
const Japan = lazy(() => import("./pages/abroadStudy/Japan"));
const USA = lazy(() => import("./pages/abroadStudy/Usa"));
const Korea = lazy(() => import("./pages/abroadStudy/SouthKorea"));
const Bangladesh = lazy(() => import("./pages/abroadStudy/Bangladesh"));
const NewZealand = lazy(() => import("./pages/abroadStudy/Newzealand"));
const Canada = lazy(() => import("./pages/abroadStudy/Canada"));
const Europe = lazy(() => import("./pages/abroadStudy/Europe"));

export default function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <div className="fixed w-full z-50">
          <Navbar />
        </div>
        <div className="pt-24 md:pt-36">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/universities" element={<Universities />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/study-abroad" element={<StudyAbroad />} />
              <Route
                path="/study-abroad/:slug"
                element={<SingleStudyAbroad />}
              />
              <Route
                path="/test-preparations/:slug"
                element={<SingleTestPreparation />}
              />
              <Route path="/services/:slug" element={<SingleService />} />
              <Route path="/blogs/:slug" element={<SingleBlog />} />
              <Route path="/biodata" element={<BioData />} />
              <Route path="/interwiew" element={<InterviewPrep />} />
              <Route path="/courses" element={<Course />} />
              <Route path="/australia" element={<Australia />} />
              <Route path="/japan" element={<Japan />} />
              <Route path="/usa" element={<USA />} />
              <Route path="/southkoreaa" element={<Korea />} />
              <Route path="/bangladesh" element={<Bangladesh />} />
              <Route path="/newzealand" element={<NewZealand />} />
              <Route path="/canada" element={<Canada />} />
              <Route path="/europe" element={<Europe />} />
            </Routes>
          </Suspense>
        </div>
        <MessageBtn />
        <Footer />
      </Router>
    </div>
  );
}
