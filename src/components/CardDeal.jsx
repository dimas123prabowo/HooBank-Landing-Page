import React from "react";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-center justify-betwee text-white gap-[80px] py-12 py-6">
      <div className="flex-col flex justify-center items-start mt-0 md:mt-10 relative">
        <h1 className="font-semibold text-[40px] md:text-[48px] text-white xs:leading-[76.8px] leading-[66.8px] w-full ">
          Find a better card deal
          <br className="sm:block hidden" /> in few easy steps.
        </h1>
        <p className="font-normal text-[18px] text-neutral-500 leading-[30.8px] max-w-[420px] mt-5">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <button className="bg-gradient-to-br from-[#62d3f5] to-[#33a1d8] py-4 px-8 rounded-lg text-white font-bold mt-5">
          Get Started
        </button>
      </div>
      <div className="flex-1 flex justify-center items-start mt-0 md:mt-10 relative">
        <img src={card} alt="card" />
      </div>
    </div>
  );
};

export default CardDeal;
