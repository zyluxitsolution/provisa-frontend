import React, { useEffect } from "react";
import SectionHeader from "./section-header";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCheckCircle,
  FaGlobe,
  FaUserGraduate,
  FaRegCalendarAlt,
} from "react-icons/fa";

// Custom CSS for slower rotation
const styles = `
@keyframes slow-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.slow-spin {
  animation: slow-spin 12s linear infinite; /* Adjust the duration as needed */
}
`;

export default function StatSection() {
  const stats = [
    {
      data: 3000,
      title: "Visas approved",
      icon: <FaCheckCircle className="text-primary-600 text-3xl" />, // Increased icon size
    },
    {
      data: 5000,
      title: "Students placed",
      icon: <FaUserGraduate className="text-primary-600 text-3xl" />, // Increased icon size
    },
    {
      data: 13,
      title: "Countries",
      icon: <FaGlobe className="text-primary-600 text-3xl" />, // Increased icon size
    },
    {
      data: 15,
      title: "Years of experience",
      icon: <FaRegCalendarAlt className="text-primary-600 text-3xl" />, // Increased icon size
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);

  return (
    <>
      <style>{styles}</style>
      <section
        className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0 "
        data-aos="fade-down"
      >
        <div>
          <SectionHeader
            title="Our Statistics"
            heading="Our students are always happy"
            description="Ensuring our students' happiness is at the heart of everything we do. We pride ourselves on providing personalized support and guidance that goes beyond expectations."
          />
          <div className="mt-12">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {stats.map((item, idx) => (
                <li key={idx} className="text-center mb-4">
                  <div className="mb-4">
                    <div className="relative w-36 h-36 p-4 mx-auto bg-primary-100 rounded-full flex items-center justify-center">
                      {/* Increased size and padding */}
                      <div className="absolute top-0 left-0 right-0 bottom-0 mx-auto w-36 h-36 border-4 border-dotted border-primary-600 rounded-full slow-spin"></div>

                      <div className="flex items-center justify-center w-36 h-36 absolute top-0 left-0 right-0 bottom-0 mx-auto">
                        {item.icon}
                      </div>
                    </div>
                  </div>
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
    </>
  );
}
