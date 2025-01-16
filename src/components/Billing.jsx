import React from "react";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <div
      id="product"
      className="flex flex-col md:flex-row items-center md:items-center justify-between text-white gap-[64px] py-12 py-6"
    >
      <div className="flex-1 flex justify-center items-start mt-0 md:mt-10 relative">
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
      </div>
      <div className="flex-1 flex justify-center items-start flex-col">
        <h1 className="font-semibold text-[40x] md:text-[48px] text-white xs:leading-[76.8px] leading-[66.8px] w-full ">
          Easily control your
          <br className="sm:block hidden" /> billing & invoicing
        </h1>
        <p className="font-normal text-neutral-500 text-[18px] leading-[30.8px] max-w-[470px] mt-5 ">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple"
            className="rounded-lg hover:border-neutral-800"
          />
          <img src={google} alt="google" />
        </div>
      </div>
    </div>
  );
};

export default Billing;
