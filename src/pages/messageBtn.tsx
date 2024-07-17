// src/components/FloatingActionButton.tsx

import React, { useState } from "react";
import { FaFacebookMessenger, FaWhatsapp, FaPlus } from "react-icons/fa";

export default function MessageBtn() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-[7rem] right-8 flex flex-col items-center z-[99999]">
      <div
        className={`flex flex-col items-center transition-all duration-300 ${
          isOpen ? "mb-7" : "mb-0"
        }`}
      >
        {isOpen && (
          <>
            <a
              href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F397986083654488%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 transform transition-transform duration-300"
            >
              <div className="bg-blue-500 text-white p-3 rounded-full shadow-lg transform hover:scale-110 z-[99999]">
                <FaFacebookMessenger size={20} />
              </div>
            </a>
            <a
              href="https://api.whatsapp.com/send/?phone=9779851101782"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-3 transform transition-transform duration-300"
            >
              <div className="bg-green-500 text-white p-3 rounded-full shadow-lg transform hover:scale-110 z-[99999]">
                <FaWhatsapp size={20} />
              </div>
            </a>
          </>
        )}
      </div>
      <div
        className={`cursor-pointer bg-[#1c2c51] text-white p-4 rounded-full shadow-lg transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        } z-[99999]`}
        onClick={handleToggle}
      >
        <FaPlus size={20} />
      </div>
    </div>
  );
}
