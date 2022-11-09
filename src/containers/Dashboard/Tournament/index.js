import { Col, Row, Avatar } from "antd";
import styled from "styled-components";
import { AnalyticBox } from "../AnalyticBox";
import TableTournament from "./Table";
const Tournament = () => {
  return (
    <TournamentContainer>
      <Row gutter={20}>
        <Col span={16}>
          <TournamentParticipants>
            <div>
              <HeaderParticipiant>KIA Tournament</HeaderParticipiant>
              <StartDate>15th of July 2022 </StartDate>
              <EndDate>3rd of August 2022 </EndDate>
            </div>
            <TableTournament />
          </TournamentParticipants>
        </Col>
        <Col span={8}>
          <TournamentAnalytics>
            <HeaderAnalytics>KIA Tournament analytics</HeaderAnalytics>
            <AnalyticsWrapper>
              <AnalyticBox
                head={"Matches Played"}
                barPercent={130}
                text={"3 out of 5"}
                width={285}
              />
              <AnalyticBox
                head={"Games"}
                barPercent={80}
                text={"60 Wins & 100 Losses"}
                width={285}
              />
              <AnalyticBox
                head={"Sets"}
                barPercent={120}
                text={"15 Wins & 20 Losses"}
                width={285}
              />
              <AnalyticBox
                head={"Sets"}
                barPercent={160}
                text={"15 Wins & 20 Losses"}
                width={285}
              />
            </AnalyticsWrapper>
          </TournamentAnalytics>
        </Col>
      </Row>
    </TournamentContainer>
  );
};
const TournamentContainer = styled.div``;
const TournamentParticipants = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px 0;
  box-shadow: 0 0px 5px rgb(0 0 0 / 5%);
`;
const TournamentAnalytics = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 1px 33px;
  box-shadow: 0 0px 5px rgb(0 0 0 / 5%);
`;
const HeaderParticipiant = styled.h4`
  font-family: "Manrope", sans-serif;
  font-size: 17px;
  line-height: 25px;
  color: #11142d;
  display: inline-block;
  padding: 0 20px;
`;
const AnalyticsWrapper = styled.div``;
const StartDate = styled.span`
  font-family: "Manrope";
  font-style: normal;
  /* height: 396px; */
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
  margin: 0px 10px;
`;
const EndDate = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  color: #000000;
`;
const HeaderAnalytics = styled.h4`
  font-family: "Manrope", sans-serif;
  font-size: 17px;
  line-height: 25px;
  margin-top: 1rem;
  color: #11142d;
  display: inline-block;
`;
export default Tournament;
