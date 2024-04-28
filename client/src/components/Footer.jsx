import React from "react";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#35363A] flex sm:flex-col">
      <div className="flex flex-col gap-4 items-center w-1/2  sm:w-full">
        <div className="flex justify-center items-center">
          <img className="w-[12.5%]" src="/logo.png" alt="" />
          <p className="text-2xl">EasyMeasure</p>
        </div>
        <p className="w-[80%]">
        Experience seamless, precise measurements using our innovative computer vision technology. Our platform eliminates the need for physical measuring tools, delivering real-time accuracy. Perfect for individuals and professionals, simplifying measurement for all.
        </p>
      </div>
      <div className="flex flex-col items-center justify-between w-1/2 p-8 gap-4 sm:w-full">
        <h1 className="text-2xl font-extrabold">Contact Information</h1>
        <div className="flex items-center gap-2 text-lg">
          <AiOutlinePhone />
          <span>+91 12345 67890</span>
        </div>
        <div className="flex items-center gap-2 text-lg">
          <AiOutlineMail />
          <span>EasyMeasure@gmail.com</span>
        </div>
        <div className="flex  text-5xl gap-4">
          <a
            className="hover:text-[#0077b5]"
            href="https://in.linkedin.com/"
            target="_blank"
          >
            <AiOutlineLinkedin />
          </a>
          <a
            className="hover:text-[#c91d21]"
            href="https://www.youtube.com/"
            target="_blank"
          >
            <AiOutlineYoutube />
          </a>
          <a
            className="hover:text-[black]"
            href="https://github.com/"
            target="_blank"
          >
            <AiOutlineGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
