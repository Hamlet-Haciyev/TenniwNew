import React, { useEffect } from "react";
import profile from "../../assets/images/partner.png";
import Icon from "../../helpers/icons";
import { LevelBar } from "../../components";
const Partner = ({ partner, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center rounded-xl shadow-[0px_8px_17px_rgba(67,67,67,0.09)] border-2 border-[#CFD3D9] w-[260px] cursor-pointer py-5 px-6 mr-3 mb-4"
    >
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
      <div className="flex items-center justify-evenly w-full mb-3">
        <div className="flex items-center">
          {partner.gametype?.includes("Single") ? (
            <span className="mr-2">
              <Icon name="single" />
            </span>
          ) : null}
          {partner.gametype.includes("Partner") &&
          partner.gametype.includes("Single") ? (
            <span className="text-[#212731] text-lg font-semibold">&</span>
          ) : null}
          {partner.gametype?.some((gm) => gm.includes("Partner")) ? (
            <span className="ml-2">
              <Icon name="team" />
            </span>
          ) : null}
        </div>
        |
        <div className="flex items-center">
          {partner.gametype?.includes("Score System") ? (
            <span className="mr-2">
              <Icon name="score" />
            </span>
          ) : null}
          {partner.gametype.includes("Score System") &&
          partner.gametype.includes("No Score System") ? (
            <span className="text-[#212731] text-lg font-semibold">&</span>
          ) : null}
          {partner.gametype?.some((gm) => gm.includes("No Score System")) ? (
            <span className="ml-2">
              <Icon name="nonScore" />
            </span>
          ) : null}
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
          <LevelBar min={partner?.levelMin} max={partner?.levelMax} />
        </span>
      </div>
      <div className="flex flex-col items-center w-full mb-3">
        <h5 className="text-[#212731] font-Manrope font-semibold w-full mb-6">
          Want to play with
        </h5>
        <span className="w-full">
          <LevelBar min={partner?.levelMin} max={partner?.levelMax} />
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
export default Partner;
