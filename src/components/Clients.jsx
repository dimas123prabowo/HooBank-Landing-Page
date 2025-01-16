import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets";

const Clients = () => {
  return (
    <div className="flex justify-center items-center flex-wrap w-full">
      <div className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5">
        <img
          src={airbnb}
          alt="airbnb"
          className="sm:w-[192px] w-[100px] object-contain"
        />
      </div>
      <div className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5">
        <img
          src={binance}
          alt="binance"
          className="sm:w-[192px] w-[100px] object-contain"
        />
      </div>
      <div className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5">
        <img
          src={coinbase}
          alt="coinbase"
          className="sm:w-[192px] w-[100px] object-contain"
        />
      </div>
      <div className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] m-5">
        <img
          src={dropbox}
          alt="dropbox"
          className="sm:w-[192px] w-[100px] object-contain"
        />
      </div>
    </div>
  );
};

export default Clients;
