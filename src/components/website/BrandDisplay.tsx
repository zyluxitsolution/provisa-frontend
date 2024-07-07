"use client";
import React from "react";
import { supabase } from "@/utils/something/supabase/supabaseClient";
import Image from "next/image";

export default function BrandDisplay() {
  const [brands, setBrands] = React.useState<any>();
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error, status } = await supabase.from("Brand").select(`id,thumbnail`).eq("publish", true);

      if (error) {
        console.error("Failed to fetch brands:", error.message);
        return;
      }

      if (status === 200 && data) {
        setBrands(data);
      }
    };
    fetch();
  }, []);

  return (
    <section>
      <p className=" text-2xl font-semibold  tracking-wider uppercase  text-primary-500 mb-12 text-center">
        Favourite
        <span className=" text-secondary-900 ms-4">Brands</span>{" "}
      </p>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {brands?.map((brand: any) => (
          <div key={brand.id}>
            <Image
              src={brand.thumbnail || ""}
              alt="img"
              height={300}
              width={300}
              className=" h-24 md:h-32 object-scale-down"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
