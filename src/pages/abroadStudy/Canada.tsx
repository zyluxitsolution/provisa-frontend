// Canada.tsx
import React from "react";
import AbroadCard from "./AbroadCard";

const Canada: React.FC = () => {
  const descLists: string[] = [
    "Canada is one of the best places in the world to pursue higher education, and it attracts thousands of international students each year. International students can obtain a high-quality education at a fraction of the cost in other countries. Anywhere in the world, the education you receive in Canada will shape your life and improve your career prospects. Out of the top 250 universities in the world, 11 are located in Canada. Student outcomes are of the highest standard due to the country's high GDP spending on education (ranked second among the G-8 countries). Degrees, diplomas, and certificates from Canada are highly regarded around the world.",
    "With a focus on technology, research, and innovation, you'll interact with people who live in a forward-thinking society while learning from some of the best minds in the top universities in Canada. Canada is ranked in the top 5 nations that helps in the provision of a stronger higher educational system. Four cities of Canada (Quebec, Toronto, Ottawa and Vancouver) are listed in the best student cities in the world.",
  ];

  const eduSystem: string[] = [
    "It’s common knowledge that studying in Canada is much less expensive than studying in other popular study destinations. In fact, the government of Nepal provides scholarships for Nepalese students to study in Canada.",
    "Depending on the course of study and the university, the total cost to study in Canada from Nepal for an undergraduate course is usually around CA$25,000 per year*. More expensive courses, such as engineering and medicine, can cost up to $28,000 per year on average. Furthermore, there are numerous scholarships available in Canada to apply for if you want to save money.",
    "In a given year, students can enroll in one of three intakes: January, May, or September. The lowest intake is in May, and the highest is in September. The application process for universities for the September intake begins at least 1 to 1.5 years in advance, with universities closing their applications about 5 to 6 months before the intake. From August to September, students can apply for the January intake, and from September to November, they can apply for the May intake. The September intake period runs from December to January.",
  ];

  const livingCost: string[] = [
    "The cost of studying abroad is always an important consideration for an international student. As a result, it’s critical to understand the cost of studying in Canada. Canada has low tuition fees for international students when compared to the United Kingdom, Australia, the United States, and New Zealand. When calculating the estimated cost of studying in Canada, students should factor in expenses such as housing, food, health insurance, and travel as well as tuition fees.",
    "The annual tuition fee for undergraduate students typically ranges between CA$12,000 and CA$25,000. Essentially, it is determined by the course and the institution. Tuition fees for all postgraduate courses vary by course provider, but will be less than CA$35,000 per year. The doctoral degree, on the other hand, is quite affordable, costing less than CA$10,000 per year. Tuition fees vary depending on the type of qualification and university attended.",
    "The cost of living varies depending on the type of lifestyle desired. However, students must keep track of their expenses in order to avoid overspending. Similarly, a single student budget in Canada comes to around CAD 15,000 when all expenses are taken into account (indicative)",
    "Before beginning their program, all international students in Canada are required to obtain medical insurance. For international students, a number of Canadian universities and schools have begun to offer comprehensive health insurance plans. This is true as long as the program is ongoing and will end when it is completed. Similarly, some colleges do not provide insurance policies, and students must arrange for private medical insurance in these cases. Medical insurance costs on average between CAD 300 and CAD 800 per year (indicative).",
  ];

  const ug: string =
    "If you want to go to Canada after high school, you can enroll in a two-year diploma program, a three-year advanced diploma program, or a four-year bachelor’s degree program. The minimum IELTS score required varies depending on the programs you wish to pursue.";
  const pg: string =
    "In order to apply for a Master’s degree in Canada, you must have completed 16 years of post-secondary education. The required IELTS score for postgraduate programs varies from one program to the next, just as it does for undergraduate courses.";

  return (
    <div data-aos="zoom-out" data-aos-duration="1000">
      <AbroadCard
        bannerimg={"/public/studyAbroad/canada.avif"}
        eduSystem={eduSystem}
        descLists={descLists}
        livingCost={livingCost}
        ug={ug}
        pg={pg}
      />
    </div>
  );
};

export default Canada;
