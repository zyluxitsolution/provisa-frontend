import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseclient";

export default function StudyAbroad() {
  const [studyAbroads, setStudyAbroads] = React.useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("StudyAbroad").select("*").order("created_at", { ascending: false });
      if (error) {
        console.log(error.message);
        setIsFetching(false);
      }

      if (data) {
        setStudyAbroads(data || []);
        setIsFetching(false);
      }
    };
    fetch();
  }, []);

  return (
    <section className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0">
      <div className="">
        <div className="max-w-xl mx-auto space-y-3 sm:text-center">
          <h3 className="text-primary-600 font-semibold tracking-wide leading-relaxed">Study Abroad</h3>
          <p className="text-gray-800/95 text-3xl font-semibold sm:text-4xl">Explore Global Education Opportunities</p>
          <p className=" text-gray-600  tracking-wide leading-relaxed">Discover the best strategies to simplify the process of studying abroad. Stay updated with essential information, trends, and tips to make your international education experience seamless and rewarding.</p>
        </div>
        <div className="mt-12">
          {studyAbroads.length >= 1 && (
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
              {studyAbroads?.map((item, idx) => (
                <Link
                  to={`/study-abroad/${item.slug}`}
                  key={idx}
                  className="group flex gap-x-4 bg-gray-100 hover:bg-secondary-950 transition-all ease-in-out duration-300 cursor-pointer py-4 px-2 rounded-md">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="flex-none w-12 h-12  rounded-lg flex items-center justify-center"
                  />
                  <div>
                    <h4 className="text-lg text-gray-800/95 font-semibold group-hover:text-gray-200">{item.heading}</h4>
                    <p className="mt-3 text-gray-600 group-hover:text-gray-300">{item.shortDesc}</p>
                  </div>
                </Link>
              ))}
            </ul>
          )}

          {isFetching ||
            (studyAbroads.length === 0 && (
              <div className="  grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className=" bg-gray-300/50 animate-pulse h-44 rounded-md "></div>
                <div className=" bg-gray-300/50 animate-pulse h-44 rounded-md "></div>
                <div className=" bg-gray-300/50 animate-pulse h-44 rounded-md "></div>
                <div className=" bg-gray-300/50 animate-pulse h-44 rounded-md "></div>
                <div className=" bg-gray-300/50 animate-pulse h-44 rounded-md "></div>
                <div className=" bg-gray-300/50 animate-pulse h-44 rounded-md "></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
