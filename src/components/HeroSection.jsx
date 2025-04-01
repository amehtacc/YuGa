import React from "react";
import { hero_section_bg_image, dashboard_image } from "../assets/images";
import Navbar from "./Navbar";
import Button from "./Button";

function HeroSection() {
  return (
    <div className="w-full h-[1550px] flex flex-col">
      <div className="w-full relative">
        <img className="w-full h-[1006px]" src={hero_section_bg_image} alt="" />
        <div className="absolute inset-x-0 bottom-0 h-[650px] bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="flex justify-center">
        <Navbar />
      </div>

      <div className="w-full flex flex-col justify-center items-center">
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
        <div className="w-full absolute top-[619px] flex justify-center">
          <img
            className="w-[1320px] h-[859px] rounded-[30px]"
            src={dashboard_image}
            alt="dashboard_image"
          />
          <div className="absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
