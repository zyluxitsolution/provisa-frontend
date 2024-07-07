"use client";
import { supabase } from "@/utils/something/supabase/supabaseClient";
import React, { useState } from "react";
import { HoverEffect } from "./magicui/card-hover-effect";
import SectionHeader from "./section-header";

export default function ServicesSection() {
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

  return (
    <div className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0">
      <SectionHeader
        title="Services"
        heading=" Our Services"
        description=" We provide the best services to our customers. We are always here to help you."
      />
      <HoverEffect items={services} />
    </div>
  );
}
