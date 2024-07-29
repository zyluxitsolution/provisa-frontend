// NewZealand.tsx
import React from "react";
import AbroadCard from "./AbroadCard";

const NewZealand: React.FC = () => {
  const descLists: string[] = [
    "New Zealand is renowned for its high-quality education system and stunning natural landscapes. It attracts international students with its world-class universities and a welcoming environment. The country offers a range of academic programs that are internationally recognized, and its institutions are known for their research excellence and innovative teaching methods.",
    "New Zealand’s education system focuses on practical learning and student engagement. The universities offer a variety of programs in fields such as science, technology, business, and the arts. Students benefit from small class sizes, personalized attention, and a supportive academic community. The country’s vibrant student life and safe environment make it an appealing destination for international students.",
  ];

  const eduSystem: string[] = [
    "New Zealand has two main intakes: the first semester begins in February, and the second semester starts in July. Most students apply for the February intake, with applications opening about six months before the start of the semester.",
    "Tuition fees in New Zealand vary by program and institution. For undergraduate programs, fees range from NZD 22,000 to NZD 32,000 per year. Graduate programs typically cost between NZD 25,000 and NZD 35,000 per year. Scholarships are available for international students, which can help reduce the overall cost.",
  ];

  const livingCost: string[] = [
    "The cost of living in New Zealand is relatively high compared to other countries, but it remains affordable for students. Students can expect to spend between NZD 1,000 and NZD 1,500 per month on living expenses, including accommodation, food, and transportation.",
    "On-campus accommodation is available at many universities, with monthly rents ranging from NZD 500 to NZD 1,200. Private housing options are also available, with average rents between NZD 800 and NZD 1,500 per month, depending on the location and type of accommodation.",
    "Public transportation is efficient, with monthly passes costing around NZD 100 to NZD 150. Students are also required to obtain health insurance, which typically costs between NZD 300 and NZD 500 per year.",
  ];

  const ug: string =
    "Undergraduate programs in New Zealand usually last three years. Students can choose from a variety of fields and benefit from a high standard of education. Many programs are available in English, and students may also have opportunities for part-time work during their studies.";
  const pg: string =
    "Master’s programs in New Zealand typically take one to two years to complete, while PhD programs may take three to four years. English language proficiency tests may be required for admission, and many programs offer research opportunities and internships.";

  return (
    <div data-aos="zoom-out" data-aos-duration="1000">
      <AbroadCard
        bannerimg={"/public/studyAbroad/newZealand.jpg"}
        eduSystem={eduSystem}
        descLists={descLists}
        livingCost={livingCost}
        ug={ug}
        pg={pg}
      />
    </div>
  );
};

export default NewZealand;
