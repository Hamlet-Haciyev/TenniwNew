import React from "react";
import styled from "styled-components";
// import { UpComing, Tournament, Stats, PrevMatches } from "../../components";
import UpComing from "./UpComing";
import Tournament from "./Tournament";
import Stats from "./Stats";
import PrevMatches from "./PrevMatches";
const Dashboard = () => {
  return (
    <DashboardContent>
      <UpComing />
      <Tournament />
      <Stats />
      <PrevMatches />
    </DashboardContent>
  );
};
const DashboardContent = styled.div`
  max-width: 1140px;
`;
export default Dashboard;
