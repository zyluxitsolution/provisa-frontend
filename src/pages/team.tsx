import React, { useEffect, useState } from "react";
import SectionHeader from "../components/website/section-header";
import { supabase } from "../supabaseclient";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Team() {
  const [teams, setTeams] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase
        .from("Team")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        console.log(error.message);
        setIsFetching(false);
      }

      if (data) {
        setTeams(data || []);
        setIsFetching(false);
      }
    };
    fetch();
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);

  return (
    <div
      className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0"
      data-aos="zoom-out"
    >
      <SectionHeader
        title="Our Team"
        heading="Meet our talent team"
        description="Welcome to our Talent Team! We are a group of dedicated professionals passionate about identifying, nurturing, and supporting top talent. Our team brings together a diverse range of skills and experiences, ensuring we provide the best opportunities and resources for our members. We are committed to fostering a dynamic and inclusive environment where everyone can thrive and reach their full potential. Join us on our journey to success!"
      />
      <div className="mt-12">
        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-4">
          {teams?.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col gap-4 sm:flex-row group"
              data-aos="zoom-in"
            >
              <div className="w-full sm:w-6/12 flex flex-col items-center ">
                <div className="border border-secondary-300 border-dotted h-80 rounded-md overflow-hidden relative group">
                  {item.thumbnail && (
                    <img
                      src={item.thumbnail}
                      className="h-80 object-cover group-hover:-translate-y-px"
                      alt="img"
                      height={600}
                      width={600}
                    />
                  )}
                </div>
                <div className="mt-2 transition-transform transform group-hover:-translate-y-14 group-hover:bg-primary-500  text-center w-full duration-500">
                  <h4 className="text-lg text-gray-700 group-hover:text-white font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-secondary-600 group-hover:text-white">
                    {item.position}
                  </p>
                </div>
              </div>
              <div className="w-full sm:w-6/12 mt-4 sm:mt-0">
                <p className="text-gray-600 mt-2 text-justify">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
