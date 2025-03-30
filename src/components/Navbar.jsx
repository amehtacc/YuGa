import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <div className="absolute w-[1320px] h-[60px] bg-white flex justify-center items-center top-12 rounded-[111px] px-10 py-3 gap-44">
      <div>
        <h1 className="text-[28px] font-normal text-center text-[rgba(51,63,71,1)]">
          YuGa
        </h1>
      </div>
      <div className="flex justify-center items-center gap-10">
        <a className="font-medium text-base text-[rgba(51,63,71,1)]" href="#">
          Features
        </a>
        <a className="font-medium text-base text-[rgba(51,63,71,1)]" href="#">
          Solutions
        </a>
        <a className="font-medium text-base text-[rgba(51,63,71,1)]" href="#">
          About
        </a>
        <a className="font-medium text-base text-[rgba(51,63,71,1)]" href="#">
          Pricing
        </a>
      </div>
      <div className="flex justify-center items-center gap-6">
        <Button className="w-28 h-9 text-white text-sm font-semibold bg-[rgba(35,35,35,1)] border-[1px] border-[rgba(223,227,232,1)]" text='Talk To Sales'/>
        <Button className="w-[162px] h-9 text-[rgba(51,63,71,1)] text-sm font-semibold border-[1px] border-[rgba(51,63,71,1)]" text='Get Started For Free' />
      </div>
    </div>
  );
}

export default Navbar;
