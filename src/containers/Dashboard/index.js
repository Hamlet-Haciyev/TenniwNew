import React from "react";
import styled from "styled-components";
// import { UpComing, Tournament, Stats, PrevMatches } from "../../components";
import UpComing from "./UpComing";
import Tournament from "./Tournament";
import Stats from "./Stats";
import PrevMatches from "./PrevMatches";
const Dashboard = () => {
  return (
    <div className="w-[1140px] mx-auto py-10">
      <UpComing />
      <Tournament />
      <Stats />
      <PrevMatches />
    </div>
  );
};

export default Dashboard;
