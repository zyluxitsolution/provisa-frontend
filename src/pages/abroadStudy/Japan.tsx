import React from "react";
import AbroadCard from "./AbroadCard";

// Define the TypeScript types
interface AbroadCardProps {
  topic: string;
  imgsrc: string;
  bannerimg: string;
  description: string; // Add description here
  eduSystem: string[];
  descLists: string[];
  livingCost: string[];
}

const Page: React.FC = () => {
  const descLists: string[] = [
    "Admiring the Japanese hospitality culture, enjoying the serendipity of the picturesque location of Japan, and the manga culture, and fascinating country’s technological development. Studying in Japan could be a once-in-a-lifetime chance to live those experiences while furthering your career. The most appealing aspect of studying in Japan is the academic environment, which allows students to study cutting-edge technology and gain the knowledge that helped Japan achieve phenomenal postwar economic growth. Japanese universities and other institutes of higher education can offer course studies or research programs in virtually any field, whether it is electronics, Japanese literature, medicine, or international business administration.",
    "Japan has over 700 universities, with 10 ranked in the top 200 worldwide. With high quality of education, no doubt there is over 150,000 international students studying in Japan. Japan has the world's third-largest economy and is known for its ability to make things smaller, faster, and first. The world is awestruck by Japan's ability to nurture and realize our dreams. Japan's research and development-oriented education system makes a significant contribution.",
  ];

  const eduSystem: string[] = [
    "In the decades following World War II, Japan’s education system played a critical role in the country’s recovery and rapid economic growth. In the Japanese education system, the schooling years are divided into 6-3-3-4 groups: There are six years of primary or elementary school, three years of middle or junior high school, three years of high school, and four years of university. However, elementary and junior high school are covered by compulsory education.",
    "In a variety of fields and disciplines, the Japanese university system offers Bachelor’s, Master’s, and PhD degrees. Universities and junior colleges in Japan offer either private or public higher education. The Japanese Ministry of Education and Culture is the government agency in charge of education, culture, and language issues (MEXT).",
    "In Japan, Bachelor’s studies last four years, with the exception of medical, dentistry, veterinary, and pharmacy programs, which can last up to six years. Junior colleges offer two to three years of study, depending on the department and program. In Japan, the academic year runs from April to March of the following year at most universities and junior colleges. April to September is the first semester, and October to March is the second. As an international student, you must have completed at least 12 years of formal education in your home country to be eligible for Bachelor’s studies in Japan.",
    "In Japanese universities, postgraduate studies include lectures, research, various projects, and the writing of the student’s dissertation. In Japan, you must have completed a four-year Bachelor’s degree in education to be eligible for a Master’s degree. The majority of Master’s programs in Japan last two years, and students are awarded a Master’s degree after completing 30 course credits.",
  ];

  const livingCost: string[] = [
    "In comparison to other study destinations, the cost of living in Japan is high, especially if you choose to live in Tokyo, the capital. However, it all depends on where you live and what kind of lifestyle you lead. Tokyo, Osaka, Kyoto, Fukuoka, Sapporo, and Yokohama are some of Japan’s most student-friendly cities, with options to suit any budget. Living in a university dormitory as an international student in Japan can help you save money on living expenses.",
    "Despite the fact that the government and universities provide student dormitories, the majority of international students live in private housing due to the limited number of dormitory rooms available. When you receive your letter of acceptance from the university, be sure to look for a place to live, whether it’s in a dorm or a private home. When compared to metropolitan areas, the cost of living in smaller cities is lower and more affordable.",
    "The average monthly rent for a one-room apartment in Tokyo is between 50 and 70,000 Japanese yen (around 450 and 650 USD), depending on whether you live in the city center or not. Larger apartments are much more expensive. Keep in mind that rent does not include utilities such as gas, electricity, internet, or water.",
    "Guesthouses, also known as “gaijin houses” in Japanese, are another popular option. These houses are a low-cost option for lodging that can be rented for a short period of time. It may be a good option for you during your first few months in Japan, until you find a permanent student residence.",
    "In comparison to other popular study destinations such as the United States or the United Kingdom, tuition in Japan for international students pursuing Bachelor’s, Master’s, and Doctorate degrees is quite affordable. Tuition in Japan varies between 20-23,000 USD for Bachelor’s degrees, 12,000 USD for Master’s degrees, and 5,000 USD for Doctorate degrees per academic year.",
    "International students can apply for a variety of Japanese scholarships, with the goal of attracting more and more ambitious students to study and eventually work in Japan. Nonetheless, these scholarships do not cover the entirety of university tuition and living expenses, but only a portion of them. As a result, even before you arrive, you must be prepared with a personal budget and a financial plan for your studies.",
  ];

  return (
    <div data-aos="zoom-out" data-aos-duration="1000">
      <AbroadCard
        topic={"Study in Japan"}
        bannerimg={"/public/studyAbroad/japan.jpg"}
        description="Studying in Japan offers a unique opportunity to experience Japanese culture, technology, and a high-quality education system. With a wide range of academic programs and a focus on research and development, Japan provides a conducive environment for personal and professional growth."
        eduSystem={eduSystem}
        descLists={descLists}
        livingCost={livingCost}
      />
    </div>
  );
};

export default Page;
