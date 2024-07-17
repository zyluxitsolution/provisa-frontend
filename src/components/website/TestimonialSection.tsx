import React, { useEffect } from "react";
import Marquee from "./magicui/marquee";
import SectionHeader from "./section-header";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

const reviews = [
  {
    name: "David Heroc",
    username: "The University of Australia",
    body: "PROVISA provided me great assistance on my student visa approval. I really appreciate your efforts, consultation and customer services. Thank you PROVISA for guiding me through the right path in my life. You helped me with my life changing decision. I will be forever grateful for your help and great assistance.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Saman Shrestha",
    username: "The University of Australia",
    body: "I feel very lucky to be a part of PROVISA. I got perfect counselling during my test preparation, document preparation, visa application and SOP writing which helped me in visa approval. I would recommend PROVISA as a perfect education partner to everyone out there trying for international study.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "David Heroc",
    username: "The University of Australia",
    body: "PROVISA provided me great assistance on my student visa approval. I really appreciate your efforts, consultation and customer services. Thank you PROVISA for guiding me through the right path in my life. You helped me with my life changing decision. I will be forever grateful for your help and great assistance.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Saman Shrestha",
    username: "The University of Australia",
    body: "I feel very lucky to be a part of PROVISA. I got perfect counselling during my test preparation, document preparation, visa application and SOP writing which helped me in visa approval. I would recommend PROVISA as a perfect education partner to everyone out there trying for international study.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "David Heroc",
    username: "The University of Australia",
    body: "PROVISA provided me great assistance on my student visa approval. I really appreciate your efforts, consultation and customer services. Thank you PROVISA for guiding me through the right path in my life. You helped me with my life changing decision. I will be forever grateful for your help and great assistance.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Saman Shrestha",
    username: "The University of Australia",
    body: "I feel very lucky to be a part of PROVISA. I got perfect counselling during my test preparation, document preparation, visa application and SOP writing which helped me in visa approval. I would recommend PROVISA as a perfect education partner to everyone out there trying for international study.",
    img: "https://avatar.vercel.sh/jill",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }: any) => {
  return (
    <figure
      className="relative w-96 cursor-pointer overflow-hidden rounded-md border p-4"
      data-aos="zoom-in" // Apply zoom-in animation to the card
      data-aos-delay="100" // Optional: Add a delay for staggered animation
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col w-full">
          <figcaption className="text-sm font-medium text-800/95 ">
            {name}
          </figcaption>
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium ">{username}</p>
            <Rating style={{ maxWidth: 70 }} readOnly value={4.8} />
          </div>
        </div>
      </div>
      <blockquote className="mt-2 text-sm tracking-wide leading-relaxed text-gray-600">
        {body}
      </blockquote>
    </figure>
  );
};

const TestimonialSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);

  return (
    <section
      className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0"
      data-aos="zoom-in"
    >
      <SectionHeader
        title="Testimonials"
        heading="Student's Testimonials"
        description="Here are some of the testimonials from our students who have successfully completed their journey with us."
      />
      <div className="relative flex h-full w-full flex-col overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, index) => (
            <ReviewCard key={index + firstRow.length} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white"></div>
      </div>
    </section>
  );
};

export default TestimonialSection;
