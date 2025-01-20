import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] pb-10 md:mb-5 " id="contact">
      <div className="flex flex-col items-center  ">
        <h1 className="heading lg:max-w-[45vw]">
          I am excited about the opportunity to contribute to{" "}
          <span className="text-purple">your</span> team&apos;s success
        </h1>
        <p className="text-white-200 md:mt-10 my-5">
          Reach out to me today, and let&apos;s discuss how my qualifications
          align with your needs.
        </p>
        <a href="mailto:jeremyangpinen@hotmail.com">
          <MagicButton
            title="Let's Get In Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-5 ">
        <p className="md:text-base text-sm md:font-normal font-light">
          CopyRight &copy; 2025 Jeremy Ang
        </p>
        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
