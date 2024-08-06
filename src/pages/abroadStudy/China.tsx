// China.tsx
import React from "react";
import AbroadCard from "./AbroadCard";
import bannerimg from "../../../public/studyAbroad/china.jpg";
const China: React.FC = () => {
  const descLists: string[] = [
    "China is a popular destination for international students due to its rich cultural heritage, booming economy, and diverse educational opportunities. The country offers a wide range of programs in various fields, with many universities gaining international recognition for their quality education and research facilities.",
    "Studying in China provides students with a chance to experience one of the world's oldest civilizations while benefiting from a modern education system. Universities in China offer numerous scholarships and opportunities for international students to engage in cultural exchange.",
  ];

  const eduSystem: string[] = [
    "China has two main intakes: the spring semester starting in March and the fall semester beginning in September. Applications for the fall intake generally open in the previous spring, while spring intake applications open in the preceding autumn.",
    "Tuition fees in China are relatively affordable compared to Western countries. Undergraduate programs typically cost between CNY 20,000 and CNY 50,000 per year, while graduate programs range from CNY 30,000 to CNY 60,000 per year. Scholarships are available for international students to help cover these costs.",
  ];

  const livingCost: string[] = [
    "The cost of living in China varies depending on the city. On average, students can expect to spend between CNY 1,500 and CNY 4,000 per month on living expenses, including accommodation, food, and transportation.",
    "University dormitories are available, with rents ranging from CNY 500 to CNY 1,500 per month. Private rental options are also available, with monthly rents varying between CNY 2,000 and CNY 5,000, depending on the city and accommodation type.",
    "Public transportation is generally affordable, with monthly passes costing around CNY 100 to CNY 300. Health insurance is recommended and typically costs about CNY 1,000 to CNY 2,000 per year.",
  ];

  const ug: string =
    "Undergraduate programs in China typically last four years. Many programs are available in English, though knowing Mandarin can enhance the overall experience and provide additional opportunities for interaction with local students and faculty.";
  const pg: string =
    "Postgraduate programs in China usually take two to three years to complete. Master’s programs often involve coursework and a thesis, while PhD programs require substantial research and a dissertation. Proof of English proficiency may be required for some programs.";

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

export default China;
