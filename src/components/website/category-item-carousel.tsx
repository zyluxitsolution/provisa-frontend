"use client";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import React, { useState } from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { supabase } from "@/utils/something/supabase/supabaseClient";

export default function CarouselItemCarousel({ title1, title2 }: any) {
  const [categories, setCategories] = useState<any>();

  React.useEffect(() => {
    const fetch = async () => {
      let { data, error, status } = await supabase.from("Category").select("*");

      if (error) {
        console.error("Failed to fetch categories:", error.message);
        return;
      }

      if (status === 200 && data) {
        setCategories(data);
      }
    };
    fetch();
  }, []);

  return (
    <>
      {categories && (
        <div>
          <p className=" text-xl font-semibold  tracking-wider uppercase  text-primary-500">
            {" "}
            {title1} {""}
            <span className=" text-secondary-900">{title2}</span>{" "}
          </p>
          <div className=" flex mb-4 mt-1">
            <Separator />
          </div>
          <Carousel
            opts={{ align: "start", loop: false }}
            className="w-full">
            <CarouselContent className="">
              {categories?.map((category: any, index: any) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/4 hover:-translate-y-1 duration-300">
                  <SingleCategoryCard category={category} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className=" ms-20 bg-primary-400 text-white hover:bg-primary-350 hover:text-white" />
            <CarouselNext className=" me-20 bg-primary-400 text-white hover:bg-primary-350 hover:text-white" />
          </Carousel>
        </div>
      )}
    </>
  );
}

function SingleCategoryCard({ category }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {category && (
        <div className="border    border-primary-500 border-opacity-10 hover:border-opacity-20 rounded-xl p-2  space-y-1 cursor-pointer  ">
          <Link href={`/shop?category=${category._id}`}>
            <Image
              src={isHovered ? category.thumbnail : category.thumbnail || ""}
              alt="img"
              width={400}
              height={400}
              className=" rounded-xl object-cover h-80  w-full bg-primary-50 "
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <p className=" bg-primary-400 p-1 text-white rounded-sm text-center  tracking-wider  text-lg">{category.name}</p>
          </Link>
        </div>
      )}
    </>
  );
}
