import React from "react";
import { Select } from "antd";
import styled from "styled-components";
import Icon from "../../../../helpers/icons";
const Country = () => {
  const { Option } = Select;
  const handleChange = (value) => {
    console.log(value);
  };
  return (
    <SelectStyled>
      <Select
        defaultValue="Baku"
        style={{ width: 284 }}
        onChange={handleChange}
      >
        <Option value={"Baku"}>
          <Icon name="location" color={"#273B4A"} />
          Baku, Azerbaijan
        </Option>
        <Option value={"Istanbul"}>
          <Icon name="location" color={"#273B4A"} />
          Istanbul, Turkey
        </Option>
        <Option value={"Berlin"}>
          <Icon name="location" color={"#273B4A"} />
          Berlin, Germany
        </Option>
        <Option value={"Warsava"}>
          <Icon name="location" color={"#273B4A"} />
          Warsava, Poland
        </Option>
        <Option value={"Paris"}>
          <Icon name="location" color={"#273B4A"} />
          Paris, France
        </Option>
      </Select>
    </SelectStyled>
  );
};
const SelectStyled = styled.div`
  .ant-select-selector {
    background: #ffffff;
    border-radius: 15px !important;
    border: none !important;
    height: 45px !important;
    padding: 8px 15px !important;
  }
  .ant-select-arrow {
    color: #11142d;
  }
  .ant-select-selection-item {
    display: flex;
    align-items: center;
  }
  .ant-select-item-option-content {
    display: flex;
    align-items: center;
  }
  svg {
    margin-right: 8px;
  }
`;
export default Country;