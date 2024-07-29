// Bangladesh.tsx
import React from "react";
import AbroadCard from "./AbroadCard";

const Bangladesh: React.FC = () => {
  const descLists: string[] = [
    "Bangladesh is an emerging destination for international students seeking affordable education and a rich cultural experience. With a growing number of universities offering quality education, Bangladesh is becoming an attractive option for students from around the world. The country's education system focuses on developing practical skills and providing a supportive environment for academic growth.",
    "The higher education sector in Bangladesh is rapidly expanding, with several institutions gaining recognition for their academic programs. The country offers a unique cultural experience, with a blend of traditional and modern influences. Students in Bangladesh can benefit from a vibrant academic community and a range of extracurricular activities.",
  ];

  const eduSystem: string[] = [
    "Bangladesh has two main intakes: the spring semester, which begins in January, and the fall semester, which starts in July. Most students apply for the fall intake, with applications typically opening six months before the start of the semester.",
    "Tuition fees in Bangladesh are relatively low compared to Western countries. For undergraduate programs, fees range from BDT 30,000 to BDT 100,000 per year. Graduate programs may cost between BDT 40,000 and BDT 150,000 per year. Many universities offer scholarships and financial aid to international students.",
  ];

  const livingCost: string[] = [
    "The cost of living in Bangladesh is quite affordable. Students can expect to spend between BDT 10,000 and BDT 30,000 per month on living expenses, including accommodation, food, and transportation.",
    "On-campus housing is available at most universities, with monthly rents ranging from BDT 2,000 to BDT 10,000. Private housing options are also available, with average rents between BDT 5,000 and BDT 20,000 per month, depending on the location and facilities.",
    "Public transportation is inexpensive, with monthly passes costing around BDT 500 to BDT 1,000. Students should also budget for health insurance, which typically costs around BDT 2,000 to BDT 5,000 per year.",
  ];

  const ug: string =
    "Undergraduate programs in Bangladesh generally last four years. Students can choose from various fields of study, with many programs offered in English. Knowledge of Bengali can enhance the overall experience but is not always required.";
  const pg: string =
    "Postgraduate programs in Bangladesh usually take one to two years to complete. A Master’s degree may require coursework and a research project, while PhD programs involve extensive research and dissertation work. English proficiency tests may be required for admission.";

  return (
    <div>
      <AbroadCard
        topic={"Study in Bangladesh"}
        imgsrc={"/abroadstudy.webp"}
        bannerimg={"/public/studyAbroad/bangladesh.webp"}
        eduSystem={eduSystem}
        descLists={descLists}
        livingCost={livingCost}
        ug={ug}
        pg={pg}
      />
    </div>
  );
};

export default Bangladesh;
