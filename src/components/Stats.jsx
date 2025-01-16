import React from "react";
import styles from "../style";

const Stats = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-[24px] py-6">
      {/* Item 1 */}
      <div className="flex-1 flex justify-start items-center flex-row m-3 gap-4">
        <h4 className="font-poppins font-semibold text-[30px] sm:text-[40px] leading-[43px] sm:leading-[53px] text-white">
          3800+
        </h4>
        <span className="font-poppins font-normal text-[15px] sm:text-[20px] leading-[21px] sm:leading-[26px] text-gradient uppercase mt-2">
          User Active
        </span>
      </div>

      {/* Item 2 */}
      <div className="flex-1 flex justify-start items-center flex-row m-3 gap-4">
        <h4 className="font-poppins font-semibold text-[30px] sm:text-[40px] leading-[43px] sm:leading-[53px] text-white">
          230+
        </h4>
        <span className="font-poppins font-normal text-[15px] sm:text-[20px] leading-[21px] sm:leading-[26px] text-gradient uppercase mt-2">
          Trusted by Company
        </span>
      </div>

      {/* Item 3 */}
      <div className="flex-1 flex justify-start items-center flex-row m-3 gap-4">
        <h4 className="font-poppins font-semibold text-[30px] sm:text-[40px] leading-[43px] sm:leading-[53px] text-white">
          $230M+
        </h4>
        <span className="font-poppins font-normal text-[15px] sm:text-[20px] leading-[21px] sm:leading-[26px] text-gradient uppercase mt-2">
          Transaction
        </span>
      </div>
    </div>
  );
};

export default Stats;
