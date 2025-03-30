import React from "react";
import { facebook, instagram, x_twitter, youtube } from "../assets/images";

function Footer() {
  return (
    <div className="w-full h-[496px] bg-[rgba(15,84,251,1)] flex flex-col justify-between">
      <div className="flex px-16 pt-16">
        <div className="w-[30%]">
          <h1 className="text-[28px] font-normal text-white">YuGa</h1>
          <div className="flex gap-2 mt-7">
            <img
              className="w-[38px] h-[38px]"
              src={x_twitter}
              alt="x_twitter"
            />
            <img className="w-[38px] h-[38px]" src={facebook} alt="facebook" />
            <img className="w-[38px] h-[38px]" src={youtube} alt="youtube" />
            <img
              className="w-[38px] h-[38px]"
              src={instagram}
              alt="instagram"
            />
          </div>
        </div>
        <div className="w-[70%] text-white flex justify-end gap-20">
          <div>
            <h4 className="text-base font-semibold mb-7">Shopify</h4>
            <div className='flex flex-col gap-5'>
              <p className="text-sm font-normal ">About us</p>
              <p className="text-sm font-normal ">Features</p>
              <p className="text-sm font-normal ">Blogs</p>
              <p className="text-sm font-normal ">Reviews</p>
              <p className="text-sm font-normal ">Pricing</p>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-7">Support</h4>
            <div className='flex flex-col gap-5'>
              <p className="text-sm font-normal ">Integrations</p>
              <p className="text-sm font-normal ">Careers</p>
              <p className="text-sm font-normal ">Contact us</p>
              <p className="text-sm font-normal ">FAQ’s</p>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-7">Developers</h4>
            <div className='flex flex-col gap-5'>
              <p className="text-sm font-normal ">Changelog</p>
              <p className="text-sm font-normal ">Cookie Policy</p>
              <p className="text-sm font-normal ">Coming Soon</p>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-7">Products</h4>
            <div className='flex flex-col gap-5'>
              <p className="text-sm font-normal ">Privacy Policy</p>
              <p className="text-sm font-normal ">Licensing</p>
              <p className="text-sm font-normal ">Terms & Conditions</p>
              <p className="text-sm font-normal ">Password</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 text-white flex justify-between items-center border-t border-t-[rgba(255,255,255,0.2)]">
        <p className="font-normal text-sm absolute left-16">
          Copyright © 2025 Yogasana Bharat. All rights reserved.
        </p>
        <p className="font-bold text-base absolute right-16">
          Designed by Aman. Powered by Yogasana Bharat.
        </p>
      </div>
    </div>
  );
}

export default Footer;
