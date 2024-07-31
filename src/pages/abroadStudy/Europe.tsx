// Europe.tsx
import React from "react";
import AbroadCard from "./AbroadCard";

const Europe: React.FC = () => {
  const descLists: string[] = [
    "Europe is home to some of the world's most prestigious universities and offers a diverse range of educational opportunities. From historical institutions to cutting-edge research facilities, Europe provides students with a unique blend of tradition and innovation. Many European countries offer education at low or no tuition fees, making it an attractive destination for international students.",
    "In Europe, students benefit from a high standard of education and the opportunity to experience different cultures. Countries like Germany, the United Kingdom, France, and the Netherlands are particularly popular among international students. Europe also offers a wide range of programs in English, making it accessible to students from various linguistic backgrounds.",
  ];

  const eduSystem: string[] = [
    "European countries offer a variety of educational systems, often including both public and private universities. Many countries, such as Germany and France, offer low or no tuition fees for international students. The academic year generally starts in September, but some countries offer multiple intakes throughout the year.",
    "In addition to traditional degree programs, many European universities offer short-term courses, exchange programs, and research opportunities. These programs often emphasize practical experience and encourage collaboration with industries and research institutions.",
  ];

  const livingCost: string[] = [
    "The cost of living in Europe varies significantly depending on the country and city. Western European countries tend to have higher living costs compared to Eastern European countries. On average, students should budget for accommodation, food, transportation, and health insurance. Living costs can range from €700 to €1,500 per month, depending on the location.",
    "Many European cities offer affordable student housing options, and some universities provide on-campus accommodation. Additionally, students may benefit from discounts on public transportation and other services. It's important for students to research the cost of living in their chosen city to plan their budget accordingly.",
  ];

  const ug: string =
    "Undergraduate programs in Europe typically last three to four years. Some countries have different structures, such as the three-year Bachelor's programs in the UK or the four-year programs in other countries. Admission requirements vary by country and institution but often include secondary school qualifications and language proficiency tests.";
  const pg: string =
    "Postgraduate programs in Europe generally last one to two years. Many universities offer a range of Master's programs, including research-focused and professional degrees. Admission requirements typically include a relevant undergraduate degree and sometimes work experience or additional qualifications. English language proficiency tests may be required depending on the program and country.";

  return (
    <div data-aos="zoom-out" data-aos-duration="1000">
      <AbroadCard
        bannerimg={"/public/studyAbroad/europe.jpg"}
        eduSystem={eduSystem}
        descLists={descLists}
        livingCost={livingCost}
        ug={ug}
        pg={pg}
      />
    </div>
  );
};

export default Europe;
