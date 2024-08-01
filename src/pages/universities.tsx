import React, { useEffect } from "react";
import "@smastrom/react-rating/style.css";
import { MapPin } from "lucide-react";
import SectionHeader from "../components/website/section-header";
import { cn } from "../lib/utils";
import Marquee from "../components/website/magicui/marquee";
import AOS from "aos";
import "aos/dist/aos.css";
import university1 from "../../public/universityImg/St-Marys-University.png";
import university2 from "../../public/universityImg/Thompson-River-University.png";
import university3 from "../../public/universityImg/california.png";
import university4 from "../../public/universityImg/kyunghee.jpeg";
import university5 from "../../public/universityImg/oxforduniversity.png";
import university6 from "../../public/universityImg/seoul.png";
import university7 from "../../public/universityImg/yaleuni.png";

// Define the type for the props
interface ReviewCardProps {
  name: string;
  img: string;
  location: string;
}

// ReviewCard component
const ReviewCard: React.FC<ReviewCardProps> = ({ name, img, location }) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-md border p-4",
        "border-primary-200/60 bg-gray-800/[.01] hover:bg-gray-800/[.05] hover:border-primary-200"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col w-full">
          <figcaption className="text-sm font-medium text-800/95 text-secondary-600">
            {name}
          </figcaption>
          <div className="flex items-center justify-end">
            <p className="text-sm font-medium flex items-center gap-1 text-gray-800">
              <MapPin size={16} /> {location}
            </p>
          </div>
        </div>
      </div>
      <img
        alt={name}
        src={img}
        height={200}
        width={200}
        className="h-14 object-scale-down"
      />
    </figure>
  );
};

export default function Universities() {
  const universities = [
    {
      id: "1",
      name: "St. Mary's University",
      img: university1,
      location: "Canada",
    },
    {
      id: "2",
      name: "Thompson River University",
      img: university2,
      location: "Canada",
    },
    {
      id: "3",
      name: "University of California",
      img: university3,
      location: "USA",
    },
    {
      id: "4",
      name: "Kyung Hee University",
      img: university4,
      location: "South Korea",
    },
    {
      id: "5",
      name: "Oxford University",
      img: university5,
      location: "UK",
    },
    {
      id: "6",
      name: "Seoul National University",
      img: university6,
      location: "South Korea",
    },
    {
      id: "7",
      name: "Yale University",
      img: university7,
      location: "USA",
    },
  ];

  // Split the universities into four groups for four marquees
  const firstGroup = universities.slice(0, Math.ceil(universities.length / 4));
  const secondGroup = universities.slice(
    Math.ceil(universities.length / 4),
    Math.ceil((universities.length / 4) * 2)
  );
  const thirdGroup = universities.slice(
    Math.ceil((universities.length / 4) * 2),
    Math.ceil((universities.length / 4) * 3)
  );
  const fourthGroup = universities.slice(
    Math.ceil((universities.length / 4) * 3)
  );

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);

  return (
    <div
      className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0"
      data-aos="zoom-out"
    >
      <section className="">
        <SectionHeader
          title="Universities"
          heading="Top universities we are partnered with"
          description="We are partnered with top universities around the world to provide you with the best education."
        />

        <div className="relative flex h-full w-full flex-col overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstGroup.map((university) => (
              <ReviewCard
                key={university.id}
                name={university.name}
                img={university.img}
                location={university.location}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondGroup.map((university) => (
              <ReviewCard
                key={university.id}
                name={university.name}
                img={university.img}
                location={university.location}
              />
            ))}
          </Marquee>
          <Marquee pauseOnHover className="[--duration:20s]">
            {thirdGroup.map((university) => (
              <ReviewCard
                key={university.id}
                name={university.name}
                img={university.img}
                location={university.location}
              />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {fourthGroup.map((university) => (
              <ReviewCard
                key={university.id}
                name={university.name}
                img={university.img}
                location={university.location}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
        </div>
      </section>
    </div>
  );
}
