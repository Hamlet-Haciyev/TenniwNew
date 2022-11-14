import React, { useEffect, useMemo, useState } from "react";
import { PaginatedItems } from "./Pagination";
import styled from "styled-components";

const TournamentList = ({ data }) => {
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
  return (
    <TournamentListContainer>
      <TableHeader>
        {columns.map((column) => {
          return <TableTitle>{column.title}</TableTitle>;
        })}
      </TableHeader>
      <PaginatedItems itemsPerPage={6} items={data} />
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
