import React from "react";
import styled, { css } from "styled-components";

const Category = ({ onChangeCategory }) => {
  return (
    <CategoryView>
      <CategoryList className="categoryList">
        <Categoryİtem className="active" onClick={onChangeCategory}>History</Categoryİtem>
        <Categoryİtem onClick={onChangeCategory}>Current</Categoryİtem>
        <Categoryİtem onClick={onChangeCategory}>Upcoming</Categoryİtem>
      </CategoryList>
    </CategoryView>
  );
};
const CategoryView = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const CategoryList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const Categoryİtem = styled.li`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  color: #11142d;
  cursor: pointer;
  margin-right: 30px;
  position: relative;
  &.active {
    color: #0067ff;
    &::after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      height: 1px;
      width: 100%;
      background-color: #0067ff;
    }
  }
`;
export default Category;
