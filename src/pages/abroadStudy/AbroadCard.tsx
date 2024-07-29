import React, { useEffect } from "react";

interface Qualification {
  topic: string;
  lines: string[];
}

interface AbroadCardProps {
  topic?: string;
  imgsrc?: string;
  bannerimg?: string;
  description?: string;
  eduSystem?: string[];
  descLists?: string[];
  livingCost?: string[];
  qualifications?: Qualification[];
  ug?: string;
  pg?: string;
}

const AbroadCard: React.FC<AbroadCardProps> = ({
  topic = "",
  imgsrc = "",
  bannerimg = "",
  description = "",
  eduSystem = [],
  descLists = [],
  livingCost = [],
  qualifications = [],
  ug = "",
  pg = "",
}) => {
  useEffect(() => {
    // Initialize AOS or any other side effect
  }, []);

  return (
    <div className=" text">
      <div className="flex flex-col lg:flex-row lg:justify-center gap-6 lg:gap-12 pt-[3rem]">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto lg:mx-0 ">
          {bannerimg && (
            <div className="relative w-full h-[30rem]">
              <img
                src={bannerimg}
                alt="Banner Image"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          )}
          <div className=" mt-3">
            {topic && (
              <p className="text-[#2d1d54] text-xl font-bold mt-2">{topic}</p>
            )}
            {descLists.length > 0 && (
              <ul className="list-disc list-inside pl-5 py-3">
                {descLists.map((data, index) => (
                  <li key={index} className="mb-2">
                    {data}
                  </li>
                ))}
              </ul>
            )}
            {description && <p>{description}</p>}
            {eduSystem.length > 0 && (
              <div className="py-3">
                <p className="text-[#2d1d54] text-lg font-semibold mt-2">
                  Education System
                </p>
                {eduSystem.map((data, index) => (
                  <p key={index} className="mb-2">
                    {data}
                  </p>
                ))}
              </div>
            )}

            {ug && (
              <div>
                <p className="text-lg text-[#2d1d54] font-semibold">
                  Undergraduate Degree
                </p>
                <p>{ug}</p>
              </div>
            )}

            {pg && (
              <div className="my-3">
                <p className="text-lg text-[#2d1d54] font-semibold">
                  PostGraduate Degree
                </p>
                <p>{pg}</p>
              </div>
            )}

            {qualifications.length > 0 && (
              <div className="mt-8">
                <p className="text-[#2d1d54] text-lg font-semibold my-2">
                  Qualification & Requirement to Study in Australia for Nepali
                  Students
                </p>
                {qualifications.map((qualification, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="font-bold">{qualification.topic}</h3>
                    <ul>
                      {qualification.lines.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {livingCost.length > 0 && (
              <div className="py-3">
                <p className="text-[#2d1d54] text-lg font-semibold mt-2">
                  Cost of Living
                </p>
                {livingCost.map((data, index) => (
                  <p key={index} className="mb-2">
                    {data}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbroadCard;
