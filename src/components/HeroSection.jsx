import React from "react";
import { hero_section_bg_image } from "../assets/images";
import Navbar from "./Navbar";
import Button from "./Button";

function HeroSection() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <img className="w-full h-screen" src={hero_section_bg_image} alt="" />
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="w-full h-[1550px] flex flex-col justify-center items-center">
        <div className="absolute w-[1234px] h-[338px] top-[205px] text-white flex flex-col justify-center items-center gap-6">
          <h3 className="font-medium text-[80px] text-center leading-24">
            The World's First Yogasana Championship Software
          </h3>
          <p className="w-[770px] font-medium text-xl leading-8 text-center text-[rgba(245,246,248,1)]">
            Experience the future of competition management with Yogasana
            Bharat—a cutting-edge platform designed to streamline every aspect
            of your championship.
          </p>
          <Button
            className="w-[191px] h-[50px] bg-white px-5 py-4 text-[rgba(51,63,71,1)] text-lg font-semibold flex justify-center items-center"
            text="Get start for free"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
