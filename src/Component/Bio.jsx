import React from 'react';
import { FaCode } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { IoIosMail } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { FaLightbulb } from "react-icons/fa";

function Bio() {
  return (
    <div className="text-black w-[800px] mx-auto  border border-gray-200 p-5">

      <div className="flex items-center gap-2 mt-2">
        <FaCode className="w-6 h-6 flex items-center" /> {/* Set to medium size */}
        <span className="items-center">Frontend Developer & UI/UX Designer </span>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <IoIosMail className="w-6 h-6" /> {/* Set to medium size */}
        <span>khushbukhatri245@gmail.com</span> {/* Added email content */}
      </div>

      <div className="flex items-center gap-2 mt-2">
        <SlLocationPin className="w-6 h-6" /> {/* Set to medium size */}
        <span>Chittorgrh, India</span> {/* Added location content */}
      </div>

      <div className="flex items-center gap-2 mt-2">
        <BiWorld className="w-6 h-6" /> {/* Set to medium size */}
        <span>https://khushbukhatri.com</span> {/* Added website content */}
      </div>

      <div className="flex items-center gap-2 mt-2">
        <FaLightbulb className="w-6 h-6" /> {/* Set to medium size */}
        <span>Creative ideas and innovative solutions</span> {/* Added lightbulb content */}
      </div>
     
    </div>
  );
}

export default Bio;

