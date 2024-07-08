import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Universities from "./pages/universities";
import Footer from "./components/website/footer";
import Navbar from "./components/website/navbar";
import FAQ from "./pages/faq";
import Team from "./pages/team";
import Contact from "./pages/contact";
import About from "./pages/about";
import Blogs from "./pages/blogs";
import Appointment from "./pages/appointment";
import Home from "./pages/home";
import StudyAbroad from "./pages/study-abroad";
import SingleStudyAbroad from "./pages/single-study-abroad";
import SingleTestPreparation from "./pages/single-test-preparation";
import SingleService from "./pages/single-service";
import SingleBlog from "./pages/single-blog";
import { useEffect } from "react";

// declare global {
//   interface Window {
//     google: {
//       translate: {
//         TranslateElement: new (options: object, element: string) => void;
//       };
//     };
//     googleTranslateElementInit: () => void;
//   }
// }

export default function App() {
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       // pageLanguage: "en",
  //       // autoDisplay: false,
  //       pageLanguage: "en",  // Set the default page language to English
  //       includedLanguages: "en,es,fr,de,zh-CN", // Optional: Specify the languages you want to include
  //       // layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
  //       autoDisplay: false  // Disable automatic translation dis
  //     },
  //     "google_translate_element"
  //   );
  // };

  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);

  return (
    <Router>
      <div className=" fixed w-full  z-50 ">
        <Navbar />
      </div>
      <div className=" pt-24 md:pt-36">
        <Routes>
          <Route
            path="/"
            element={<Home />}
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
          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/blogs"
            element={<Blogs />}
          />

          <Route
            path="/appointment"
            element={<Appointment />}
          />

          <Route
            path="/study-abroad"
            element={<StudyAbroad />}
          />

          <Route
            path="/study-abroad/:slug"
            element={<SingleStudyAbroad />}
          />

          <Route
            path="/test-preparations/:slug"
            element={<SingleTestPreparation />}
          />

          <Route
            path="/services/:slug"
            element={<SingleService />}
          />

          <Route
            path="/blogs/:slug"
            element={<SingleBlog />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
