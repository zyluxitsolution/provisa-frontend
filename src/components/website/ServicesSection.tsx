import React, { useState } from "react";
import { HoverEffect } from "./magicui/card-hover-effect";
import SectionHeader from "./section-header";
import { createClient } from "@supabase/supabase-js";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function ServicesSection() {
  const supabase = createClient(
    "https://bwlxylhhnhcpevyeseyr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bHh5bGhobmhjcGV2eWVzZXlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODMwMzQ1MCwiZXhwIjoyMDMzODc5NDUwfQ.yo-7kqJ4UkDr9NkVD2uJyl0i0G_eYSZKSyaQUWhcYyU"
  );

  const [services, setServices] = React.useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase
        .from("Service")
        .select(
          `
        id,
        heading,
        shortDesc,
        thumbnail,
        slug
        
        `
        )
        .order("created_at", { ascending: false });
      if (error) {
        console.log(error.message);
        setIsFetching(false);
      }

      if (data) {
        setServices(data || []);
        setIsFetching(false);
      }
    };
    fetch();
  }, []);
  console.log(services);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);
  return (
    <div
      className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0"
      data-aos="zoom-out"
    >
      <SectionHeader
        title="Services"
        heading=" Our Services"
        description=" We provide the best services to our customers. We are always here to help you."
      />
      <HoverEffect items={services} />
    </div>
  );
}
