import React from "react";
import { Slider as AntSlider } from "antd";
const Slider = ({defaultValue,min,max,onChange}) => {
  return <AntSlider range defaultValue={defaultValue} onChange={onChange} min={min} max={max} />;
};

export default Slider;
