import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/website/section-header";
import AOS from "aos";
import "aos/dist/aos.css";

//importing images
import australia from "../../public/studyAbroad/australia.jpg";
import canada from "../../public/studyAbroad/canada.avif";
import usa from "../../public/studyAbroad/usa.jpg";
import korea from "../../public/studyAbroad/southkorea.webp";
import japan from "../../public/studyAbroad/japan.jpg";
import bangladesh from "../../public/studyAbroad/bangladesh.webp";
import newzealand from "../../public/studyAbroad/newZealand.jpg";
import europe from "../../public/studyAbroad/europe.jpg";
import china from "../../public/studyAbroad/china.jpg";
import dubai from "../../public/studyAbroad/dubai.avif";
interface ImageCardProps {
  title: string;
  description: string;
  imageSrc: string;
  links: string;
}

const images: ImageCardProps[] = [
  {
    title: "STUDY IN AUSTRALIA",
    description:
      "Australia has one of the best institutions and universities...",
    imageSrc: australia,
    links: "/australia",
  },
  {
    title: "STUDY IN JAPAN",
    description: "Education System in Japan In the decades following world...",
    imageSrc: japan,
    links: "/japan",
  },

  {
    title: "STUDY IN CANADA",
    description: "Study system in the Canada are the two major intake...",
    imageSrc: canada,
    links: "/study-abroad/canada-prepration",
  },
  {
    title: "STUDY IN Europe",
    description:
      "Study system in the Canada Its common knowledge that studying...",
    imageSrc: europe,
    links: "/europe",
  },
  {
    title: "STUDY IN USA",
    description: "Study system in the USA are the two major intake...",
    imageSrc: usa,
    links: "/usa",
  },
];

const additionalImages: ImageCardProps[] = [
  {
    title: "STUDY IN SOUTH KOREA",
    description:
      "South Korea offers a dynamic environment for international students with its innovative education system and vibrant cultural experience.",
    imageSrc: korea,
    links: "/southkoreaa",
  },
  {
    title: "STUDY IN NEW ZEALAND",
    description:
      "New Zealand provides world-class education and unique opportunities to explore its stunning landscapes and multicultural society.",
    imageSrc: newzealand,
    links: "/newzealand",
  },
  {
    title: "STUDY IN BANGLADESH",
    description:
      "Bangladesh offers diverse educational opportunities and a vibrant cultural experience, with affordable tuition and a supportive academic environment.",
    imageSrc: bangladesh,
    links: "/bangladesh",
  },
  {
    title: "STUDY IN DUBAI",
    description:
      "Dubai offers a luxurious educational experience with its modern campuses and global career opportunities, blending tradition with innovation.",
    imageSrc: dubai,
    links: "/dubai",
  },
  {
    title: "STUDY IN CHINA",
    description:
      "China provides a rich cultural experience and high-quality education, with numerous scholarships and opportunities for international students.",
    imageSrc: china,
    links: "/china",
  },
];

const LargeImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  imageSrc,
  links,
}) => {
  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-lg h-[30rem]"
      data-aos="zoom-out"
    >
      <div className="relative w-full h-full">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-[#f4310a] bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex flex-col justify-center items-center p-4">
        <h3 className="text-lg lg:text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition duration-500">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-white opacity-0 group-hover:opacity-100 transition duration-300">
          {description}
        </p>
        <Link
          to={links}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded opacity-0 group-hover:opacity-100 transition duration-300"
        >
          Learn More
        </Link>
      </div>
      <h3 className="absolute bottom-4 left-4 text-lg lg:text-2xl font-bold text-white z-10 group-hover:opacity-0 transition duration-300">
        {title}
      </h3>
    </div>
  );
};

const SmallImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  imageSrc,
  links,
}) => {
  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-lg h-[15rem]"
      data-aos="zoom-out"
    >
      <div className="relative w-full h-full">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-[#f4310a] bg-opacity-0 group-hover:bg-opacity-50 transition duration-500 flex flex-col justify-center items-center p-4">
        <h3 className="text-lg lg:text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition duration-500">
          {title}
        </h3>
        <p className="text-sm lg:text-base text-white opacity-0 group-hover:opacity-100 transition duration-300">
          {description}
        </p>
        <Link
          to={links}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded opacity-0 group-hover:opacity-100 transition duration-300"
        >
          Learn More
        </Link>
      </div>
      <h3 className="absolute bottom-4 left-4 text-lg lg:text-2xl font-bold text-white z-10 group-hover:opacity-0 transition duration-300">
        {title}
      </h3>
    </div>
  );
};

const ImageGrid: React.FC = () => {
  const largeImage = images[0];
  const smallImages = images.slice(1);

  return (
    <div className="space-y-4 max-w-7xl mx-auto p-4" data-aos="zoom-in">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-2 lg:row-span-2">
          <LargeImageCard
            title={largeImage.title}
            description={largeImage.description}
            imageSrc={largeImage.imageSrc}
            links={largeImage.links}
          />
        </div>
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-2">
          {smallImages.map((image, index) => (
            <SmallImageCard
              key={index}
              title={image.title}
              description={image.description}
              imageSrc={image.imageSrc}
              links={image.links}
            />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        {additionalImages.map((image, index) => (
          <SmallImageCard
            key={index}
            title={image.title}
            description={image.description}
            imageSrc={image.imageSrc}
            links={image.links}
          />
        ))}
      </div>
    </div>
  );
};

const AbroadStudy: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);
  return (
    <div
      className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0"
      data-aos="zoom-in"
    >
      <SectionHeader
        title="Abroad study"
        heading="Abroad Study"
        description="Discover opportunities to study abroad in top educational destinations worldwide. We provide comprehensive guidance and support to help you pursue your academic goals internationally."
      />
      <ImageGrid />
    </div>
  );
};

export default AbroadStudy;
