import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="flex justify-center text-white items-start md:flex-row flex-col mb-8 w-full pb-6 md:pb-16 py-12 py-6">
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className="font-poppins font-normal text-neutral-500 text-[18px] leading-[30.8px] mt-4 max-w-[312px]">
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Useful Links
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              Content
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              How it Works
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              Create
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              Explore
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              Terms & Services
            </li>
          </ul>
        </div>
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Community
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              Help Center
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              Partners
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              Suggestions
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              Blog
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              Newsletters
            </li>
          </ul>
        </div>
        <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
          <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
            Partner
          </h4>
          <ul className="list-none mt-4">
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              Our Partner
            </li>
            <li className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-500 hover:text-secondary cursor-pointer mb-4">
              Become a Partner
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
