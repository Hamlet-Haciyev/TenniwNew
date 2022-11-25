import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { Partner } from "../../components";
import Icon from "../../helpers/icons";
import Filter from "./Filter";
const PartnerPage = () => {
  const [partners, setPartners] = useState([
    {
      name: "Bulat Peters",
      age: 26,
      playerLevelMin: 1,
      playerLevelMax: 9,
      profilePhoto: true,
      gametype: ["single", "partner", "score system"],
      sex: "male",
    },
    {
      name: "Suzan Parker",
      age: 28,
      playerLevelMin: 1,
      playerLevelMax: 9,
      profilePhoto: false,
      gametype: ["partner"],
      sex: "female",
    },
    {
      name: "Hana Riva",
      age: 32,
      playerLevelMin: 2,
      playerLevelMax: 10,
      profilePhoto: true,
      gametype: ["single"],
      sex: "male",
    },
    {
      name: "Bulat Peters",
      age: 16,
      playerLevelMin: 3,
      playerLevelMax: 9,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "male",
    },
    {
      name: "Suzan Parker",
      age: 36,
      playerLevelMin: 1,
      playerLevelMax: 6,
      profilePhoto: false,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      name: "Hana Riva",
      age: 56,
      playerLevelMin: 6,
      playerLevelMax: 10,
      profilePhoto: true,
      gametype: ["partner"],
      sex: "male",
    },
    {
      name: "Bulat Peters",
      age: 23,
      playerLevelMin: 4,
      playerLevelMax: 9,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      name: "Suzan Parker",
      age: 26,
      playerLevelMin: 5,
      playerLevelMax: 8,
      profilePhoto: false,
      gametype: ["single"],
      sex: "male",
    },
    {
      name: "Hana Riva",
      age: 27,
      playerLevelMin: 4,
      playerLevelMax: 9,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      name: "Bulat Peters",
      age: 22,
      playerLevelMin: 4,
      playerLevelMax: 6,
      profilePhoto: false,
      gametype: ["single", "partner"],
      sex: "male",
    },
    {
      name: "Suzan Parker",
      age: 20,
      playerLevelMin: 1,
      playerLevelMax: 9,
      profilePhoto: true,
      gametype: ["single"],
      sex: "male",
    },
    {
      name: "Hana Riva",
      age: 29,
      playerLevelMin: 4,
      playerLevelMax: 6,
      profilePhoto: false,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      name: "Bulat Peters",
      age: 34,
      playerLevelMin: 4,
      playerLevelMax: 6,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "male",
    },
    {
      name: "Suzan Parker",
      age: 24,
      playerLevelMin: 1,
      playerLevelMax: 9,
      profilePhoto: true,
      gametype: ["partner"],
      sex: "male",
    },
    {
      name: "Hana Riva",
      age: 43,
      playerLevelMin: 1,
      playerLevelMax: 9,
      profilePhoto: false,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      name: "Bulat Peters",
      age: 45,
      playerLevelMin: 4,
      playerLevelMax: 9,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "male",
    },
    {
      name: "Suzan Parker",
      age: 36,
      playerLevelMin: 4,
      playerLevelMax: 6,
      profilePhoto: true,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      name: "Hana Riva",
      age: 46,
      playerLevelMin: 4,
      playerLevelMax: 9,
      profilePhoto: false,
      gametype: ["single", "partner"],
      sex: "female",
    },
    {
      name: "Bulat Peters",
      age: 21,
      playerLevelMin: 1,
      playerLevelMax: 6,
      profilePhoto: true,
      gametype: ["single"],
      sex: "male",
    },
  ]);
  const [search, setSearch] = useState("");
  const [selectedSex, setSelectedSex] = useState("male");
  const [profilePhoto, setProfilePhoto] = useState(false);
  const [age, setAge] = useState({ min: 0, max: 100 });
  const [playerLevel, setPlayerLevel] = useState({ min: 1, max: 7 });
  const [gameType, setGameType] = useState([]);
  const [courtType, setCourtType] = useState([]);
  const onChangeSex = (e) => {
    setSelectedSex(e.target.value);
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
  const onChangeAge = (value) => {
    const [min, max] = value;
    setAge({ min, max });
  };
  const onChangePlayerLevel = (value) => {
    const [min, max] = value;
    setPlayerLevel({ min, max });
  };
  const [sort, setSort] = useState(null);

  const displayPartnerForSort = (partner) => {
    let matchesSex = false;
    let matchesProfilePhotoRequired = false;
    let matchesAge = false;
    let matchesPlayerLevel = false;
    let matchesName = false;
    matchesSex = partner.sex == selectedSex;
    if (profilePhoto) {
      matchesProfilePhotoRequired = partner.profilePhoto == profilePhoto;
    } else {
      matchesProfilePhotoRequired = true;
    }
    matchesAge = partner.age >= age.min && partner.age <= age.max;
    matchesPlayerLevel =
      partner.playerLevelMin >= playerLevel.min ||
      partner.playerLevelMax <= playerLevel.max;
    if (search) matchesName = partner.name.toLowerCase().includes(search);
    else matchesName = true;
    return (
      matchesSex &&
      matchesAge &&
      matchesPlayerLevel &&
      matchesProfilePhotoRequired &&
      matchesName
    );
  };
  useEffect(() => {
    setSort(partners.filter((partner) => displayPartnerForSort(partner)));
  }, [selectedSex, profilePhoto, age, playerLevel, search]);
  return (
    <div className="flex items-center flex-col">
      <div className="flex justify-center items-center w-full h-[300px] relative bg-partnerBG bg-left-bottom bg-no-repeat bg-cover">
        <h4 className="font-[Manrope] font-semibold text-center text-5xl text-white">
          Search for a partner
        </h4>
        <div className="flex items-center justify-between shadow-md rounded w-[800px] md:w-[600px] sm:w-[500px] px-1 py-1 absolute bottom-[-20px] bg-white">
          <div className="flex items-center grow ml-3">
            <Icon name={"search"} />
            <input
              type={"text"}
              className={"outline-none border-none w-full px-5"}
              placeholder={"Search name, location, player’s level and etc..."}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="flex items-center justify-center h-10 w-24  rounded-md font-[Manrope] text-white bg-searchBtn">
            Search
          </button>
        </div>
      </div>
      <div className="py-10 max-w-[1350px] mx-auto">
        <Row gutter={[16, 16]} className="w-full">
          <Col lg={4}>
            <div className="flex items-center flex-col">
              <button className="w-[150px] h-10 rounded-md text-white bg-newPost">
                +New Post
              </button>
              <Filter
                selectedSex={selectedSex}
                onChangeSex={onChangeSex}
                onChangeProfilePhotoIsRequired={onChangeProfilePhotoIsRequired}
                onChangeCourtPayment={onChangeCourtPayment}
                onChangeGameType={onChangeGameType}
                onChangeAge={onChangeAge}
                onChangePlayerLevel={onChangePlayerLevel}
              />
            </div>
          </Col>
          <Col lg={20}>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <h4 className="text-2xl font-[Manrope] font-semibold mb-4">
                  Recommended
                </h4>
                <div className="flex items-center flex-wrap">
                  {sort &&
                    sort.map((partner, index) => {
                      return <Partner key={index} partner={partner} />;
                    })}
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
