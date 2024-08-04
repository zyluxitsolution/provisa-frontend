import { Link } from "react-router-dom";
import mdimage from "../../public/team/md-img.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);
  return (
    <section
      className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0"
      data-aos="zoom-out"
    >
      <div className="max-w-2xl">
        <h3 className="mt-3 text-gray-800 text-3xl font-extrabold sm:text-4xl">
          Get to know about us
        </h3>
        <div className="mt-3 text-gray-600 dark:text-gray-400">
          <p>
            We are a team of professionals who are dedicated to providing the
            best education consultancy services in Nepal. We are here to help
            you make the right decision for your future. If you have any
            questions, feel free to{" "}
            <Link
              className="text-primary-600 font-semibold whitespace-nowrap"
              to="/contact"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="mt-12 divide-y sm:mt-20">
        {faqsList.map((list: any, idx) => (
          <div key={idx} className="py-5 gap-x-12 first:pt-0 sm:flex">
            <div
              className="max-w-sm pt-8 pb-6 sm:pt-0 lg:flex-grow"
              data-aos="fade-right"
            >
              <h4 className="text-secondary-600 font-semibold text-xl flex items-center gap-2">
                {list.icon}
                <span className=" text-primary-600"> {list.label}</span>
              </h4>
            </div>
            <ul className="flex-1 space-y-6 sm:last:pb-6 sm:space-y-8">
              {list.qas.map((item: any, idx: number) => (
                <li key={idx}>
                  {item.image && (
                    <img
                      src={item.image}
                      alt="md"
                      height={300}
                      width={300}
                      className=" mx-auto rounded-md"
                      data-aos="zoom-in"
                    />
                  )}

                  <summary className="flex items-center justify-between font-semibold text-gray-700">
                    {item.q}
                  </summary>

                  <p
                    className="mt-3 text-gray-600 leading-relaxed"
                    data-aos="zoom-out"
                  >
                    {item.a}
                  </p>
                  <p
                    className="mt-3 text-gray-600 leading-relaxed"
                    data-aos="zoom-out"
                  >
                    {item.a2}
                  </p>
                  <p
                    className="mt-3 text-gray-600 leading-relaxed"
                    data-aos="zoom-out"
                  >
                    {item.a3}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

const faqsList = [
  {
    label: "Who We are",
    icon: <IconThink />,
    qas: [
      {
        a: "Professional Visa and Education Services Pvt. Ltd. (Pro-Visa) is the Best #1 Education Consultancy in Nepal, authorized from ministry of education (MOE) and free education providing proper guidance to students planning for international study. We are running gracefully since 2009; facilitating students by providing students actual information with the full support in documentation process and language skills. ",
        a2: "We counsel students  by analyzing their academic profile and advising them the best suitable option best matched to their own career aspiration. Currently, PRO-VISA, #1 Education Consultancy in Nepal is recruiting students from Nepal to Australia, USA, UK, China, Japan, south korea,Newzelead,Medical education for Bangaledesh ,Germany, France, Hungary, Finland, India, China, and Bangladesh for higher study and providing different language classes for student which benefits students for easy communication and maintain a bond with different countries.",
        a3: " We are also bringing foreign students to Nepal for medical study and are also planning for student exchange programs in the near future. We are planning to provide Nepali language classes to foreign students to make it easy for them to communicate in Nepal by helping them understand Nepali culture and civilization",
      },

      // {
      //   q: "Do you include common questions?",
      //   a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
      // },
    ],
  },
  {
    label: "Our Mission",
    icon: <IconMission />,
    qas: [
      {
        // q: "Can I use this for 21 questions?",
        a: "Our mission is to make students choose the best education destination for them to help them become professional experts in the future. Many students from Nepal are in search of an ideal education provider abroad, for their higher study. Lack of proper guidance is limiting them to meet their expectations.PRO-VISA is here to guide them honest, up-to date and right information to help students walk on right track for their bright future of success.",
        a2: " Since its initiation PRO-VISA has been committing to develop quality human resource with high academic and moral standard by recommending them to top-class Colleges and Universities abroad, so that they can become the leaders of tomorrow with a wider vision for the goodwill of the country.",
      },
      // {
      //   q: "Are these questions for girls or for boys?",
      //   a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
      // },
      // {
      //   q: "What do you wish you had more talent doing?",
      //   a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
      // },
    ],
  },
  {
    label: "Our Vision",
    icon: <IconVision />,
    qas: [
      {
        // q: "What's something that was completely out-of-character that you did?",
        a: "Our vision is to connect Nepal to the world by searching best universities and colleges for Nepalese students. Further as your education partner, we take care of everything from advising you on course selection and applications, to helping you secure the correct visa",
      },
    ],
  },

  {
    label: "Message From M.D",
    icon: <IconVision />,
    qas: [
      {
        // q: "What's something that was completely out-of-character that you did?",
        image: mdimage,
        a: "PROVISA is dedicated to meeting the needs of students seeking to study abroad, with a team of enthusiastic and dedicated human resources and excellent services. It has all set a record by recruiting a large number of Nepalese students to study abroad in just ten years. We believe we have added a brick to the nation’s strength by helping to realize so many dreams. ",
        a2: "To achieve our goal of providing better opportunities for Nepalese students, we are utilizing all available resources both inside and outside the country. When it comes to planning an international study, keep your personal goals in mind as you consider important factors such as course availability, entry requirements, projected outcomes, costs, course duration, academic content, and employment options during the program. ",
        a3: "You will gain skills and qualifications that will benefit your future professional career as well as other intangible assets such as cultural experience, new contacts, sporting pursuits, travel and sightseeing, and much more as a result of studying abroad.",
      },
    ],
  },
];

import type { SVGProps } from "react";

function IconThink(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M431.654 39.256q-11.909 0-23.123 3.236q-11.097 3.238-21.966 9.828v21.735q11.215-7.747 21.504-11.793q10.405-4.046 19.54-4.045q12.486 0 20 6.357q7.631 6.36 7.63 16.65q0 5.664-3.006 11.098q-2.89 5.434-9.48 11.56l-10.404 10.292q-10.406 9.942-13.643 17.457t-3.236 19.192v17.805h22.08v-14.22q0-6.015.346-9.48q.349-3.47 1.04-5.896q.926-2.888 3.123-5.895q2.31-3.121 7.745-8.557l10.174-9.943q10.403-9.943 14.567-17.803q4.162-7.978 4.162-16.766q-.001-18.382-12.95-29.595q-12.834-11.214-34.106-11.214zm-253.76 6.365C97.293 45.62 30 127.903 30 231.77c0 47.6 14.142 90.66 37.213 123.353c5.01-2.917 10.87-4.5 17.02-4.005c9.196.74 18.27 5.864 26.245 14.832c18.47 20.77 35.302 33.96 59.48 49.117c62.787-35.66 93.123-76.714 139.263-117.365c2.854-2.516 5.8-4.558 8.777-6.177c5.04-18.706 7.783-38.79 7.783-59.755c0-103.866-67.292-186.147-147.89-186.147zM97.01 146.063c15.177.09 30.255 8.09 43.607 23.764l-13.7 11.674c-11.907-13.977-21.85-18.017-31.802-17.385c-9.952.633-21.423 6.88-33.7 18.172L49.228 169.04c13.87-12.76 28.547-21.86 44.743-22.89a44 44 0 0 1 3.037-.088zm151.96 0a44 44 0 0 1 3.036.088c16.196 1.03 30.874 10.13 44.744 22.89l-12.186 13.247c-12.278-11.293-23.748-17.54-33.7-18.172s-19.896 3.408-31.802 17.385l-13.7-11.674c13.352-15.674 28.43-23.673 43.607-23.763zm165.803 39.56v29.366h23.47v-29.365zm-315.326 7.874c12.646 0 24.26 3.752 33.117 10.36c8.857 6.61 15.106 16.57 15.106 27.912s-6.25 21.302-15.106 27.912s-20.47 10.36-33.117 10.36s-24.26-3.75-33.117-10.36s-15.105-16.57-15.105-27.912s6.25-21.3 15.105-27.91c8.857-6.61 20.47-10.362 33.117-10.362m156.89 0c12.647 0 24.262 3.752 33.118 10.36c8.857 6.61 15.106 16.57 15.106 27.912s-6.248 21.302-15.105 27.912s-20.47 10.36-33.117 10.36s-24.26-3.75-33.117-10.36s-15.105-16.57-15.105-27.912s6.25-21.3 15.106-27.91s20.472-10.362 33.118-10.362zm-160.064 18.12c-7.707.567-14.474 3.155-19.177 6.665c-5.34 3.986-7.87 8.663-7.87 13.488s2.53 9.5 7.87 13.486c5.34 3.985 13.335 6.785 22.35 6.785c9.017 0 17.013-2.8 22.353-6.786c5.338-3.985 7.87-8.662 7.87-13.486c0-.09-.006-.177-.008-.266a19.61 19.515 0 0 1-15.506 7.584a19.61 19.515 0 0 1-19.61-19.516a19.61 19.515 0 0 1 1.727-7.955zm156.688.013c-7.623.596-14.31 3.172-18.974 6.65c-5.34 3.986-7.87 8.663-7.87 13.488s2.53 9.5 7.87 13.486c5.34 3.985 13.336 6.785 22.352 6.785s17.012-2.8 22.35-6.786c5.34-3.985 7.873-8.662 7.873-13.486c0-.23-.01-.46-.02-.688a19.61 19.515 0 0 1-15.493 7.566a19.61 19.515 0 0 1-19.61-19.515a19.61 19.515 0 0 1 1.524-7.5zm83.263 92.337a11 11 0 0 0-1.32.012c-3.626.24-8.098 2.217-13.782 7.225c-41.548 36.606-72.158 76.506-129.536 112.022l-39.91 26.484l-9.953-14.997l12.454-8.264c-22.1-14.347-39.177-28.335-57.145-48.542c-5.797-6.518-10.678-8.563-14.24-8.85c-3.56-.286-6.562.945-9.528 3.948c-5.88 5.95-9.498 19.257-4.2 32.29c12.462 22.93 36.147 44.15 54.038 71.204l1.953 2.95l-.582 3.49a521 521 0 0 0-1.74 11.06h211.452c.103-1.217.18-2.456.193-3.746c-.11-4.19-3.22-10.067-8.258-14.563c-5.066-4.518-11.74-7.125-15.402-7.032l-12.436.317l3.587-11.91c1.944-6.454.005-14.632-4.613-18.827c-4.62-4.195-12.2-6.694-27.313.99L259.2 425.156c28.086-30.964 65.366-68.32 87.653-102.594c3.04-4.676 1.373-11.558-3.237-15.41c-2.017-1.685-4.398-3.036-7.39-3.185zm-122.707 36.64l7.197 16.498c-28.058 12.24-57.48 12.936-85.8-.072l7.513-16.355c23.976 11.013 46.85 10.504 71.09-.07z"
      ></path>
    </svg>
  );
}

function IconMission(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g fill="none">
        <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
        <path
          fill="currentColor"
          d="M12 2c.375 0 .745.02 1.11.061a1 1 0 0 1-.22 1.988a8 8 0 1 0 7.061 7.061a1 1 0 1 1 1.988-.22c.04.365.061.735.061 1.11c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m-.032 5.877a1 1 0 0 1-.719 1.217A3.002 3.002 0 0 0 12 15a3.002 3.002 0 0 0 2.906-2.25a1 1 0 0 1 1.936.5A5.002 5.002 0 0 1 7 12a5.002 5.002 0 0 1 3.75-4.842a1 1 0 0 1 1.218.719m6.536-5.75a1 1 0 0 1 .617.923v1.83h1.829a1 1 0 0 1 .707 1.707L18.12 10.12a1 1 0 0 1-.707.293H15l-1.828 1.829a1 1 0 0 1-1.415-1.415L13.586 9V6.586a1 1 0 0 1 .293-.707l3.535-3.536a1 1 0 0 1 1.09-.217m-1.383 3.337L15.586 7v1.414H17l1.536-1.535h-.415a1 1 0 0 1-1-1z"
        ></path>
      </g>
    </svg>
  );
}

function IconVision(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        color="currentColor"
      >
        <path d="M2.5 8.187c.104-2.1.415-3.41 1.347-4.34c.93-.932 2.24-1.243 4.34-1.347M21.5 8.187c-.104-2.1-.415-3.41-1.347-4.34c-.93-.932-2.24-1.243-4.34-1.347m0 19c2.1-.104 3.41-.415 4.34-1.347c.932-.93 1.243-2.24 1.347-4.34M8.187 21.5c-2.1-.104-3.41-.415-4.34-1.347c-.932-.93-1.243-2.24-1.347-4.34m17.135-4.495c.243.304.365.457.365.682s-.122.378-.365.682C18.542 14.05 15.751 17 12 17s-6.542-2.95-7.635-4.318C4.122 12.378 4 12.225 4 12s.122-.378.365-.682C5.458 9.95 8.249 7 12 7s6.542 2.95 7.635 4.318"></path>
        <path d="M14 12a2 2 0 1 0-4 0a2 2 0 0 0 4 0"></path>
      </g>
    </svg>
  );
}
