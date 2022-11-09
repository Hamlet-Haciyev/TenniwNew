import React from "react";
import styled from "styled-components";
import Icon from "../../../../../helpers/icons";
import WinnerImg from "../../../../../assets/images/userOne.png";
const Winner = () => {
  return (
    <WinnerView>
      <Container>
        <Cup>
          <Icon name="cup" />
          <span>Winner</span>
        </Cup>
        <Img>
          <img src={WinnerImg} alt="winner" />
        </Img>
        <Name>
          <span>Bulat Peters</span>
        </Name>
      </Container>
    </WinnerView>
  );
};
const WinnerView = styled.div`
  background: linear-gradient(86.76deg, #0067ff 0.79%, #22a0fb 100%);
  border-radius: 21px;
  padding: 30px;
  margin-bottom: 20px;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  margin: 0 auto;
`;
const Cup = styled.div`
  display: flex;
  align-items: center;
  span {
    font-family: "Manrope";
    font-weight: 700;
    font-size: 30px;
    color: #ffffff;
    margin-left: 10px;
  }
`;
const Img = styled.div`
  border: 7px solid rgba(255, 255, 255, 0.36);
  border-radius: 50%;
  img {
    width: 90px;
    object-fit: cover;
  }
`;
const Name = styled.div`
  span {
    font-family: "Manrope";
    font-weight: 400;
    font-size: 35px;
    line-height: 20px;
    color: #ffffff;
  }
`;

export default Winner;
