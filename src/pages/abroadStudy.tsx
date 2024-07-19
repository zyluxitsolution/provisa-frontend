import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/website/section-header";
import img1 from "../../public/studyAbroad/study1.webp";
import img2 from "../../public/studyAbroad/study2.webp";
import img3 from "../../public/studyAbroad/study3.webp";
import img4 from "../../public/studyAbroad/study4.webp";
import AOS from "aos";
import "aos/dist/aos.css";

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
    imageSrc: img1,
    links: "/study-abroad/STUDY%20IN%20AUSTRALIA",
  },
  {
    title: "STUDY IN USA",
    description: "In terms of research and education, USA is a...",
    imageSrc: img2,
    links: "/study-abroad/usa-prepratopn",
  },
  {
    title: "STUDY IN UK",
    description: "Education System in UK In the decades following world...",
    imageSrc: img4,
    links: "/study-abroad/uk-prepration",
  },
  {
    title: "STUDY IN japan",
    description:
      "Study system in the japan Its common knowledge that studying...",
    imageSrc: img2,
    links: "/study-abroad/Study%20In%20Japan",
  },
  {
    title: "STUDY IN CANADA",
    description: "Study system in the Canada are the two major intake...",
    imageSrc: img3,
    links: "/study-abroad/canada-prepration ",
  },
];

const LargeImageCard: React.FC<ImageCardProps> = ({
  title,
  description,
  imageSrc,
  links,
}) => {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg h-[30rem]">
      <div className="relative w-full h-full">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-[#f4310a] bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex flex-col justify-center items-center p-4">
        <h3 className="text-lg lg:text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition duration-300">
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
    <div className="relative group overflow-hidden rounded-lg shadow-lg h-[15rem]">
      <div className="relative w-full h-full">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="absolute inset-0 bg-[#f4310a] bg-opacity-0 group-hover:bg-opacity-50 transition duration-300 flex flex-col justify-center items-center p-4">
        <h3 className="text-lg lg:text-2xl font-bold text-white mb-2 opacity-0 group-hover:opacity-100 transition duration-300">
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
  const smallImages = images.slice(1, 5);

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto p-4"
      data-aos="zoom-in"
    >
      <div className="lg:col-span-2">
        <LargeImageCard
          title={largeImage.title}
          description={largeImage.description}
          imageSrc={largeImage.imageSrc}
          links={largeImage.links}
        />
      </div>
      <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        heading=" Abroad Study"
        description=" Discover opportunities to study abroad in top educational destinations worldwide. We provide comprehensive guidance and support to help you pursue your academic goals internationally"
      />
      <ImageGrid />
    </div>
  );
};

export default AbroadStudy;
