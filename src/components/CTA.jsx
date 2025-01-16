import React from "react";

const CTA = () => {
  return (
    <div className="justify-center items-center md:items-center justify-between text-white gap-[80px] pb-6 md:pb-16 py-12 py-6">
      <div className="flex justify-center items-center sm:my-16 my-6 sm:px-16 px-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow]">
        <div className="flex-1 flex flex-col">
          <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
            Let’s try our service now!
          </h2>
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
          <button className="bg-gradient-to-br from-[#62d3f5] to-[#33a1d8] py-4 px-8 rounded-lg text-white font-bold mt-5">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
