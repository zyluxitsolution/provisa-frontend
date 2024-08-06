// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import { ChevronRight } from "lucide-react";
// import { Button } from "../ui/button";
// import { Link } from "react-router-dom";

// export const TextParallaxContentExample = () => {
//   return (
//     <div className="bg-white">
//       <TextParallaxContent
//         imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         subheading="Collaborate"
//         heading="Empowering Your Education Journey."
//       >
//         <ExampleContent />
//       </TextParallaxContent>
//       {/* <TextParallaxContent
//         imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         subheading="Quality"
//         heading="Excellence Without Compromise.">
//         <ExampleContent />
//       </TextParallaxContent> */}
//       {/* <TextParallaxContent
//         imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         subheading="Modern"
//         heading="Dress for the best.">
//         <ExampleContent />
//       </TextParallaxContent> */}
//     </div>
//   );
// };

// const IMG_PADDING = 12;

// const TextParallaxContent = ({
//   imgUrl,
//   subheading,
//   heading,
//   children,
// }: any) => {
//   return (
//     <div
//       style={{
//         paddingLeft: IMG_PADDING,
//         paddingRight: IMG_PADDING,
//       }}
//     >
//       <div className="relative h-[60vh] md:h-[150vh]">
//         <StickyImage imgUrl={imgUrl} />
//         <OverlayCopy heading={heading} subheading={subheading} />
//       </div>
//       {children}
//     </div>
//   );
// };

// const StickyImage = ({ imgUrl }: any) => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["end end", "end start"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

//   return (
//     <motion.div
//       style={{
//         backgroundImage: `url(${imgUrl})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: `calc(60vh - ${IMG_PADDING * 2}px)`,
//         top: IMG_PADDING,
//         scale,
//       }}
//       ref={targetRef}
//       className="sticky z-0 overflow-hidden rounded-md"
//     >
//       <motion.div
//         className="absolute inset-0 bg-neutral-950/70"
//         style={{
//           opacity,
//         }}
//       />
//     </motion.div>
//   );
// };

// const OverlayCopy = ({ subheading, heading }: any) => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start end", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
//   const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

//   return (
//     <motion.div
//       style={{
//         y,
//         opacity,
//       }}
//       ref={targetRef}
//       className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
//     >
//       <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl ">
//         {subheading}
//       </p>
//       <p className="text-center text-3xl font-bold md:text-7xl">{heading}</p>
//     </motion.div>
//   );
// };

// const ExampleContent = () => (
//   <div className="w-full md:w-8/12 mx-auto grid-cols-1 gap-8 px-4 pb-24 pt-12 ">
//     <h2 className="1 text-gray-800/95 text-3xl font-semibold sm:text-4xl">
//       Empowering Your Education and Visa Journey.
//     </h2>
//     <div className="">
//       <p className="mb-4 text-gray-600/90  tracking-wide leading-relaxed text-justify">
//         Our collaborative approach is designed to support you every step of the
//         way. We work closely with you to navigate the complexities of the
//         education and visa process, ensuring a smooth and successful
//         experience.Whether you need assistance with university applications,
//         visa paperwork, or understanding international requirements, our expert
//         team is here to help. We strive to make your educational and immigration
//         aspirations a reality through personalized guidance and unwavering
//         support.
//       </p>

//       <p className="mb-8 text-gray-600/90  tracking-wide leading-relaxed text-justify">
//         Professional Visa and Education Services Pvt. Ltd. (Pro-Visa) is a
//         professional visa and educational consultancy authorized by the Ministry
//         of Education (MOE) and offering free education to students interested in
//         studying abroad. Our offices are in Kathmandu and Nepalgunj. We have a
//         Learning Center that is fully equipped with ultra-modern facilities and
//         provides students with our best advisors and tutors for Test Preparation
//         Classes in order to provide better service to our students. We are proud
//         of our students who have been successful in their careers as a result of
//         our counseling and guidance, in addition to our high visa success rate.
//         As a result, we may be Nepals best education consultancy.
//       </p>

//       <Link to={"/about"}>
//         <Button>
//           Learn more <ChevronRight size={16} className="inline" />
//         </Button>
//       </Link>
//     </div>
//   </div>
// );

// src/components/website/TextParallaxContentExample.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
const TextParallaxContentExample: React.FC = () => {
  const backgroundImageUrl = "/public/studyAbroad/newZealand.jpg";
  return (
    <div>
      <div className="my-[4rem]">
        <div className="bg-gray-100">
          <div
            className="relative h-[60rem] md:h-[40rem] lg:h-[30rem] bg-fixed bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
          >
            <div className="absolute inset-0 bg-primary-450 opacity-60"></div>
            <div className="absolute inset-0 bg-[#2d1d54] opacity-60"></div>
            <div className="relative md:px-0 px-4 z-10 flex flex-col items-center justify-center h-full">
              <h1
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className="uppercase text-gray-300 z-40 text-xl md:text-2xl font-bold text-center"
              ></h1>{" "}
              <div className="text-slate-200 md:w-[80%] lg:w-[70%]  ">
                <h2 className="  text-xl md:text-2xl font-bold lg:text-3xl  sm:text-4xl mb-3 lg:mb-6 text-primary-600 mx-5">
                  Empowering Your Education and Visa Journey.
                </h2>
                <div className=" mx-2 lg:mx-5">
                  <p className="mb-4  tracking-wide leading-relaxed md:text-justify">
                    Our collaborative approach is designed to support you every
                    step of the way. We work closely with you to navigate the
                    complexities of the education and visa process, ensuring a
                    smooth and successful experience.Whether you need assistance
                    with university applications, visa paperwork, or
                    understanding international requirements, our expert team is
                    here to help. We strive to make your educational and
                    immigration aspirations a reality through personalized
                    guidance and unwavering support.
                  </p>
                  <p className="mb-8   tracking-wide leading-relaxed md:text-justify">
                    Professional Visa and Education Services Pvt. Ltd.
                    (Pro-Visa) is a professional visa and educational
                    consultancy authorized by the Ministry of Education (MOE)
                    and offering free education to students interested in
                    studying abroad. Our offices are in Kathmandu and Nepalgunj.
                    We have a Learning Center that is fully equipped with
                    ultra-modern facilities and provides students with our best
                    advisors and tutors for Test Preparation Classes in order to
                    provide better service to our students. We are proud of our
                    students who have been successful in their careers as a
                    result of our counseling and guidance, in addition to our
                    high visa success rate. As a result, we may be Nepals best
                    education consultancy.{" "}
                  </p>

                  <Link to={"/about"}>
                    {" "}
                    <Button>
                      {" "}
                      Learn more <ChevronRight
                        size={16}
                        className="inline"
                      />{" "}
                    </Button>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextParallaxContentExample;
