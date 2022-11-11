import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PaginatedItems } from "./Pagination";
import styled from "styled-components";

const TournamentList = () => {
  const tournaments = useSelector((state) => state.tournament.data);
  const category = useSelector((state) => state.tournament.category);
  // const search = useSelector((state) => state.tournament.search);
  const [search,setSearch] = useState("");
  const [items, setItems] = useState([]);
  const columns = [
    {
      title: "Name",
      accessor: "name",
    },
    {
      title: "Start Date",
      accessor: "startDate",
    },
    {
      title: "End Date",
      accessor: "endDate",
    },
    {
      title: "Format",
      accessor: "format",
    },
    {
      title: "Place",
      accessor: "place",
    },
    {
      title: "Court",
      accessor: "court",
    },
    {
      title: "Payment",
      accessor: "payment",
    },
    { title: "Rules", accessor: "rules" },
  ];
  useEffect(() => {
    switch (category) {
      case "current":
        setItems(
          tournaments.filter(
            (tournament) =>
              tournament.startDate < new Date() &&
              tournament.endDate > new Date()
          )
        );
        break;
      case "history":
        setItems(
          tournaments.filter((tournament) => tournament.endDate < new Date())
        );
        break;
      default:
        setItems(
          tournaments.filter((tournament) => tournament.startDate > new Date())
        );
        break;
    }
    
  }, [category, search]);
  return (
    <TournamentListContainer>
      <TableHeader>
        {columns.map((column) => {
          return <TableTitle>{column.title}</TableTitle>;
        })}
      </TableHeader>
      <PaginatedItems itemsPerPage={6} items={items} />
    </TournamentListContainer>
  );
};
const TournamentListContainer = styled.div``;
const TableHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 15px 30px;
`;
const TableTitle = styled.h5`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  color: #757575;
  margin-bottom: 0;
  flex: 1;
`;
export default TournamentList;
