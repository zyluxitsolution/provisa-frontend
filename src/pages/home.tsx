import HeroSection from "../components/website/hero-section";
import StatSection from "../components/website/stat-section";
import ServicesSection from "../components/website/ServicesSection";
import TextParallaxContentExample from "../components/website/TextParallaxContentExample";
import Universities from "./universities";
import AbroadStudy from "./abroadStudy";
import Testimonials from "../components/website/TestimonialSection";
export default function Home() {
  return (
    <div className=" space-y-20 -mt-14 overflow-hidden">
      <HeroSection />
      <StatSection />
      <ServicesSection />
      <AbroadStudy />
      <TextParallaxContentExample />
      <Universities />
      <Testimonials />
    </div>
  );
}
