import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import TournamentList from "./TournamentList";
import { switchCategory ,setFilterKeys} from "../../store/tournament";
import { useSelector, useDispatch } from "react-redux";

const Tournament = () => {
  const dispatch = useDispatch();
  const onChangeCategory = (e) => {
    // dispatch(switchCategory(e.target.textContent.toLowerCase()));
    // const allCategoryEl = document.querySelectorAll(".categoryList li");
    // Array.from(allCategoryEl).map((item) => item.classList.remove("active"));
    // e.target.classList.add("active");
    setFilterKeys(
      dispatch({ text: "", category: e.target.textContent.toLowerCase() })
    );
  };
  const data = useSelector((state) => state.tournament.data);
  const filterKeys = useSelector((state) => state.tournament.filterKeys);

  const [items, setItems] = useState([]);

  const shouldDisplay = () => {};
  useEffect(()=>{
    console.log(filterKeys);
  },[filterKeys])
  return (
    <>
      <Filter onChangeCategory={onChangeCategory} />
      <TournamentList data={data} />
    </>
  );
};
export default Tournament;
// switch (state.category) {
//   case "current":
//     state.sortedTournaments = state.data.filter(
//       (tournament) =>
//         tournament.startDate < new Date() &&
//         tournament.endDate > new Date() && tournament.name.toLowerCase().includes(search)
//     );
//     break;
//   case "history":
//     state.sortedTournaments = state.data.filter(
//       (tournament) => tournament.endDate < new Date() && tournament.name.toLowerCase().includes(search)
//     );
//     break;
//   default:
//     state.sortedTournaments = state.data.filter(
//       (tournament) => tournament.startDate > new Date() && tournament.toLowerCase().name.includes(search)
//     );
//     break;
// }
