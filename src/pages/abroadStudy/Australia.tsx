import React from "react";
import AbroadCard from "./AbroadCard";

// Define the TypeScript types
interface Qualification {
  topic: string;
  lines: string[];
}

const Australia: React.FC = () => {
  const descLists: string[] = [
    "Australia is well known for its best colleges and universities that is providing educational facilities to many national and international students.",
    "The country’s vibrant lifestyle, warm culture, and exceptional educational facilities have drawn students worldwide consistently.",
  ];

  const description: string =
    "Australia has one of the best institutions and universities in the world. The vocational training approach of Australia is leading in the world. The Education system has high quality and diversity and Australians are very friendly to visitors, and so you will always feel free and at home! In the English-speaking world, Australia has the third-highest number of international students after the United States and the United Kingdom. It also has seven of the top 100 universities in the whole world and was ranked the 8th in the Universities 2012 U21 Ranking of National Higher Education Systems. The living standard of Australia is high, but the costs of living are lower than in the USA and UK. International students are also allowed to get jobs on the side, in order to aid in their living costs. There are students who can even be granted sponsorship. Though the costs are lower the quality is high and recognized in the world. The Bachelor’s Degree can also be completed in 3 years in most courses which saves both time and money. Employers and leading schools all over the world recognize the Australian qualifications. Most of the courses are covered by the Australian Qualification Framework (AQF), which is a learning system that has been authorized by the Australian Government. AQF is known and recognized in most countries.";

  const eduSystem: string[] = [
    "Australia is an international leader in protection and support services for international students, and professional student services are guaranteed with sufficient resources and quality. After studying there, Australia has a good job opportunity. Australia’s education system is of standard quality and has the third largest number of international students after the United States and the United Kingdom.",
    "Australia has seven of the top 100 universities in the world and is ranked 8th in the 2012 U21 Ranking of Universities in the National Higher Education System. Most universities are located in the top 30 most livable cities for students. The government spends more than $ 200 million on international scholarships each year. In addition, international students can work part-time in parallel with their studies. The Australian Qualifications Framework (AQF), a unified system of national schools, vocational and educational qualifications, manages compulsory and higher education. The AQF is known and recognized in most countries.",
    "As an international student, you’ll be expected to pay for your tuition in advance for each study period.",
  ];

  const livingCost: string[] = [
    "The expense of studying in Australia is not as expensive as some other western countries. The living conditions in Australia are quite good. Students can have good housing and accommodation during their time of study. Halls of residence are available at the majority of Australian educational institutions. This option provides a secure and worry-free environment in which students can concentrate solely on their studies. These residences are reasonably priced; however, the costs vary depending on which institutions they attend. International students can rent houses or flats from private landlords. To stay in such accommodations, students may be required to pay rent in advance as well as a security deposit.",
    "According to the Australian Department of Home Affairs, the minimum amount needed to cover one year’s living expenses is – AUD 21,041 – Student/Guardian, AUD 7,362 for a partner or spouse and AUD 3,152 for a child.",
  ];

  const qualifications: Qualification[] = [
    {
      topic: "For Undergraduate Degree",
      lines: [
        "IELTS requirement: Overall 6.0, Each band 5.5.",
        "Academic requirement: Successful completion of grade 12 with first division",
        "Age requirement: No age limitation (special conditions apply if you are under 18 years).",
      ],
    },
    {
      topic: "For Postgraduate Degree",
      lines: [
        "IELTS requirement: Overall 6.5, Each band 6",
        "Academic requirement: Successful completion of 4 years Bachelor degree with 55% or first division (Some Universities may also accept 3years Bachelor degree)",
      ],
    },
    {
      topic: "Documents Required",
      lines: [
        "Academics documents.",
        "IELTS Certificate.",
        "Transcript, Provisional, Character certificate (your recent Education Qualification)",
        "Statement of Purpose (SOP)",
      ],
    },
    {
      topic: "Final Documents",
      lines: [
        "In case of deposit – Bank Statement (Source should be transparent and tax cleared)",
        "In case of Bank Loan – Loan letter from the bank",
        "Yearly income capacity of the sponsor",
        "Income verification",
        "Income source document",
        "Tax clearance from Government Body",
        "Relationship verification of family and sponsors",
      ],
    },
  ];

  return (
    <div data-aos="zoom-out" data-aos-duration="1000">
      <AbroadCard
        topic={"Study in Australia"}
        descLists={descLists}
        bannerimg="/public/studyAbroad/australia.jpg"
        description={description}
        eduSystem={eduSystem}
        livingCost={livingCost}
        qualifications={qualifications}
      />
    </div>
  );
};

export default Australia;
