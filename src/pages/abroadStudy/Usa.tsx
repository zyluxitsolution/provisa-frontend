// USA.tsx
import React from "react";
import AbroadCard from "./AbroadCard";

const USA: React.FC = () => {
  const descLists: string[] = [
    "Many Nepalese students aspire to further their education in the United States. The United States, which is often regarded as the leader of the free world, has a plethora of top-ranked educational institutions and universities that offer internationally recognized degrees. When it comes to higher education, the United States of America (USA) has always been the first choice among international students. With some of the world's best universities belonging to the Ivy league, the United States invests a significant portion of its economy in research conducted at these institutions.",
    "In the United States, international students are highly valued. This is one of the reasons why students are given opportunities to collaborate on research, teaching, and training with their professors and departments. Graduate students, in particular, can obtain research assistantships, teaching assistantships, or graduate assistantships, which will provide them with invaluable practical experience for their future careers",
  ];

  const eduSystem: string[] = [
    "There are two major intakes in the United States. The fall semester, which typically begins in August, and the spring semester, which begins in January/February. The main intake is in the fall, and students have a variety of funding options. The spring intake, on the other hand, is primarily for international students. A few universities may offer a summer intake for undergraduate courses in May or June, but they are uncommon and do not provide many scholarships.",
  ];

  const livingCost: string[] = [
    "It can be costly to study in the United States. Managing your costs can be difficult when state colleges charge upwards of USD$23,000 per year and private colleges charge an average of USD$31,000 or more for an undergraduate bachelor’s degree. If you want to get an Associate Degree, you can get one from a public college for as little as USD$ 3,300 per year. A single student’s annual living costs in the United States can range from $7000 to $25,000, depending on the city they choose to live in. The cost of living in coastal areas is generally higher than in landlocked states.",
    "Most universities in the United States allow international students to live on campus. On-campus housing in the United States is significantly less expensive than living in flats or apartments. You will have to pay extra for utility bills if you live in a rented apartment. Depending on the area you choose to live in, house rent can range from US$600 to US$3000 per month on average.",
    "The cost of travel per month can range from $45 to $100. This is also dependent on the city in which you live. Trains, buses, and subways are the most common modes of transportation. The cost of living in the United States varies depending on where you live.",
  ];

  const ug: string =
    "In the United States, a Bachelor’s Degree usually takes four years to complete. You have the option of starting your studies at a Community College or a 4-year University/College. Regardless of your major, you will need to take a wide range of courses in literature, sciences, social sciences, the arts, history, and so on during your first two years. These classes are designed to help students build a strong foundation before focusing on a particular field of study. You can change your major as many times as you want, but it may require you to take more courses, which will cost you more money and time.";
  const pg: string =
    "A postgraduate degree is known as a Graduate degree in the United States. In most cases, universities that offer Bachelor’s degrees also offer Master’s and PhD programs. In the United States, master’s programs are either academic or professional. Most students pursuing a Master’s degree will be required to take tests such as the GRE or GMAT in order to obtain funding and scholarships. A master’s degree usually takes two years to complete.";

  return (
    <div data-aos="zoom-out" data-aos-duration="1000">
      <AbroadCard
        bannerimg={"/public/studyAbroad/usa.jpg"}
        eduSystem={eduSystem}
        descLists={descLists}
        livingCost={livingCost}
        pg={pg}
        ug={ug}
      />
    </div>
  );
};

export default USA;
