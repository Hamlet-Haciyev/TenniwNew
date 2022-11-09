import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Content from "./Content";
import bgimage from "../../assets/images/bgimage.png";
const Home = () => {
  return (
    <HomeWrapper>
      <Navbar />
      <Content />
    </HomeWrapper>
  );
};
const HomeWrapper = styled.div`
  height: 100vh;
  background-image: url(${bgimage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export default Home;
