import { Col, Row } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Partner } from "../../components";
import Icon from "../../helpers/icons";
import Filter from "./Filter";
const PartnerPage = () => {
  const [partners, setPartners] = useState([
    {
      age: 26,
      playerLevelMin: 4,
      playerLevelMax: 5.5,
      profilePhoto: true,
      gametype: ["single", "partner", "score system"],
      sex: "male",
    },
    {
      age: 28,
      playerLevelMin: 1,
      playerLevelMax: 6,
      profilePhoto: false,
      gametype: ["partner"],
      sex: "female",
    },
    {
      age: 32,
      playerLevelMin: 4,
      playerLevelMax: 5.5,
      profilePhoto: true,
      gametype: ["single"],
      sex: "male",
    },
    {
      age: 16,
      playerLevelMin: 1,
      playerLevelMax: 5.5,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "male",
    },
    {
      age: 36,
      playerLevelMin: 1,
      playerLevelMax: 6,
      profilePhoto: false,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      age: 56,
      playerLevelMin: 4,
      playerLevelMax: 6,
      profilePhoto: true,
      gametype: ["partner"],
      sex: "male",
    },
    {
      age: 23,
      playerLevelMin: 4,
      playerLevelMax: 5.5,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      age: 26,
      playerLevelMin: 1,
      playerLevelMax: 5.5,
      profilePhoto: false,
      gametype: ["single"],
      sex: "male",
    },
    {
      age: 27,
      playerLevelMin: 4,
      playerLevelMax: 5.5,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      age: 22,
      playerLevelMin: 4,
      playerLevelMax: 6,
      profilePhoto: false,
      gametype: ["single", "partner"],
      sex: "male",
    },
    {
      age: 20,
      playerLevelMin: 1,
      playerLevelMax: 5.5,
      profilePhoto: true,
      gametype: ["single"],
      sex: "male",
    },
    {
      age: 29,
      playerLevelMin: 4,
      playerLevelMax: 6,
      profilePhoto: false,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      age: 34,
      playerLevelMin: 4,
      playerLevelMax: 6,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "male",
    },
    {
      age: 24,
      playerLevelMin: 4,
      playerLevelMax: 5.5,
      profilePhoto: true,
      gametype: ["partner"],
      sex: "male",
    },
    {
      age: 43,
      playerLevelMin: 1,
      playerLevelMax: 5.5,
      profilePhoto: false,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      age: 45,
      playerLevelMin: 4,
      playerLevelMax: 5.5,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "male",
    },
    {
      age: 36,
      playerLevelMin: 4,
      playerLevelMax: 6,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      age: 46,
      playerLevelMin: 4,
      playerLevelMax: 5.5,
      profilePhoto: false,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      age: 21,
      playerLevelMin: 1,
      playerLevelMax: 6,
      profilePhoto: true,
      gametype: ["single"],
      sex: "male",
    },
  ]);
  const [sex, setSex] = useState("male");
  const [profilePhoto, setProfilePhoto] = useState(false);
  const [age, setAge] = useState({ min: 0, max: 100 });
  const [playerLevel, setPlayerLevel] = useState({ min: 1, max: 7 });
  const [gameType, setGameType] = useState([]);
  const [courtType, setCourtType] = useState([]);
  const onChangeSex = (e) => {
    setSex(e.target.value);
  };
  const onChangeProfilePhotoIsRequired = () => {
    setProfilePhoto(!profilePhoto);
  };
  const onChangeGameType = (e) => {
    setGameType(e);
  };
  const onChangeCourtPayment = (e) => {
    setCourtType(e);
  };
  const [sort, setSort] = useState(null);

  const displayPartnerForSort = (partner) => {
    let matchesSex = false;
    let matchesProfilePhotoRequired = false;
    let matchesAge = false;
    let matchesPlayerLevel = false;
    matchesSex = partner.sex == sex;
    if (profilePhoto) {
      matchesProfilePhotoRequired = partner.profilePhoto == profilePhoto;
    } else {
      matchesProfilePhotoRequired = true;
    }
    matchesAge = partner.age >= age.min && partner.age <= age.max;
    matchesPlayerLevel =
      partner.playerLevelMin >= playerLevel.min ||
      partner.playerLevelMax <= playerLevel.max;
    return (
      matchesSex &&
      matchesAge &&
      matchesPlayerLevel &&
      matchesProfilePhotoRequired
    );
  };
  useEffect(() => {
    setSort(partners.filter((partner) => displayPartnerForSort(partner)));
  }, [sex, profilePhoto, age, playerLevel]);
  return (
    <div className="flex items-center flex-col">
      <div className="flex justify-center items-center w-full h-[300px] relative bg-partnerBG bg-left-bottom bg-no-repeat bg-cover">
        <h4 className="font-[Manrope] font-semibold text-center text-5xl text-white">
          Search for a partner
        </h4>
        <div className="flex items-center justify-between shadow-md rounded w-[800px] h-12 px-2 absolute bottom-[-20px] bg-white">
          <div className="flex items-center grow ml-3">
            <Icon name={"search"} />
            <input
              type={"text"}
              className={"outline-none border-none w-full px-5"}
              placeholder={"Search name, location, player’s level and etc..."}
            />
          </div>
          <button className="flex items-center justify-center h-10 w-24 rounded-md font-[Manrope] text-white bg-searchBtn">
            Search
          </button>
        </div>
      </div>
      <div className="flex items-center py-10 w-[1140px] mx-auto">
        <Row gutter={[16, 16]} className="w-full">
          <Col span={4}>
            <div className="flex items-center flex-col">
              <button className="w-[150px] h-10 rounded-md text-white bg-newPost">
                +New Post
              </button>
              <Filter
                sex={sex}
                onChangeSex={onChangeSex}
                onChangeProfilePhotoIsRequired={onChangeProfilePhotoIsRequired}
                onChangeCourtPayment={onChangeCourtPayment}
                onChangeGameType={onChangeGameType}
                setAge={setAge}
                setPlayerLevel={setPlayerLevel}
              />
            </div>
          </Col>
          <Col span={20}>
            <div className="flex flex-col">
              <div className="flex flex-col mb-4">
                <h4 className="font-[Manrope] font-semibold mb-4 text-2xl">
                  Last time played with
                </h4>
                <div className="flex">
                  <div className="flex flex-wrap">
                    <Partner />
                    <Partner />
                    <Partner />
                    {sort?.length == 0
                      ? "there is no data for search value......"
                      : null}
                    {sort &&
                      sort.map((s) => {
                        return (
                          <div className="mx-5 my-2">
                            <span>age:{s.age}</span>
                            <span>player min level:{s.playerLevelMin}</span>
                            <span>player max level:{s.playerLevelMax}</span>
                            <span>sex:{s.sex}</span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="text-2xl font-[Manrope] font-semibold mb-4">
                  Recommended
                </h4>
                <div className="flex items-center flex-wrap">
                  <Partner />
                  <Partner />
                  <Partner />
                  <Partner />
                  <Partner />
                  <Partner />
                  <Partner />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default PartnerPage;
