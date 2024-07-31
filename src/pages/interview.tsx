import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const InterviewPrep = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);
  return (
    <div
      className=" w-[80%] lg:w-[70%] mx-auto text-slate-700 my-8"
      data-aos="zoom-out"
    >
      <h1 className=" text-3xl mb-2 font-semibold text-black">
        Interview Preparation
      </h1>
      <h2 className=" text-xl font-semibold text-slate-800 mb-3">
        VISA INTERVIEW CHECKLIST FOR AUSTRALIA, JAPAN, CANADA, UK, USA AND ANY
        OTHER COUNTRY.
      </h2>
      <div className=" mb-5">
        Visa interview is an important step prior to the final confirmation of
        student visa approval for most countries including Australia, Canada,
        Germany, New Zealand, UK and USA. Your interview could fasten or delay
        your visa processing. Therefore, it is crucial that you prepare for the
        interview and address all concerns of the visa officer. The interview is
        taken by the ambassador or visa officer who may ask you a range of
        questions mainly to ensure that your application case is genuine and
        your intentions align with what is being written in the application
        form. The officer is a trained professional, who could ask multiple
        unrelated questions, not to annoy you but to know your real interests
        and objectives. If you are prepared, you can enjoy this process and
        meeting with someone who opens the door of a new country for you.
      </div>
      <h6 className=" text-lg font-semibold text-slate-800 mb-2">
        A few visa interview tips:
      </h6>
      <ul className=" list-disc ml-5 mb-8">
        <li>Prepare for the interview questions in advance.</li>
        <li>Get a copy of your all documents with you for the interview.</li>
        <li>Dress appropriately (formally).</li>
        <li>Be on time for the interview.</li>
        <li>Be courteous, friendly and polite throughout the interview.</li>
        <li>
          Be confident as you the best about yourself, where and why you have
          made applications.
        </li>
        <li>
          Give brief and clear answers. If not sure, then you can ask the
          question again. Be thoughtful in your answers.
        </li>
        <li>
          Go through the website and handbook of your university carefully.
        </li>
        <li>
          Know about your course contents thoroughly including course duration,
          fee, commencement & end date, credits points etc.
        </li>
        <li>
          You should be clear about your future plans after completing the
          course.
        </li>
        <li>
          Be ready for any strange questions and don’t get nervous when you have
          them. They are meant to test your intentions, skills or IQ.
        </li>
      </ul>
      <h2 className=" text-xl font-semibold text-slate-800 mt-7 my-2">
        Preparatory interview questions for the Student Visa Interview:
      </h2>
      <h6 className=" text-lg font-semibold text-slate-800 mb-2">
        Introductory questions:
      </h6>
      <ul className=" list-disc ml-5 mb-8">
        <li>
          How are you doing?
          <br />
          (This Question to make you comfortable)
        </li>
        <li>
          Have you ever been to the respective country before?
          <br />
          (This is for the visa officer’s records – If yes then it is advisable
          to remember the date of last arrival and departure from the country of
          visa application)
        </li>
      </ul>

      <h6 className=" text-lg font-semibold text-slate-800 mb-3 ">
        Questions on your intention and motivation of study in the respective
        country:
      </h6>
      <ul className=" list-disc ml-5 mb-8">
        <li>
          Why do you want to study in the respective country?
          <br />
          (It is to check your intention to go to the respective country)
        </li>
        <li>
          Why did you select this particular university?
          <br />
          (It is to check you have done your research about your education and
          serious about it)
        </li>
        <li>
          Which are the other universities you have applied to? <br />
          (It is to check whether you are really serious about your education
          and have planned well)
        </li>
      </ul>

      <h6 className=" text-lg font-semibold text-slate-800 mb-2">
        Questions on your subject and course:
      </h6>
      <ul className=" list-disc ml-5 mb-8">
        <li>
          For which course you are going?
          <br />
          (It is to check that you know about what you have applied for)
        </li>
        <li>
          Why did you choose this course?
          <br />
          (It is to check that you have chosen your course by yourself)
        </li>
        <li>
          Why don’t you do this course here in Nepal? <br />
          (It is to know whether this course is available here and which
          differences motivate you to visit the respective country – bring out
          the difference between the courses offered in Nepal and abroad; State
          the difference in terms of theoretical and practical education)
        </li>
        <li>
          What are the course commencement and completion dates?
          <br />
          (Remember the exact start and end date of the course)
        </li>
      </ul>

      <h6 className=" text-lg font-semibold text-slate-800 mb-2">
        Questions on funding for study in the respective country:
      </h6>
      <ul className=" list-disc ml-5 mb-8">
        <li>
          Questions on funding for study in the respective country: <br />
          (It is to check you are aware of your funds and how you will manage
          your finances during your course duration)
        </li>
        <li>
          Who is sponsoring your education? <br />
          (If you have a scholarship, then say that. Otherwise mention the name
          of your sponsors. If they are your parents then mention that your
          father and/or mother are supporting you as per the financial documents
          [My father and relatives – As per Visa documents & Funds])
        </li>
        <li>
          What does s/he (mother/father) do? <br />
          (Visa officer basically wants to verify the financial capability of
          the sponsors. Go through the tax documents, all bank statements and
          other supporting documents, and have a good idea of the income source
          of your sponsors)
        </li>
        <li>
          What savings does your family have?
          <br />
          (Visa officer wants to confirm you have sufficient funds. Show your
          proofs and be sure that you know your financial documents.)
        </li>
        <li>
          What is your father’s annual income? <br />
          (This is just to get the idea if your father’s annual income is
          sufficient enough to meet your expenses of studying abroad)
        </li>
        <li>
          How many brothers and sisters do you have?
          <br />
          (Such questions are asked to evaluate the balance of income and
          expenses of the family)
        </li>
        <li>
          Do you have enough funds while you are there?
          <br />
          (Give a confident answer stating that you meet the educational
          expenses.)
        </li>
      </ul>
      <h6 className=" text-lg font-semibold text-slate-800 mb-2">
        Questions on academic qualifications of the student:
      </h6>
      <ul className=" list-disc ml-5 mb-8">
        <li>
          What is your undergraduate GPA?
          <br />
          (Convert your percentage in GPA and remember it exactly)
        </li>
        <li>
          Can you show me your degree?
          <br />
          (Only show the document that has been asked)
        </li>
        <li>
          Mention some professors’ name?
          <br />
          (Give names of professors you know and explain your relation with
          them)
        </li>
        <li>
          Show me your GRE and TOEFL Score? <br />
          Show me your GRE and TOEFL Score?
        </li>
      </ul>
      <h6 className=" text-lg font-semibold text-slate-800 mb-2">
        Questions on students achievements:
      </h6>
      <ul className=" list-disc ml-5 mb-8">
        <li>
          Tell me something about your past?
          <br />
          (It is to know you more – mention what you were doing after your last
          school till today. Make sure your answers cover your achievements,
          skills and sincerity)
        </li>
        <li>
          From where did you do your under graduation?
          <br />
          (It is to know your study background – mention the name of your
          university and course. If the university has any high ranking then
          mention that too)
        </li>
        <li>
          Are you getting any school waiver?
          <br />
          (It is to check your excellence – if you have got any tuition fee
          waiver or teaching assistantship or research assistantship then
          mention it)
        </li>
        <li>
          Why do you think the university is giving scholarship to you?
          <br />
          (It is to check your sharpness – most scholarships are awarded for
          good academic records, GRE or TOEFL scores)
        </li>
      </ul>

      <h6 className=" text-lg font-semibold text-slate-800 mb-2">
        Questions on awareness of and living arrangements in the respective:
      </h6>
      <ul className=" list-disc ml-5 mb-8">
        <li>
          Where do you plan to stay in the respective country?
          <br />
          (Mention the address and arrangements for your education abroad)
        </li>
        <li>
          Do you have any relative in the respective country?
          <br />
          (Be truthful at this instance)
        </li>
        <li>
          Is your brother/sister enjoying there?
          <br />
          (Never answer in a way that makes them believes that they plan to
          settle or overstay)
        </li>
        <li>
          What do you plan to do during your vacations?
          <br />
          (Give a plan to show your ties up with your family and country. Don’t
          show your intention for work)
          <br />
        </li>
        <li>
          {" "}
          What is the location of your university?
          <br />
          (Know the exact location of your university and whether it is the
          reason to go there)
        </li>
      </ul>

      <h6 className=" text-lg font-semibold text-slate-800 mb-2">
        Questions on future plans:
      </h6>
      <ul className=" list-disc ml-5 mb-8">
        <li>
          What are your future plans? Do you intend to stay in the respective
          country?
          <br />
          (Your answers should reflect clarity of your thoughts and intentions.
          Mention your strong ties to the home country, and excellent
          opportunities available in Nepalstablish your business or career)
        </li>
        <li>
          Do you plan to work there?
          <br />
          (Convince the officer that your intention is not to stay in the
          respective country permanently. You have your liabilities at home and
          your family is in Nepal, for whom you would like to come back to)
        </li>
        <li>
          What’s the difference you can make by doing your course in the
          respective country?
          <br />
          (Prepare for this answer that suit best to your profile and course.
          You can mention about better job opportunities and future prospects.)
        </li>
        <li>
          *Respective country is the country where you intend to go for further
          studies.
        </li>
      </ul>
    </div>
  );
};

export default InterviewPrep;
