import React from "react";
import profile from "../../assets/images/partner.png";
import Icon from "../../helpers/icons";
import { LevelBar } from "../../components";
export const Partner = ({ partner }) => {
  return (
    <div className="flex flex-col items-center rounded-xl shadow-[0px_8px_17px_rgba(67,67,67,0.09)] border-2 border-[#CFD3D9] w-[260px] cursor-pointer py-5 px-6 mr-3 mb-4">
      <div className="flex items-center mb-4 w-full">
        <div className="flex rounded-full border-5 border-[#000] mr-2">
          <img src={profile} alt={"partner"} />
        </div>
        <div className="flex flex-col">
          <h5 className="text-lg font-[Manrope] text-[#0066FF] ">
            {partner?.name}
          </h5>
          <span className="text-sm font-[Manrope] text-[#545454]">
            {partner?.age} years, Baku
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between w-full mb-3 px-4">
        <div className="flex items-center">
          <span className="mr-2">
            <Icon name="single" />
          </span>
          <span className="text-[#212731] text-lg font-semibold">&</span>
          <span className="ml-2">
            <Icon name="team" />
          </span>
        </div>
        |
        <div className="flex items-center">
          <span className="mr-2">
            <Icon name="score" />
          </span>
          <span className="text-[#212731] text-lg font-semibold">&</span>
          <span className="ml-2">
            <Icon name="nonScore" />
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center w-full mb-3">
        <h5 className="text-[#212731] font-Manrope font-semibold w-full">
          Willing to pay
        </h5>
        <span className="w-full">Half of the court’s rent (50%)</span>
      </div>
      <div className="flex flex-col items-center w-full mb-3">
        <h5 className="text-[#212731] font-Manrope font-semibold w-full">
          Available
        </h5>
        <span className="w-full">Mon, Wed, Sun: 19:00 - 21:00 </span>
      </div>
      <div className="flex flex-col items-center w-full mb-3">
        <h5 className="text-[#212731] font-Manrope font-semibold w-full mb-6">
          Player’s level
        </h5>
        <span className="w-full">
          <LevelBar
            min={partner?.playerLevelMin}
            max={partner?.playerLevelMax}
          />
        </span>
      </div>
      <div className="flex flex-col items-center w-full mb-3">
        <h5 className="text-[#212731] font-Manrope font-semibold w-full mb-6">
          Want to play with
        </h5>
        <span className="w-full">
          <LevelBar
            min={partner?.playerLevelMin}
            max={partner?.playerLevelMax}
          />
        </span>
      </div>
      <div className="flex items-center justify-between w-full">
        <span className="text-[#535353] font-Manrope text-xs tracking-tighter">
          01.11.2022 22:47
        </span>
        <span className="text-[#0066FF] text-lg text-semibold">➜</span>
      </div>
    </div>
  );
};
