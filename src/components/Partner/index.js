import React from "react";
import profile from "../../assets/images/partner.png"
export const Partner = () => {
  return (
    <div className="flex flex-col items-center rounded-md border-2 border-[#CFD3D9] w-[280px] h-[300px] py-5 px-6">
      <div className="flex items-center mb-4">
        <div className="flex rounded-full border-5 border-[#000] mr-2">
          <img src={profile} />
        </div>
        <div className="flex flex-col">
          <h5 className="text-lg font-[Manrope] text-[#0066FF] ">
            Bulat Peters
          </h5>
          <span className="text-sm font-[Manrope] text-[#545454]">
            26 years, Baku
          </span>
        </div>
      </div>
      <div className="">profile</div>
      <div className="">profile</div>
      <div className="">profile</div>
      <div className="flex items-center justify-between">datetime</div>
    </div>
  );
};
