import { useState, useEffect } from "react";
import parse from "html-react-parser";
import { Calendar } from "lucide-react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseclient";
import AOS from "aos";
import "aos/dist/aos.css";
export default function SingleStudyAbroad() {
  const params = useParams();
  const [blog, setBlog] = useState<any>({});
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase
        .from("StudyAbroad")
        .select("*")
        .eq("slug", params.slug)
        .single();
      if (error) {
        console.log(error.message);
        setIsFetching(false);
      }

      if (data) {
        setBlog(data || []);
        setIsFetching(false);
      }
    };
    fetch();
  }, [params.slug]);
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options
  }, []);
  return (
    <div
      className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0"
      data-aos="zoom-in"
    >
      <div className=" space-y-4">
        {blog && (
          <img
            src={blog.thumbnail}
            alt={blog.heading}
            width={700}
            height={700}
            className=" h-[30vh] md:h-[70vh] w-full object-cover rounded-md shadow-lg"
          />
        )}

        <div className=" flex items-center gap-1 text-gray-400">
          <Calendar size={16} />
          <span className="block  text-sm">
            {moment(blog.created_at).format("MMM Do YY")}
          </span>
        </div>
        <p className=" text-gray-800/95 text-3xl font-semibold sm:text-4xl tracking-wide leading-loose">
          {blog.heading}
        </p>

        <p className=" text-gray-600 tracking-wide leading-loose text-justify">
          {parse(blog.longDesc || "")}
        </p>
      </div>
    </div>
  );
}
