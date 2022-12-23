import React from "react";

const Steps = () => {
  return (
    <div className="relative flex justify-between progressbar">
      <div
        className="flex justify-center items-center w-9 h-9 rounded-full bg-[#FFFFFF]  progress-step progress-step-active"
        data-title="Basic Info"
      ></div>
      <div
        className="flex justify-center items-center w-9 h-9 rounded-full bg-[#FFFFFF]  progress-step"
        data-title="Security"
      ></div>
      <div
        className="flex justify-center items-center w-9 h-9 rounded-full bg-[#FFFFFF]  progress-step"
        data-title="Recovery Question"
      ></div>
    </div>
  );
};
export default Steps;
