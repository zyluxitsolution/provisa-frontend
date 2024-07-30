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

const Sop: React.FC = () => {
  const courses = [
    {
      image: img1,
      title: "Science",
      description:
        "The Science field is very large it incorporates physical, Biomedical and Chemical Science. Specialization include: Astronomy, Astrophysics, Biochemistry, Biomedical Science, Geography, Geology, Mathematical Science, Physics, Zoology etc.",
      link: "/",
    },
    {
      image: img2,
      title: "Health",
      description:
        "When it comes to studying and pursuing career in Nursing, Australia is given the first priority among other countries. You can earn an average salary of $65,000 per year as a Registered Nurse in Australia",
      link: "/",
    },
    {
      image: img3,
      title: "Architecture & Building",
      description:
        "Architecture programs in Australia are devised in collaboration with the Australian Institute of Architects, and Building programs developed with the Australian Institute of Building (AIB).",
      link: "/",
    },
    {
      image: img4,
      title: "Engineering & Technology",
      description:
        "Australia offers a huge range of engineering courses right across the country. This gives you the opportunity to specialize in the field of your choice.",
      link: "/",
    },
    {
      image: img5,
      title: "Business & Economics",
      description:
        "The Business and Economics discipline is one of the most popular program choices for international students coming to Australia.",
      link: "/",
    },
    {
      image: img6,
      title: "Law",
      description:
        "Australia degree in Australia is highly regarded owing to their demanding nature and intensity. A degree in Law is a good pathway to many positions in different fields such as business, banking and politics.",
      link: "/",
    },
    {
      image: img7,
      title: "Humanities, Social Science & Education",
      description:
        "An Australian degree in education or teaching will allow you to work as a professional teacher anywhere in the world. On the other hand, Humanities is the second largest of fields of study after business and management in Australia.",
      link: "/",
    },
    {
      image: img8,
      title: "Agriculture, Environment and Veterinary Science",
      description:
        "Most of the program offered within the discipline include hand on practical experiences such as a laboratory experiment, field studies and research assignments.",
      link: "/",
    },
    {
      image: img9,
      title: "Creative Industries",
      description:
        "The Creative Industries discipline involves the cultural professions. Students are assessed through a variety of methods including performance; exhibitions; presentations and written exams.",
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
          description={course.description}
          link={course.link}
        />
      ))}
    </div>
  );
};

export default Sop;
