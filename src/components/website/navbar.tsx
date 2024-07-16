import { useEffect, useState } from "react";
import { Button } from "../ui/button";

import { IconTestPreparation } from "../svg-icons/IconTestPreparation";
import { IconGlobe } from "../svg-icons/IconGlobe";
import logo from "../../../public/logo/logo.png";
import { Calendar, HammerIcon, Menu, X } from "lucide-react";
import { IconService } from "../svg-icons/IconService";
// import { usePathname } from "next/navigation";
import { createClient } from "@supabase/supabase-js";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const supabase = createClient(
    "https://bwlxylhhnhcpevyeseyr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3bHh5bGhobmhjcGV2eWVzZXlyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxODMwMzQ1MCwiZXhwIjoyMDMzODc5NDUwfQ.yo-7kqJ4UkDr9NkVD2uJyl0i0G_eYSZKSyaQUWhcYyU"
  );

  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState({
    isActive: false,
    idx: null,
  });

  const [studyAbroads, setStudyAbroads] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [testPreparations, setTestPreparations] = useState<any[]>([]);
  const [isFetching2, setIsFetching2] = useState(false);

  const [services, setServices] = useState<any[]>([]);
  const [isFetching3, setIsFetching3] = useState(false);
  useEffect(() => {
    const fetch1 = async () => {
      let { data, error } = await supabase
        .from("StudyAbroad")
        .select(
          `
        id,
        heading,
        thumbnail,
        shortDesc,
        slug
        `
        )
        .order("created_at", { ascending: false });
      if (error) {
        console.log(error.message);
        setIsFetching(false);
      }

      if (data) {
        setStudyAbroads(data || []);
        setIsFetching(false);
      }
    };

    const fetch2 = async () => {
      let { data, error } = await supabase
        .from("TestPreparation")
        .select(
          `
         id,
        heading,
        thumbnail,
        shortDesc,
        slug
        `
        )
        .order("created_at", { ascending: false });
      if (error) {
        console.log(error.message);
        setIsFetching2(false);
      }

      if (data) {
        setTestPreparations(data || []);
        setIsFetching2(false);
      }
    };

    const fetch3 = async () => {
      let { data, error } = await supabase
        .from("Service")
        .select(
          `
         id,
        heading,
        thumbnail,
        shortDesc,
        slug
        `
        )
        .order("created_at", { ascending: false });
      if (error) {
        console.log(error.message);
        setIsFetching3(false);
      }

      if (data) {
        setServices(data || []);
        setIsFetching3(false);
      }
    };

    fetch1();
    fetch2();
    fetch3();
  }, []);

  const navigation = [
    {
      id: 0,
      title: "Abroad Study",
      path: "/",
      isDrapdown: true,
      navs: studyAbroads,
    },
    {
      id: 1,
      title: "Test Preparation",
      path: "/",
      isDrapdown: true,
      navs: testPreparations,
    },
    { id: 1, title: "Services", path: "/", isDrapdown: true, navs: services },
    // { id: 1, title: "Company", path: "/", isDrapdown: true, navs: company },
    { id: 2, title: "Blogs", path: "/blogs", isDrapdown: false },
    { id: 4, title: "About", path: "/about", isDrapdown: false },
    { id: 5, title: "Contact", path: "/contact", isDrapdown: false },
    { id: 5, title: "Team", path: "/team", isDrapdown: false },
    { id: 5, title: "FAQ", path: "/faq", isDrapdown: false },
    { id: 5, title: "Universities", path: "/universities", isDrapdown: false },
  ];

  useEffect(() => {
    document.onclick = (e) => {
      const target: any = e.target;
      if (!target.closest(".nav-menu"))
        setDrapdownState({ isActive: false, idx: null });
    };
  }, []);

  // const pathname = usePathname();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <nav
        id="google_translate_element"
        className={`relative z-20 bg-white w-full md:static md:text-base md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 md:px-0 max-w-screen-xl mx-auto md:flex  ">
          <div className="flex items-center justify-between py-3 md:py-5 md:block ">
            <Link to="/">
              <img src={logo} width={180} height={180} alt="logo" />
            </Link>
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-900"
                onClick={() => setState(!state)}
              >
                {state ? <X /> : <Menu />}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            } `}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0 ">
              {navigation.map((item, idx: any) => {
                return (
                  <li key={idx}>
                    {item.isDrapdown ? (
                      <button
                        type="button"
                        className="w-full flex items-center justify-between gap-1 text-[ #333] hover:text-primary-600 duration-300 "
                        onClick={() =>
                          setDrapdownState({
                            idx,
                            isActive: !drapdownState.isActive,
                          })
                        }
                      >
                        {item.title}
                        {drapdownState.idx == idx && drapdownState.isActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`${
                          pathname === item.path
                            ? "text-primary-600"
                            : "text-[ #333];"
                        } hover:text-primary-600 duration-300`}
                      >
                        {item.title}
                      </Link>
                    )}
                    {item.isDrapdown &&
                    drapdownState.idx == idx &&
                    drapdownState.isActive ? (
                      <div className="mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0 bg-secondary-950  ">
                        <ul className="max-w-screen-xl mx-auto grid items-center gap-6 md:p-8 md:grid-cols-2  ">
                          {item.navs &&
                            item.navs.map((el, index) => (
                              <li
                                key={idx}
                                className="group hover:bg-secondary-900/40 p-4 transition-all ease-in-out duration-300 rounded-md "
                              >
                                <Link
                                  to={`${
                                    item.title === "Abroad Study"
                                      ? "/study-abroad"
                                      : item.title === "Test Preparation"
                                      ? "/test-preparations"
                                      : item.title === "Services"
                                      ? "/services"
                                      : ""
                                  }/${el.slug}`}
                                  className="flex gap-3"
                                >
                                  <div className=" hidden md:block">
                                    <div className=" bg-secondary-900 h-10 w-10 p-2 flex items-center justify-center rounded-3xl">
                                      {item.title === "Abroad Study" && (
                                        <IconGlobe className=" h-10 w-10  text-secondary-100" />
                                      )}
                                      {item.title === "Test Preparation" && (
                                        <IconTestPreparation className=" h-8 w-8 text-secondary-100" />
                                      )}
                                      {item.title === "Services" && (
                                        <IconService className=" h-8 w-8 text-secondary-100" />
                                      )}
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-gray-100 text-sm font-medium md:text-base">
                                      {el.heading}
                                    </span>
                                    <p className="text-sm text-gray-300  mt-1">
                                      {el.shortDesc}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <Link to={"/appointment"}>
                  <Button>
                    {" "}
                    <Calendar size={16} className=" mr-1" /> Book an Appointment
                  </Button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setState(false)}
        ></div>
      ) : (
        ""
      )}
    </>
  );
}
