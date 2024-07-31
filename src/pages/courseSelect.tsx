import React from "react";
import CardComponent from "../components/website/CardComponent";
import img1 from "../assets/course-img/science.jpg";
import img2 from "../assets/course-img/health.jpg";
import img3 from "../assets/course-img/arch.jpg";
import img4 from "../assets/course-img/engg.jpg";
import img5 from "../assets/course-img/eco.jpg";
import img6 from "../assets/course-img/law.jpg";
import img7 from "../assets/course-img/social.jpg";
import img8 from "../assets/course-img/Agriculture-Environment-and-Veterinary-Science.jpg";
import img9 from "../assets/course-img/creative.jpg";

const Course: React.FC = () => {
  const courses = [
    { image: img1, title: "Science", link: "/" },
    { image: img2, title: "Health", link: "/" },
    {
      image: img3,
      title: "Architecture & Building",
      link: "/",
    },
    { image: img4, title: "Engineering & Techonology", link: "/" },
    { image: img5, title: "Business & Economics", link: "/" },
    { image: img6, title: "Law", link: "/" },
    {
      image: img7,
      title: "Humanities, Social Science & Education",
      link: "/",
    },
    {
      image: img8,
      title: "Agriculture, Environment and Veterinary Science",
      link: "/",
    },
    {
      image: img9,
      title: "Creative Industries",
      link: "/",
    },
  ];

  return (
    <div
      className="w-[90%] md:w-[80%] mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      data-aos="zoom-out"
    >
      {courses.map((course, index) => (
        <CardComponent
          key={index}
          image={course.image}
          title={course.title}
          link={course.link}
        />
      ))}
    </div>
  );
};

export default Course;
