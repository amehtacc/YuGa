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
              <a className="text-sm font-normal" href="#">About us</a>
              <a className="text-sm font-normal" href="#">Features</a>
              <a className="text-sm font-normal" href="#">Blogs</a>
              <a className="text-sm font-normal" href="#">Reviews</a>
              <a className="text-sm font-normal" href="#">Pricing</a>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-7">Support</h4>
            <div className='flex flex-col gap-5'>
              <a className="text-sm font-normal" href="#">Integrations</a>
              <a className="text-sm font-normal" href="#">Careers</a>
              <a className="text-sm font-normal" href="#">Contact us</a>
              <a className="text-sm font-normal" href="#">FAQ’s</a>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-7">Developers</h4>
            <div className='flex flex-col gap-5'>
              <a className="text-sm font-normal" href="#">Changelog</a>
              <a className="text-sm font-normal" href="#">Cookie Policy</a>
              <a className="text-sm font-normal" href="#">Coming Soon</a>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-7">Products</h4>
            <div className='flex flex-col gap-5'>
              <a className="text-sm font-normal" href="#">Privacy Policy</a>
              <a className="text-sm font-normal" href="#">Licensing</a>
              <a className="text-sm font-normal" href="#">Terms & Conditions</a>
              <a className="text-sm font-normal" href="#">Password</a>
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
