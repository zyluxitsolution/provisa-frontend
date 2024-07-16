import React, { useEffect } from "react";
import logo from "../../../public/logo/logowhite.png";
import { ChevronRight, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);

  return (
    <footer className="bg-secondary-950 py-20 mt-20">
      <div className="max-w-screen-xl mx-auto px-4 md:px-0">
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 text-secondary-100/90"
          data-aos="fade-up" // Apply AOS animation to the entire grid
          data-aos-once="false"
        >
          <div className="max-w-xs">
            <img
              src={logo}
              alt="logo"
              height={300}
              width={300}
              className="text-secondary-50"
            />
            <p className="leading-relaxed mt-2 text-[15px] tracking-wide">
              Dont just take our word for it, come see us and let us show you
              that youve come to the right place.
            </p>
          </div>

          {footerNavs.map((item, idx) => (
            <ul className="space-y-4" key={idx}>
              <h4 className="text-secondary-50 font-medium text-lg">
                {item.label}
              </h4>
              {item.items.map((el: any, idx: number) => (
                <li
                  key={idx}
                  data-aos="fade-up" // Apply AOS animation to each list item
                >
                  <Link
                    to={el.href || "#"}
                    target={el.target}
                    className="hover:text-primary-600 duration-300 flex items-center gap-1"
                  >
                    {el.preicon} {el.name}{" "}
                    {el.showpostIcon && <ChevronRight size={16} />}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className="text-[12px] tracking-wide flex flex-col lg:flex-row gap-4 items-center lg:gap-1 justify-center text-secondary-100/90 mt-12">
          <div className="flex items-center gap-1">
            <span>© provisanepal</span>
            <span>2024, All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footerNavs = [
  {
    label: "Company",
    items: [
      {
        href: "/about",
        name: "About Us",
        showpostIcon: true,
      },
      {
        href: "/team",
        name: "Our Team",
        showpostIcon: true,
      },
      {
        href: "/contact",
        name: "Contact Us",
        showpostIcon: true,
      },
      {
        href: "/faq",
        name: "FAQs",
        showpostIcon: true,
      },
    ],
  },
  {
    label: "Quick Links",
    items: [
      {
        href: "/universities",
        name: "Universities",
        showpostIcon: true,
      },
      {
        href: "/study-abroad",
        name: "Study Abroad",
        showpostIcon: true,
      },
      {
        href: "/blogs",
        name: "Blogs",
        showpostIcon: true,
      },
      {
        href: "https://www.example.com/path/to/COMPANY_PROFILE.pdf",
        target: "_blank",
        name: "Company Profile",
        showpostIcon: true,
      },
    ],
  },
  {
    label: "Contact Us",
    items: [
      {
        name: "Laxmi Plaza, Putalisadak, Padmodaya Mode, Kathmandu, Nepal",
        showpostIcon: false,
      },
      {
        name: " +9779851101782,01-4531819",
        preicon: <Phone size={18} />,
      },
      {
        name: "admin@provisa.com.np",
        preicon: <Mail size={18} />,
      },
    ],
  },
];
