import { Button } from "antd";
import moment from "moment";
import React from "react";
import Moment from "react-moment";
import styled from "styled-components";
import logo from "../../../../assets/images/logoTournament.png";
import Icon from "../../../../helpers/icons";
const Info = ({tournamentDetail}) => {
  return (
    <InfoView>
      <LogoWrapper>
        <div className="logo__container">
          <img src={logo} />
        </div>
      </LogoWrapper>
      <Title>KIA Tournament</Title>
      <TournamentContent>
        <TournamentOption>
          <Icon name={"datetime"} />
          <TournamentItemInfo>
            <Head>Date:</Head>
            <Body><Moment format="DD.MM.YYYY">{tournamentDetail?.startDate}</Moment></Body>
          </TournamentItemInfo>
        </TournamentOption>
        <TournamentOption>
          <Icon name={"time"} />
          <TournamentItemInfo>
            <Head>Time:</Head>
            <Body><Moment format="hh:mm">{tournamentDetail?.startDate}</Moment></Body>
          </TournamentItemInfo>
        </TournamentOption>
        <TournamentOption>
          <Icon name={"location"} />
          <TournamentItemInfo>
            <Head>Location:</Head>
            <Body>{tournamentDetail?.location}</Body>
          </TournamentItemInfo>
        </TournamentOption>
        <TournamentOption>
          <Icon name={"court"} />
          <TournamentItemInfo>
            <Head>Court:</Head>
            <Body>{tournamentDetail?.court}</Body>
          </TournamentItemInfo>
        </TournamentOption>
        <TournamentOption>
          <Icon name={"tennisBall"} />
          <TournamentItemInfo>
            <Head>Type:</Head>
            <Body>{tournamentDetail?.format}</Body>
          </TournamentItemInfo>
        </TournamentOption>
        <TournamentOption>
          <Icon name={"payment"} />
          <TournamentItemInfo>
            <Head>Payment:</Head>
            <Body>{tournamentDetail?.payment}$</Body>
          </TournamentItemInfo>
        </TournamentOption>
      </TournamentContent>
      <Buttons>
        <Button>
          <Icon name={"plus"} />
          Sign up
        </Button>
        <Button>
          <Icon name={"download"} />
          Download Rules
        </Button>
      </Buttons>
    </InfoView>
  );
};

const InfoView = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 20px;
  position: relative;
`;
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translate(-50%, 0px);
  .logo__container {
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid #cccccc;
    padding: 20px;
  }
  img {
    /* max-width: 100%; */
    max-width: 80px;
  }
`;
const Title = styled.h2`
  font-family: "Manrope";
  font-weight: 600;
  font-size: 32px;
  line-height: 49px;
  color: #000000;
  text-align: center;
  margin-top: 30px;
`;
const TournamentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  .ant-btn {
    display: flex;
    align-items: center;
    font-family: "Manrope";
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    background: #0067ff;
    border-radius: 7px;
    color: #fff;
    padding: 10px 20px;
    height: auto;
    &:nth-of-type(2) {
      background: #dde8ff;
      color: #0067ff;
      margin-left: 10px;
      border: none;
    }
    svg {
      margin-right: 10px;
    }
  }
`;
const TournamentOption = styled.div`
  display: flex;
  svg {
    width: 25px;
    height: 25px;
  }
`;
const TournamentItemInfo = styled.div`
  margin-left: 10px;
`;
const Head = styled.h5`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  line-height: 26px;
  margin-bottom: 0;
`;
const Body = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  color: #656565;
`;
export default Info;
