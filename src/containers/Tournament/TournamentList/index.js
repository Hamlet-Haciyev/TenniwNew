import React, { useEffect, useMemo, useState } from "react";
import { PaginatedItems } from "./Pagination";
import styled from "styled-components";

const TournamentList = ({ data }) => {
  const columns = [
    {
      title: "Name",
      accessor: "name",
      key: "name",
    },
    {
      title: "Start Date",
      accessor: "startDate",
      key: "startDate",
    },
    {
      title: "End Date",
      accessor: "endDate",
      key: "endDate",
    },
    {
      title: "Format",
      accessor: "format",
      key: "format",
    },
    {
      title: "Place",
      accessor: "place",
      key: "place",
    },
    {
      title: "Court",
      accessor: "court",
      key: "court",
    },
    {
      title: "Payment",
      accessor: "payment",
      key: "payment",
    },
    { title: "Rules", accessor: "rules", key: "rules" },
  ];
  return (
    <TournamentListContainer>
      <TableHeader>
        {columns.map((column) => {
          return <TableTitle key={column.key}>{column.title}</TableTitle>;
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
