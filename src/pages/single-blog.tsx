import { useState, useEffect } from "react";
import parse from "html-react-parser";
import { Calendar } from "lucide-react";
import moment from "moment";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseclient";

export default function SingleBlog() {
  const params = useParams();
  const [blog, setBlog] = useState<any>({});
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("Blog").select("*").eq("slug", params.slug).single();
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

  return (
    <div className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0">
      <div className=" space-y-4">
        {blog && (
          <img
            src={blog.thumbnail}
            alt={blog.heading}
            width={700}
            height={700}
            className=" h-[40vh] md:h-[70vh] w-full object-cover rounded-md shadow-lg"
          />
        )}

        <div className=" flex items-center gap-1 text-gray-400">
          <Calendar size={16} />
          <span className="block  text-sm">{moment(blog.created_at).format("MMM Do YY")}</span>
        </div>

        <p className=" text-gray-600 tracking-wide leading-loose text-justify">{parse(blog.longDesc || "")}</p>
      </div>
    </div>
  );
}
