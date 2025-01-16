import React from "react";
import { quotes, people01, people02, people03 } from "../assets";

const Feedback = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-center text-white gap-[20px] py-12 py-6">
      <div className="flex flex-col justify-center items-start py-[48px] px-[40px] hover:bg-neutral-900 rounded-xl">
        <img
          src={quotes}
          alt="quotes"
          className="w-[42.6px] h-[27.6px] object-contain"
        />
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          Money is only a tool. It will take you wherever you wish, but it will
          not replace you as the driver.
        </p>
        <div className="flex flex-row ">
          <img
            src={people01}
            alt="People1"
            className="w-[48px] h-[48px] rounded-full"
          />
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              Herman Jensen
            </h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-600">
              Founder & Leader
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start py-[48px] px-[40px] hover:bg-neutral-900 rounded-xl">
        <img
          src={quotes}
          alt="quotes"
          className="w-[42.6px] h-[27.6px] object-contain"
        />
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          Money makes your life easier. If you're lucky to have it, you're
          lucky.{" "}
        </p>
        <div className="flex flex-row ">
          <img
            src={people02}
            alt="People1"
            className="w-[48px] h-[48px] rounded-full"
          />
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              Steve Mark
            </h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-600">
              Founder & Leader
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-start py-[48px] px-[40px] hover:bg-neutral-900 rounded-xl">
        <img
          src={quotes}
          alt="quotes"
          className="w-[42.6px] h-[27.6px] object-contain"
        />
        <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
          It is usually people in the money business, finance, and international
          trade that are really rich.
        </p>
        <div className="flex flex-row ">
          <img
            src={people03}
            alt="People3"
            className="w-[48px] h-[48px] rounded-full"
          />
          <div className="flex flex-col ml-4">
            <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
              Kenn Gallagher
            </h4>
            <p className="font-poppins font-normal text-[16px] leading-[24px] text-neutral-600">
              Founder & Leader
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
