// Dubai.tsx
import React from "react";
import AbroadCard from "./AbroadCard";
import bannerimg from "../../../public/studyAbroad/dubai.avif";
const Dubai: React.FC = () => {
  const descLists: string[] = [
    "Dubai has become a leading educational hub in the Middle East, attracting students from around the world with its modern campuses and high-quality education. Known for its luxurious lifestyle and dynamic cityscape, Dubai offers a unique blend of academic excellence and cultural diversity.",
    "Students in Dubai benefit from a cosmopolitan environment with numerous educational institutions offering a variety of programs. The city’s strategic location and international focus make it an attractive option for those seeking global career opportunities.",
  ];

  const eduSystem: string[] = [
    "Dubai has two main intakes: the fall semester, which begins in September, and the spring semester, which starts in January. Most students apply for the fall intake, with applications generally opening in the previous spring.",
    "Tuition fees in Dubai can be high compared to other destinations, ranging from AED 40,000 to AED 80,000 per year for undergraduate programs. Graduate programs may cost between AED 50,000 and AED 100,000 per year. However, many institutions offer scholarships and financial aid.",
  ];

  const livingCost: string[] = [
    "The cost of living in Dubai is relatively high. Students should budget between AED 3,000 and AED 6,000 per month for living expenses, including accommodation, food, and transportation.",
    "University-provided housing can range from AED 2,000 to AED 5,000 per month. Private accommodation options are also available, with rents varying between AED 3,000 and AED 7,000 per month, depending on location and amenities.",
    "Public transportation is efficient but can be costly, with monthly passes costing around AED 300 to AED 500. Health insurance is mandatory and typically costs about AED 1,500 to AED 3,000 per year.",
  ];

  const ug: string =
    "Undergraduate programs in Dubai generally last four years. Many programs are offered in English, though proficiency in Arabic can be advantageous for certain programs and interactions. The diverse international student body contributes to a rich academic experience.";
  const pg: string =
    "Postgraduate programs in Dubai typically take one to two years to complete. Master’s programs often involve coursework and a thesis, while PhD programs require extensive research and a dissertation. Some programs may require proof of English proficiency or relevant experience.";

  return (
    <div data-aos="zoom-out" data-aos-duration="1000">
      <AbroadCard
        bannerimg={bannerimg}
        eduSystem={eduSystem}
        descLists={descLists}
        livingCost={livingCost}
        ug={ug}
        pg={pg}
      />
    </div>
  );
};

export default Dubai;
