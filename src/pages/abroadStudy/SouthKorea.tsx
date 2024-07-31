// SouthKorea.tsx
import React from "react";
import AbroadCard from "./AbroadCard";

const Korea: React.FC = () => {
  const descLists: string[] = [
    "South Korea is becoming a popular destination for international students due to its high-quality education system and affordable living costs. Known for its technological advancements and rich cultural heritage, South Korea offers a unique blend of tradition and modernity. The country has several top-ranked universities and institutions that provide excellent academic programs in various fields. International students are welcomed with numerous scholarships and opportunities for cultural exchange.",
    "In South Korea, education is highly valued, and universities emphasize research and innovation. The country’s strong educational infrastructure ensures that students receive a robust education. Cities like Seoul and Busan are known for their vibrant student communities and excellent facilities. South Korea’s education system is geared towards fostering global talent, making it an attractive option for international students.",
  ];

  const eduSystem: string[] = [
    "South Korea has two main intakes: the spring semester, which starts in March, and the fall semester, beginning in September. Most students apply for the fall intake, while spring intake is less common. The application process typically begins about six months before the semester starts, with deadlines varying by institution.",
    "Tuition fees in South Korea are relatively lower compared to Western countries. For undergraduate programs, tuition ranges from KRW 2,000,000 to KRW 6,000,000 per year, depending on the university and program. Graduate programs may cost between KRW 3,000,000 and KRW 8,000,000 per year. Scholarships are widely available for international students.",
  ];

  const livingCost: string[] = [
    "The cost of living in South Korea is moderate compared to other Asian countries. Students can expect to spend between KRW 500,000 and KRW 1,000,000 per month on living expenses, including housing, food, and transportation.",
    "On-campus housing is available at most universities and is generally more affordable than private accommodation. Monthly rent for university dormitories ranges from KRW 200,000 to KRW 600,000. Private housing costs can vary, with average rents between KRW 300,000 and KRW 1,000,000 per month, depending on the location.",
    "Public transportation in South Korea is efficient and cost-effective, with monthly passes costing around KRW 50,000 to KRW 70,000. Students also need to budget for health insurance, which is typically around KRW 200,000 to KRW 300,000 per year.",
  ];

  const ug: string =
    "Undergraduate programs in South Korea typically last four years. Students have the option to choose from a wide range of majors and programs. The medium of instruction is often English for international programs, but proficiency in Korean can enhance the overall experience.";
  const pg: string =
    "Master’s and doctoral programs in South Korea are highly regarded. A Master’s degree generally takes two years to complete, while a PhD program may take three to five years. English proficiency tests such as TOEFL or IELTS may be required for admission.";

  return (
    <div data-aos="zoom-out" data-aos-duration="1000">
      <AbroadCard
        topic={"Study in South Korea"}
        imgsrc={"/abroadstudy.webp"}
        bannerimg={"/public/studyAbroad/southkorea.webp"}
        eduSystem={eduSystem}
        descLists={descLists}
        livingCost={livingCost}
        ug={ug}
        pg={pg}
      />
    </div>
  );
};

export default Korea;
