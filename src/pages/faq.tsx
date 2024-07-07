

import React from "react";
import { useRef, useState } from "react";
import SectionHeader from "../components/website/section-header";
import { IconFAQ } from "../components/svg-icons/IconFAQ";
import { supabase } from "../supabaseclient";

export default function FAQ() {
  const [faqs, setFaqs] = React.useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  React.useEffect(() => {
    const fetch = async () => {
      let { data, error } = await supabase.from("FAQ").select("*").order("created_at", { ascending: false });
      if (error) {
        console.log(error.message);
        setIsFetching(false);
      }

      if (data) {
        setFaqs(data || []);
        setIsFetching(false);
      }
    };
    fetch();
  }, []);

  return (
    <section className="w-full md:w-8/12 mx-auto space-y-20 px-4 md:px-0">
      <SectionHeader
        title="Faqs"
        heading="Frequently Asked Questions"
        description="Answered all frequently asked questions, Still confused? feel free to contact us."
      />

      {faqs.length >= 1 && (
        <div className="">
          {faqs.map((item, idx) => (
            <FaqsCard
              key={idx}
              idx={idx}
              faqsList={item}
            />
          ))}
        </div>
      )}

      {isFetching ||
        (faqs.length === 0 && (
          <div className=" space-y-8">
            <div className=" h-16 bg-gray-300/50 animate-pulse "></div>
            <div className=" h-16 bg-gray-300/50 animate-pulse "></div>
            <div className=" h-16 bg-gray-300/50 animate-pulse "></div>
            <div className=" h-16 bg-gray-300/50 animate-pulse "></div>
            <div className=" h-16 bg-gray-300/50 animate-pulse "></div>
            <div className=" h-16 bg-gray-300/50 animate-pulse "></div>
            <div className=" h-16 bg-gray-300/50 animate-pulse "></div>
          </div>
        ))}
    </section>
  );
}

const FaqsCard = (props: any) => {
  const answerElRef = useRef<any>();
  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");
  const { faqsList, idx } = props;

  const handleOpenAnswer = () => {
    const answerElH = answerElRef.current.childNodes[0].offsetHeight;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}>
      <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-800/90 font-medium">
        <div className=" flex items-center gap-2">
          <IconFAQ className=" h-6 w-6 text-primary-600" />
          <span className={`${state ? "text-primary-600" : ""}`}>{faqsList.q}</span>
        </div>
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary-600 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-primary-600 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}>
        <div>
          <p className="text-gray-500">{faqsList.a}</p>
        </div>
      </div>
    </div>
  );
};
