import React from "react";
import SectionHeader from "./section-header";
import CountUp from "react-countup";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function StatSection() {
  const stats = [
    {
      data: 3000,
      title: "Visas approved",
    },
    {
      data: 5000,
      title: "Students placed",
    },
    {
      data: 13,
      title: "Countries",
    },
    {
      data: 9,
      title: "Years of experience",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);
  return (
    <section
      className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0"
      data-aos="fade-right"
    >
      <div className="">
        <SectionHeader
          title="Our Statistics"
          heading="Our students are always happy"
          description="Ensuring our students' happiness is at the heart of everything we do. We pride ourselves on providing personalized support and guidance that goes beyond expectations."
        />
        <div className="mt-12">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((item, idx) => (
              <li key={idx} className="text-center mb-4">
                <CountUp
                  end={item.data}
                  duration={2.5} // Duration in seconds for the animation
                  separator="," // Separator for thousands
                  className="text-4xl text-primary-600 font-semibold"
                />
                <span className="text-4xl text-primary-600 font-semibold">
                  +
                </span>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
