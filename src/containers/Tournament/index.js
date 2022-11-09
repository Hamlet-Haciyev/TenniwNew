import React from "react";
import Filter from "./Filter";
import TournamentList from "./TournamentList";
import { switchCategory } from "../../store/tournament";
import { useDispatch } from "react-redux";
const Tournament = () => {
  const dispatch = useDispatch();
  const onChangeCategory = (e) => {
    dispatch(switchCategory(e.target.textContent.toLowerCase()));
    const allCategoryEl = document.querySelectorAll(".categoryList li");
    Array.from(allCategoryEl).map((item) => item.classList.remove("active"));
    e.target.classList.add("active");
  };
  return (
    <div>
      <Filter onChangeCategory={onChangeCategory} />
      <TournamentList />
    </div>
  );
};
export default Tournament;
