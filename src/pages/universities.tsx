import React, { useState } from "react";
import "@smastrom/react-rating/style.css";
import { ImageOff, MapPin } from "lucide-react";
import SectionHeader from "../components/website/section-header";
import { cn } from "../lib/utils";
import Marquee from "../components/website/magicui/marquee";
import { supabase } from "../supabaseclient";
import { useEffect } from "react";
import AOS from "aos";

const ReviewCard = ({ name, location, thumbnail }: any) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-md border p-4",
        // light styles
        "border-primary-200/60 bg-gray-800/[.01] hover:bg-gray-800/[.05] hover:border-primary-200"
        // dark styles
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col w-full">
          <figcaption className="text-sm font-medium text-800/95 text-secondary-600 ">
            {name}
          </figcaption>
          <div className=" flex items-center justify-end">
            <p className="text-sm font-medium  flex items-center gap-1 text-gray-800">
              <MapPin size={16} className="" /> {location}
            </p>
          </div>
        </div>
      </div>
      <img
        alt="img"
        src={thumbnail}
        height={200}
        width={200}
        className=" h-14 object-scale-down"
      />
    </figure>
  );
};

export default function Universities() {
  const [universities, setUniverties] = React.useState<any>([]);
  const [isFetching, setIsFetching] = useState(false);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase
        .from("University")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        console.log(error.message);
        setIsFetching(false);
      }

      if (data) {
        setUniverties(data || []);
        setIsFetching(false);
      }
    };
    fetch();
  }, []);

  const firstRow = universities.slice(0, universities.length / 2);
  const secondRow = universities.slice(universities.length / 2);
  const thirdRow = universities.slice(0, universities.length / 2);
  const fourthRow = universities.slice(universities.length / 2);

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
          heading=" Top universities we are partnered with"
          description=" We are partnered with top universities around the world to provide you with the best education."
        />
        {universities.length >= 1 && (
          <div className="relative  flex h-full w-full flex-col   overflow-hidden  ">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review: any) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review: any) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>

            <Marquee pauseOnHover className="[--duration:20s]">
              {thirdRow.map((review: any) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>

            {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
              {fourthRow.map((review: any) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee> */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white "></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white "></div>
          </div>
        )}

        {isFetching ||
          (universities.length === 0 && (
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 ">
              <div className=" h-40 bg-gray-300/50 border-primary-200/60 animate-pulse rounded-md"></div>
              <div className=" h-40 bg-gray-300/50 border-primary-200/60 animate-pulse rounded-md"></div>
              <div className=" h-40 bg-gray-300/50 border-primary-200/60 animate-pulse rounded-md"></div>
              <div className=" h-40 bg-gray-300/50 border-primary-200/60 animate-pulse rounded-md"></div>
              <div className=" h-40 bg-gray-300/50 border-primary-200/60 animate-pulse rounded-md"></div>
              <div className=" h-40 bg-gray-300/50 border-primary-200/60 animate-pulse rounded-md"></div>
              <div className=" h-40 bg-gray-300/50 border-primary-200/60 animate-pulse rounded-md"></div>
              <div className=" h-40 bg-gray-300/50 border-primary-200/60 animate-pulse rounded-md"></div>
            </div>
          ))}
      </section>
    </div>
  );
}
