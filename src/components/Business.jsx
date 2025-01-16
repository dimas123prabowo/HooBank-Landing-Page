import React from "react";
import { star, shield, send } from "../assets";

const Business = () => {
  return (
    <section
      id="features"
      className="flex flex-col md:flex-row items-center md:items-center justify-between text-white gap-[40px] py-12 py-6"
    >
      <div className="flex-1 flex justify-center items-start flex-col gap-[32px]">
        <h1 className="text-[40px] md:text-[48px] font-bold">
          You do the business, we’ll handle the money.
        </h1>
        <p className="text-[18px] text-neutral-500 max-w-[470px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="bg-gradient-to-br from-[#62d3f5] to-[#33a1d8] py-4 px-8 rounded-lg text-white font-bold mt-5">
          Get Started
        </button>
      </div>
      <div className="flex-1 flex justify-center items-start flex-col">
        <div className="flex flex-row gap-[24px] p-6 hover:bg-neutral-900 rounded-lg">
          <div className="bg-[#001319] w-[76px] h-[56px] rounded-full flex justify-center items-center">
            <img
              src={star}
              alt="star"
              className="h-[50%] w-[50%] object-contain"
            />
          </div>

          <div>
            <h1 className="font-semibold text-[18px]">Rewards</h1>
            <span>
              <p className="text-[16px] text-neutral-500">
                The best credit cards offer some tantalizing combinations of
                promotions and prizes
              </p>
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-[24px] p-6 hover:bg-neutral-900 rounded-lg">
          <div className="bg-[#001319] w-[76px] h-[56px] rounded-full flex justify-center items-center">
            <img
              src={shield}
              alt="star"
              className="h-[32px] w-[32px] object-contain"
            />
          </div>

          <div>
            <h1 className="font-semibold text-[18px]">100% Secured</h1>
            <span>
              <p className="text-[16px] text-neutral-500">
                We take proactive steps make sure your information and
                transactions are secure.
              </p>
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-[24px] p-6 hover:bg-neutral-900 rounded-lg">
          <div className="bg-[#001319] w-[76px] h-[56px] rounded-full flex justify-center items-center">
            <img
              src={send}
              alt="star"
              className="h-[32px] w-[32px] object-contain"
            />
          </div>

          <div>
            <h1 className="font-semibold text-[18px]">Balance Transfer</h1>
            <span>
              <p className="text-[16px] text-neutral-500">
                A balance transfer credit card can save you a lot of money in
                interest charges.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
