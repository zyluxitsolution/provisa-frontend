import React from "react";
import { Button } from "../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Carousel className="w-full  ">
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem
            key={index}
            
            className={`${banner.bgimage} flex items-center justify-center h-[60vh] md:h-[80vh] relative `}>
                     <div className="w-full h-full absolute top-0 left-0 bg-black opacity-[0.5] z-10"></div>
            <div className="max-w-screen-xl mx-auto md:text-center space-y-6 px-4 md:px-0 z-10">
              <h3 className=" text-3xl font-semibold sm:text-7xl text-white">{banner.title}</h3>
              <p className=" max-w-2xl mx-auto text-white/70 font-medium">{banner.description}</p>
             <div>
              <Link href={"/contact"}>
              <Button>Visit us for counselling</Button>
              </Link>
             </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
}

const banners = [
  {
    title: "Empowering Your Education and Visa Journey",
    description: "Our collaborative approach is designed to support you every step of the way. We work closely with you to navigate the complexities of the education and visa process, ensuring a smooth and successful experience.",
    bgimage: "herobanner1",
  },
  {
    title: "50% Off on IELTS and PTE Coaching",
    description: "Achieve your language proficiency goals with our specialized coaching programs. Benefit from expert guidance and tailored strategies to excel in IELTS and PTE exams.",
    bgimage: "herobanner2",
  },
];

