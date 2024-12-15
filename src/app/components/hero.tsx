"use client";

import React from "react";
import Particles from "@/components/ui/particles";

const Hero: React.FC = () => {
  return (
    <section className=" w-full bg-[url('/hero-color.png')] bg-cover bg-center  bg-[#121213] flex items-center  justify-center">
      <div className="container absolute top-10  mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left max-w-[400px]">
          <h1 className="text-4xl  md:text-5xl tracking-wide font md:leading-[59px] font-extrabold text-white ">
            Build Your Awesome Platform
          </h1>

          <p className="mt-6 text-[14px] font-mono	 leading-[26px] py-2 text-gray-300">
            Enver studio is a digital studio that offers several services such
            as UI/UX Design to developers. We will provide the best service for
            those of you who use our services.
          </p>
          <div className="mt-8">
            <button className="bg-[#5454D4] hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-sm shadow-lg shadow-cyan-500/50">
              Our Services
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-8 md:mt-0">
          <div className=" hidden md:flex absolute top-40 right-36 rotate-[23deg] rounded-2xl w-[300px] h-[300px] border-2 border-neutral-50"> </div>
          <img
            src="/hero-imgs1.png" // Make sure this image is in the public folder
            alt="Platform illustration"
            className="w-full max-w-md md:max-w-lg z-10"
          />
         
        </div>
      </div>
    </section>
  );
};

export default Hero;
