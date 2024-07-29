import HeroSection from "../components/website/hero-section";
import StatSection from "../components/website/stat-section";
import ServicesSection from "../components/website/ServicesSection";
import { TextParallaxContentExample } from "../components/website/TextParallaxContentExample";
import TestimonialSection from "../components/website/TestimonialSection";
import Universities from "./universities";
import AbroadStudy from "./abroadStudy";
export default function Home() {
  return (
    <div className=" space-y-20 -mt-14 overflow-hidden">
      <HeroSection />
      <StatSection />
      <ServicesSection />
      <AbroadStudy />
      <TextParallaxContentExample />
      <Universities />
      <TestimonialSection />
      {/* <InterviewPrep /> */}
    </div>
  );
}
