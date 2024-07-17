import { Calendar } from "lucide-react";
import moment from "moment";
import { useEffect, useState } from "react";
import SectionHeader from "../components/website/section-header";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseclient";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Blogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase
        .from("Blog")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        console.log(error.message);
        setIsFetching(false);
      }

      if (data) {
        setBlogs(data || []);
        setIsFetching(false);
      }
    };
    fetch();
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);
  return (
    <section
      className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0"
      data-aos="zoom-out"
    >
      <SectionHeader
        title="Blogs"
        heading=" Our Latest Blogs"
        description=" We frequently provide the latest updates and insights in the education and visa consultancy sector, ensuring you stay informed about recent developments and trends."
      />

      {blogs.length >= 1 && (
        <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {blogs?.map((items, key) => (
            <article
              className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm hover:border-primary-200"
              key={key}
              data-aos="zoom-in"
            >
              <Link to={"/blogs/" + items.slug} className="  ">
                <img
                  src={items.thumbnail}
                  loading="lazy"
                  alt={items.heading}
                  height={500}
                  width={500}
                  className="w-full h-48 rounded-t-md object-cover"
                />
                <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                  <div className=" flex items-center gap-1 text-gray-400">
                    <Calendar size={16} />
                    <span className="block  text-sm">
                      {moment(items.created_at).format("MMM Do YY")}
                    </span>
                  </div>
                </div>
                <div className="pt-3 ml-4 mr-2 mb-3">
                  <h3 className="text-xl text-gray-800/90">{items.heading}</h3>
                  <p className="text-gray-400 text-sm mt-1 tracking-wide leading-relaxed">
                    {items.shortDesc.slice(0, 200)}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}

      {isFetching ||
        (blogs.length === 0 && (
          <div className="mt-12 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            <div className=" bg-gray-300/50 animate-pulse h-80 rounded-md "></div>
            <div className=" bg-gray-300/50 animate-pulse h-80 rounded-md "></div>
            <div className=" bg-gray-300/50 animate-pulse h-80 rounded-md "></div>
            <div className=" bg-gray-300/50 animate-pulse h-80 rounded-md "></div>
            <div className=" bg-gray-300/50 animate-pulse h-80 rounded-md "></div>
            <div className=" bg-gray-300/50 animate-pulse h-80 rounded-md "></div>
            <div className=" bg-gray-300/50 animate-pulse h-80 rounded-md "></div>
            <div className=" bg-gray-300/50 animate-pulse h-80 rounded-md "></div>
            <div className=" bg-gray-300/50 animate-pulse h-80 rounded-md "></div>
          </div>
        ))}
    </section>
  );
}
