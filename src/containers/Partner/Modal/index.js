import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { TailSpin } from "react-loader-spinner";
import userImg from "../../../assets/images/modalUser.png";
import { LevelBar } from "../../../components";
import Icon from "../../../helpers/icons";

const Modal = ({ partner, handleModal }) => {
  const [send, setSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleInvite = () => {
    setTimeout(() => {
      setSend(!send);
      setTimeout(() => {
        setLoading(!loading);
      }, 500);
    }, 100);
  };
  return (
    <div className="shadow-lg fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10 flex flex-col items-center rounded-xl w-[690px] border-2 border-[#CFD3D9] bg-white">
      <div className="w-full border-b border-[#E1E1E1] px-14 py-5">
        <Row gutter={[32]}>
          <Col span={8} className="flex flex-col items-center">
            <div className="flex items-center justify-center border-4 border-[#E3E3E3] rounded-full w-[150px] mb-6">
              <img className="max-w-[100%]" src={userImg} alt="user" />
            </div>
            <h5 className="font-[Manrope] font-semibold text-xl text-[#0066FF]">
              Bulat Peters
            </h5>
            <span className="flex font-[Manrope] text-md text-[#545454] mb-6">
              26 years old
            </span>
            {!send ? (
              <button
                onClick={handleInvite}
                className="flex items-center justify-center rounded-md border bg-gradient-to-r from-[#0066FF] to-[#0098FF] font-[Manrope] font-semibold text-md text-[#FFFFFF] py-2 px-8"
              >
                Invite
              </button>
            ) : (
              <button
                onClick={handleInvite}
                className="flex items-center justify-center rounded-md border border-[#0066FF] font-[Manrope] font-semibold text-md text-[#0066FF] py-2 px-8"
              >
                {!loading ? (
                  <span className="mr-2">
                    <TailSpin
                      height="20"
                      width="20"
                      color="#0066FF"
                      ariaLabel="tail-spin-loading"
                      radius="1"
                      wrapperStyle={{}}
                      wrapperClass={""}
                    />
                  </span>
                ) : null}
                Invite sent
              </button>
            )}
          </Col>
          <Col span={16}>
            <div className="flex flex-col">
              <h5 className="font-[Manrope] font-semibold text-[#212731] text-md mb-2">
                Game type
              </h5>
              <div className="flex items-center justify-evenly w-[200px] mb-3">
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icon name="single" />
                  </span>
                  <span className="text-[#212731] text-lg font-semibold">
                    &
                  </span>
                  <span className="ml-2">
                    <Icon name="team" />
                  </span>
                </div>
                |
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icon name="score" />
                  </span>
                  <span className="text-[#212731] text-lg font-semibold">
                    &
                  </span>
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
                  <LevelBar min={4} max={7} />
                </span>
              </div>
              <div className="flex flex-col items-center w-full mb-3">
                <h5 className="text-[#212731] font-Manrope font-semibold w-full mb-6">
                  Want to play with
                </h5>
                <span className="w-full">
                  <LevelBar min={4} max={7} />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="w-full border-b border-[#E1E1E1] px-14 py-5">
        <h5 className="font-[Manrope] font-semibold text-xl text-[#212731] mb-1">
          Comments:
        </h5>
        <p className="font-[Manrope] text-md text-[#000000]">
          Not comments available
        </p>
      </div>
      <div className="flex justify-end w-full border-[#E1E1E1] px-14 py-5">
        <button
          onClick={handleModal}
          className="flex items-center justify-center rounded-md border border-[#0066FF] font-[Manrope] font-semibold text-md text-[#0066FF] py-2 px-8"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
