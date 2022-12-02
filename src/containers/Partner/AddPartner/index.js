import { Col, Row, Slider } from "antd";
import React from "react";
const marks = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
};

const AddPartner = () => {
  const getRivalLevel = (value) => {
    const [ min, max ] = value;
    console.log(min, max);
  };
  return (
    <div className="bg-white w-full h-[300px] py-16">
      <div className="max-w-[1200px] mx-auto">
        <Row gutter={[16]}>
          <Col lg={8}>
            <div className="">
              <h2 className="font-[Manrope] font-semibold text-[#242731] text-2xl mb-3">
                Add New Post
              </h2>
              <p className="font-[Manrope] text-[#575F6E] text-sm mb-10">
                Поля со звездочкой * обязательны для заполнения.
              </p>
              <h6 className="font-[Manrope] text-[#242731] text-sm">
                Уровень соперника
              </h6>
              <Slider
                range
                onChange={getRivalLevel}
                marks={marks}
                defaultValue={[2,5]}
                min={1}
                max={10}
              />
            </div>
          </Col>
          <Col lg={16}>
            <div className="">right side</div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddPartner;
