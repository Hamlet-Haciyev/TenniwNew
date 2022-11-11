import React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import Search from "./Search";
import Country from "./Country";
import Category from "./Category";
const Filter = ({ onChangeCategory }) => {
  return (
    <FilterView>
      <Row>
        <Col span={8}>
          <Country />
        </Col>
        <Col span={8}>
          <Category onChangeCategory={onChangeCategory} />
        </Col>
        <Col span={8}>
          <Search />
        </Col>
      </Row>
    </FilterView>
  );
};
const FilterView = styled.div`
  margin-bottom: 20px;
`;
export default Filter;
