import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BioData = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);
  return (
    <div
      className=" w-[80%] lg:w-[70%] mx-auto text-slate-700 my-8"
      data-aos="zoom-out"
      data-aos-duration="800"
    >
      <h1 className=" text-3xl mb-2 font-semibold text-black">Bio-Data</h1>
      <div>
        <h2 className=" text-2xl font-semibold text-slate-800 mb-3">
          Resume or Curriculum Vitae (CV)
        </h2>
        The Curriculum Vitae serves as a good supplement to your statement and
        other application materials. Here you can summarize all of your
        qualifications, honors, education and interests. <br />
        <br /> Before preparing your CV/resume, take some time to evaluate your
        skills and think about those skills you will want to highlight. Then
        make a rough draft. You can edit later. There is NO one ‘right’ way to
        construct a CV/resume. No matter how you do it, there is bound to be
        someone who would suggest a different approach. <br />
        <br />
        In this particular type the most reasonable format to use is
        Chronological Resume, which presents work experience/education in
        chronological order by listing most recent events first. <br />
        <br />
        The following are some general guidelines, please tailor them to your
        needs and create a resume which represents you in the best possible way.{" "}
        <br />
        <h2 className=" text-xl font-semibold text-slate-800 mt-7 my-2">
          What to Include
        </h2>
        <h6 className=" text-lg font-semibold text-slate-800 mb-3">
          Basic Information
        </h6>
        <ul className=" list-disc ml-5">
          <li>
            Your name as you want to be referred to professionally (Jon Baker,
            Jonathon Edward Baker, Jon E. Baker)
          </li>
          <li>
            Current address and phone number with area code (where you can be
            reached now!)
          </li>
          <li>Your e-mail and web-page if you have one</li>
          <li>
            It is not necessary to include other personal information such as
            Social Security Number or Marital Status
          </li>
        </ul>
        <h6 className=" text-xl font-semibold text-slate-800 mt-7 mb-2">
          Objective
        </h6>
        <p className=" mb-2">
          Including an objective in this type of resume is optional. Career
          objective should answer this question, “What do I want to do?” Some
          example objectives are:{" "}
        </p>
        <ul className=" list-disc ml-5">
          <li>Acceptance to graduate program in Physics</li>
          <li>Research position in biochemical laboratory</li>
        </ul>
        <h6 className=" text-xl font-semibold text-slate-800 mt-7 mb-2">
          Educational Background (for each degree conferring institution)
        </h6>
        <ul className=" list-disc ml-5">
          <li>Institution</li>
          <li>City/Country</li>
          <li>Dates attended or graduation date</li>
          <li>Degree or certification obtained</li>
          <li>GPA (if proud of it)</li>
          <li>Major/minor/emphasis area</li>
          <li>Relevant coursework</li>
          <li>Specialized instruction</li>
        </ul>
        <h6 className=" text-xl font-semibold text-slate-800 mt-7 mb-2">
          Experience
        </h6>
        <p>
          This part of your resume may include several sections such as work
          experience, volunteer experience (internships, community service,
          student teaching), campus leadership and any other area in which you
          may have significant experience, such as computer knowledge.
        </p>
        <h6 className=" text-xl font-semibold text-slate-800 mt-7 mb-2">
          Briefly describe for each position
        </h6>
        <ul className=" list-disc ml-5">
          {" "}
          <li>Title, dates, organization name, location</li>
          <li>Responsibilities</li>
          <li>
            Use action words and verbs in active form to describe situations and
            achievements
          </li>
          <li>Include scope of responsibilities</li>
          <li>Concretely outline any outstanding results</li>
        </ul>
        <h6 className=" text-xl font-semibold text-slate-800 mt-7 mb-2">
          Honors/Activities/Leadership/Special Skills
        </h6>
        <p>
          Front load these with those most important or most pertinent to your
          objective. You may want to use specific headings such as professional
          organizations, computer skills, and leadership positions. Include any
          honors, scholarships or recognition awards that you’ve received. If
          you were actively involved in any clubs, teams or committees while in
          college, those may be included also. The key to this section is keep
          it brief. If you feel you need more detail, use the guidelines for
          Experience and make it a complete section.
        </p>
        <h6 className=" text-xl font-semibold text-slate-800 mt-7 mb-2">
          Interests
        </h6>
        <p>
          List some your interest which show you as an interesting and
          well-rounded person.
        </p>
        <h6 className=" text-xl font-semibold text-slate-800 mt-7 mb-2">
          Layout
        </h6>
        <ul className=" list-disc ml-5">
          <li>
            is limited to 1-2 pages, unless you have extensive work or
            educational experiences
          </li>
          <li>uses white space consciously and balances words on the page</li>
          <li>is laser printed on quality paper (20# white)</li>
          <li>
            uses consistent visual elements to attract attention and emphasize
            highlights (bold, italics, underlining, font sizes, bullets)
          </li>
          <li>
            use standard sans serif typefaces such as Helvetica, Futura, Optima,
            Universe, Times (not 10 pt.), Palatino and New Century Schoolbook,
            in size 10-14.
          </li>
        </ul>
        <h6 className=" text-xl font-semibold text-slate-800 mt-7 mb-2">
          Writing quality
        </h6>
        <ul className=" list-disc ml-5">
          <li>is clear and concise (easy to read and understand)</li>
          <li>is consistent, using similar style throughout</li>
          <li>
            uses a variety of action verbs which describe situations and actions
          </li>
          <li>
            is perfect! Absolutely no typos, spelling errors, or grammatical
            errors
          </li>
          <li>
            uses appropriate tense (usually past, unless currently in activity)
          </li>
          <li>avoids passive voice</li>
        </ul>
      </div>
    </div>
  );
};

export default BioData;
