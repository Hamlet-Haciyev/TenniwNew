import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import TournamentList from "./TournamentList";
import { useSelector } from "react-redux";

const Tournament = () => {
  const tournamentList = useSelector((state) => state.tournament.data);
  const filterKeys = useSelector((state) => state.tournament.filterKeys);

  const [data, setData] = useState([]);

  const shouldDisplay = (tournament) => {
    const { text, category } = filterKeys;
    let matchesCategory = false;
    let matchesSearchText =
      text === "" ? true : tournament.name.toLowerCase().includes(text);
    switch (category) {
      case "current":
        matchesCategory =
          tournament.startDate < new Date() && tournament.endDate > new Date();
        break;
      case "history":
        matchesCategory = tournament.endDate < new Date();
        break;
      default:
        matchesCategory = tournament.startDate > new Date();
        break;
    }

    return matchesSearchText && matchesCategory;
  };

  useEffect(() => {
    setData(tournamentList.filter((tournament) => shouldDisplay(tournament)));
  }, [filterKeys]);

  return (
    <div className="w-[1200px] mx-auto pt-10">
      <Filter />
      {data.length == 0 ? "there is no data for search value..." : <TournamentList data={data} />}
    </div>
  );
};
export default Tournament;
