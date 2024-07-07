import { createClient } from "@supabase/supabase-js";
import React, { useEffect, useState } from "react";
import SectionHeader from "../components/website/section-header";

export default function Team() {
    const supabase = createClient("https://bwlxylhhnhcpevyeseyr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bHh5bGhobmhjcGV2eWVzZXlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODMwMzQ1MCwiZXhwIjoyMDMzODc5NDUwfQ.yo-7kqJ4UkDr9NkVD2uJyl0i0G_eYSZKSyaQUWhcYyU");
  const [teams, setTeams] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("Team").select("*").order("created_at", { ascending: false });
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

  return (
    <div className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0">
      <SectionHeader
        title="Our Team"
        heading="Meet our talent team"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt."
      />
      <div className="mt-12">
        <ul className=" grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-4">
          {teams?.map((item, idx) => (
            <li
              key={idx}
              className="flex flex-col gap-4 sm:flex-row  ">
              <div className="w-full sm:w-6/12 border border-secondary-300 border-dotted  h-80 rounded-md overflow-hidden">
                {item.thumbnail && (
                  <img
                    src={item.thumbnail}
                    className=" h-80 object-cover"
                    alt="img"
                    height={600}
                    width={600}
                  />
                )}
              </div>

              <div className="w-full sm:w-6/12 mt-4 sm:mt-0  ">
                <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                <p className="text-secondary-600">{item.position}</p>
                <p className="text-gray-600 mt-2 text-justify">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
