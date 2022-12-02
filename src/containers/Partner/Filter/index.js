import React, { useState } from "react";
import Slider from "./Slider";
import { Radio, Checkbox, Space } from "antd";
const Filter = ({
  selectedSex,
  onChangeCourtPayment,
  onChangeGameType,
  onChangeSex,
  onChangeIsRequiredPhoto,
  onChangeAge,
  onChangePlayerLevel,
}) => {
  const gameTypeOptions = [
    "Single",
    "Partner",
    "Score System",
    "No Score System",
  ];
  const courtPaymentOptions = ["50/50", "My Court", "Someone’s Court"];
  return (
    <div className="border border-[#E1E1E1] w-full mt-5 rounded p-2">
      <h5 className="text-gray-400 font-[Manrope] font-semibold text-lg mb-3">
        Filter
      </h5>
      <div className="flex flex-col mb-4">
        <h5 className="text-black font-semibold text-md mb-1">Sex</h5>
        <Radio.Group onChange={onChangeSex} value={selectedSex}>
          <Space direction="vertical">
            <Radio value={"male"}>Male</Radio>
            <Radio value={"female"}>Female</Radio>
            <Radio value={"any"}>Any</Radio>
          </Space>
        </Radio.Group>
      </div>
      <div className="flex flex-col mb-4">
        <h5 className="text-black font-semibold text-md mb-1">Profile Photo</h5>
        <Checkbox onChange={onChangeIsRequiredPhoto}>Required</Checkbox>
      </div>
      <div className="flex flex-col mb-4">
        <h5 className="text-black font-semibold text-md mb-1">Age</h5>
        <Slider
          range
          defaultValue={[20, 50]}
          min={0}
          max={100}
          onChange={onChangeAge}
        />
      </div>

      <div className="flex flex-col mb-4">
        <h5 className="text-black font-semibold text-md mb-1">Game Level</h5>
        <Slider
          range
          defaultValue={[1, 10]}
          min={1}
          max={10}
          onChange={onChangePlayerLevel}
        />
      </div>
      <div className="flex flex-col mb-4">
        <h5 className="text-black font-semibold text-md mb-1">Game Type</h5>
        <Checkbox.Group
          options={gameTypeOptions}
          defaultValue={[""]}
          onChange={onChangeGameType}
        />
      </div>
      <div className="flex flex-col mb-4">
        <h5 className="text-black font-semibold text-md mb-1">Court Payment</h5>
        <Checkbox.Group
          options={courtPaymentOptions}
          defaultValue={[""]}
          onChange={onChangeCourtPayment}
        />
      </div>
      <div className="flex flex-col" >
        <h5 className="text-black font-semibold text-md mb-1">When</h5>
        <Checkbox>Weekdays</Checkbox>
        <Slider range defaultValue={[7, 23]} min={7} max={23} />
        <Checkbox>Weekend</Checkbox>
        <Slider
          range
          defaultValue={[9, 22]}
          min={7}
          max={23}
        />
      </div>
    </div>
  );
};
export default Filter;
