import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setFilterKeys } from "../../../../store/tournament";
import { useEffect } from "react";

const Category = () => {
  const dispatch = useDispatch();
  const filterKeys = useSelector((state) => state.tournament.filterKeys);
  const getAllCategory = () => {
    const allCategoryEl = document.querySelectorAll(".categoryList li");
    return allCategoryEl;
  };
  const cbFuncForAllCategory = (allCategoryEl, callback) => {
    Array.from(allCategoryEl).map((item) => {
      callback(item);
    });
  };
  const onChangeCategory = (e) => {
    const allCategoryEl = getAllCategory();
    cbFuncForAllCategory(allCategoryEl, (item) => item.classList.remove("active"));
    e.target.classList.add("active");
    dispatch(
      setFilterKeys({ category: e.target.getAttribute("data-category") })
    );
  };
  useEffect(() => {
    const allCategoryEl = getAllCategory();
    cbFuncForAllCategory(allCategoryEl, (item) => {
      if (item.getAttribute("data-category") == filterKeys.category) {
        item.classList.add("active");
      }
    });
  }, []);
  return (
    <CategoryView>
      <CategoryList className="categoryList">
        <Categoryİtem onClick={onChangeCategory} data-category="history">
          History
        </Categoryİtem>
        <Categoryİtem onClick={onChangeCategory} data-category="current">
          Current
        </Categoryİtem>
        <Categoryİtem onClick={onChangeCategory} data-category="upcoming">
          Upcoming
        </Categoryİtem>
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
