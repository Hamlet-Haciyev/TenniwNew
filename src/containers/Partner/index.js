import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Col, Row } from "antd";
import { Partner } from "../../components";
import Icon from "../../helpers/icons";
import Filter from "./Filter";
import Modal from "./Modal";

const PartnerPage = () => {
  const navigate = useNavigate();
  const partners = useSelector((state) => state.partner.data);
  const [sortedPartners, setSortedPartners] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedSex, setSelectedSex] = useState("male");
  const [isRequiredPhoto, setIsRequiredPhoto] = useState(false);
  const [rangeAge, setRangeAge] = useState({ min: 0, max: 100 });
  const [playerLevel, setPlayerLevel] = useState({ min: 1, max: 10 });
  const [gameType, setGameType] = useState([]);
  const [courtType, setCourtType] = useState([]);
  const onChangeSex = (e) => {
    setSelectedSex(e.target.value);
  };
  const onChangeIsRequiredPhoto = () => {
    setIsRequiredPhoto(!isRequiredPhoto);
  };
  const onChangeGameType = (e) => {
    setGameType(e);
  };
  const onChangeCourtPayment = (e) => {
    setCourtType(e);
  };
  const onChangeAge = (value) => {
    const [min, max] = value;
    setRangeAge({ min, max });
  };
  const onChangePlayerLevel = (value) => {
    const [min, max] = value;
    setPlayerLevel({ min, max });
  };
  const filterPartner = () => {
    let updateList = partners;
    if (selectedSex) {
      updateList = updateList.filter((partner) => partner.sex == selectedSex);
    }
    if (isRequiredPhoto) {
      updateList = updateList.filter(
        (partner) => partner.profilePhoto == isRequiredPhoto
      );
    }
    if (rangeAge) {
      updateList = updateList.filter(
        (partner) => partner.age >= rangeAge.min && partner.age <= rangeAge.max
      );
    }
    if (playerLevel) {
      updateList = updateList.filter(
        (partner) =>
          partner.levelMin >= playerLevel.min &&
          partner.levelMax <= playerLevel.max
      );
    }
    if (gameType.length > 0) {
      updateList = updateList.filter((partner) => {
        return gameType.every((gm) => partner.gametype.includes(gm));
      });
    }
    if (courtType.length > 0) {
      updateList = updateList.filter((partner) => {
        return courtType.every((cm) => partner.courtType.includes(cm));
      });
    }
    if (search) {
      updateList = updateList.filter((partner) =>
        partner.name.toLowerCase().includes(search)
      );
      setSearch("");
    }
    setSortedPartners(updateList);
  };
  // component update mount
  useEffect(() => {
    filterPartner();
  }, [
    rangeAge,
    selectedSex,
    isRequiredPhoto,
    playerLevel,
    gameType,
    courtType,
    open,
  ]);
  const handleModal = () => {
    setOpen(!open);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
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
          <button
            onClick={filterPartner}
            className="flex items-center justify-center h-10 w-24  rounded-md font-[Manrope] text-white bg-searchBtn"
          >
            Search
          </button>
        </div>
      </div>
      <div className="py-10 w-[1050px] mx-auto">
        {loading ? (
          <Row gutter={[16]} className="w-full">
            <Col lg={4}>
              <div className="flex items-center flex-col">
                <button
                  onClick={() => navigate("addpost")}
                  className="w-[150px] h-10 rounded-md text-white bg-newPost"
                >
                  +New Post
                </button>
                <Filter
                  selectedSex={selectedSex}
                  onChangeSex={onChangeSex}
                  onChangeIsRequiredPhoto={onChangeIsRequiredPhoto}
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
                    {sortedPartners?.length > 0
                      ? sortedPartners.map((partner, index) => {
                          return (
                            <Partner
                              key={index}
                              partner={partner}
                              onClick={handleModal}
                            />
                          );
                        })
                      : "Partner Not found"}
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          "Loading..."
        )}
      </div>
      {open ? <Modal handleModal={handleModal} /> : null}
    </div>
  );
};

export default PartnerPage;
