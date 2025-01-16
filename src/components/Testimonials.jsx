import React from "react";

const Testimonials = () => {
  return (
    <div
      id="clients"
      className="flex flex-col md:flex-row justify-center items-center md:items-center justify-between text-white gap-[80px] pb-6 md:pb-16 py-12 py-6"
    >
      <div className="mx-auto flex-col md:flex-row flex justify-between items-center md:items-center mt-0 md:mt-10 relative gap-[72px]">
        <h1 className="font-semibold text-[40px] md:text-[48px] ">
          What People are <br />
          saying about us
        </h1>
        <p className="font-normal text-[18px] max-w-[380px] text-neutral-600">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Testimonials;
