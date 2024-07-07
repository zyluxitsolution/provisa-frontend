

import Autoplay from "embla-carousel-autoplay";
import { EmblaOptionsType } from "embla-carousel";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

export default function HeroCarousel() {
  const OPTIONS: EmblaOptionsType = { loop: true };
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="  ">
      <CarouselContent>
        {lists.map((item, index) => (
          <CarouselItem
            key={index}
            className=" flex items-center   banner11 h-[20vh] sm:h-[30vh] md:h-[40vh]  lg:h-[50vh] xl:h-[70vh] xxl:h-[80vh]  ">
            <div className="  space-y-2 md:space-y-4 px-4">
              <p className=" text-xs  md:text-2xl font-medium tracking-wider text-primary-500">{item.title}</p>
              <p className="text-xl md:text-5xl font-bold tracking-wider text-secondary-900">{item.h1}</p>
              <p className={`text-primary-500 text-xl  md:text-6xl font-bold tracking-wider text-opacity-90`}>{item.h2}</p>
              <p className=" tracking-wider text-secondary-600">{item.desc}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" ms-14" />
      <CarouselNext className=" me-14" />
    </Carousel>
  );
}

const lists = [
  {
    title: "Upcoming Offer",
    h1: "Big  Deals From",
    h2: "Manufacturers",
    h2color: "text-pink-500",
    desc: "Save more 10% on each purchase.",
    bgcolor: "text-green-50",
  },

  {
    title: "Trade-in Offer",
    h1: "Super value deals",
    h2: "On all products",
    h2color: "text-green-500",
    desc: "Save more 10% on each purchase.",
    bgcolor: "text-teal-50",
  },

  {
    title: "Hot Promotion",
    h1: "Fashion Trending",
    h2: "Great Collection",
    h2color: "text-teal-500",
    desc: "Save more 10% on each purchase.",
    bgcolor: "text-pink-50",
  },
];
