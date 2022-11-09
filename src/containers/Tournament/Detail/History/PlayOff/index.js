import React from "react";
import styled from "styled-components";
import { Table, Progress } from "antd";
import { red, green, blue, yellow, orange } from "@ant-design/colors";
import player1 from "../../../../../assets/images/user1.png";

const PlayOff = () => {
  const columns = [
    {
      title: "Stage",
      dataIndex: "stage",
      key: "stage",
      align: "center",
      render: (stage) => <>{stage}</>,
    },
    {
      title: "Player",
      dataIndex: "player",
      key: "player",
      align: "center",
      render: (_, { player }) => (
        <PlayerView>
          <img src={player1} />
          <PlayerInfo>
            <span>{player}</span>
            <ProgressWrapper>
              <Progress
                percent={70}
                steps={10}
                strokeColor={[
                  blue[6],
                  blue[6],
                  green[5],
                  green[5],
                  yellow[5],
                  yellow[5],
                  orange[5],
                  orange[5],
                  red[5],
                  red[5],
                ]}
                showInfo={false}
              />
            </ProgressWrapper>
          </PlayerInfo>
        </PlayerView>
      ),
    },
    {
      title: "Opponent",
      dataIndex: "opponent",
      key: "opponent",
      align: "center",
      render: (_, { opponent }) => (
        <PlayerView>
          <img src={player1} />
          <PlayerInfo>
            <span>{opponent}</span>
            <ProgressWrapper>
              <Progress
                percent={70}
                steps={10}
                strokeColor={[
                  blue[6],
                  blue[6],
                  green[5],
                  green[5],
                  yellow[5],
                  yellow[5],
                  orange[5],
                  orange[5],
                  red[5],
                  red[5],
                ]}
                showInfo={false}
              />
            </ProgressWrapper>
          </PlayerInfo>
        </PlayerView>
      ),
    },
    {
      title: "Surface",
      dataIndex: "surfacetype",
      key: "surfacetype",
      align: "center",
      ellipsis: true,
    },
    {
      title: "Result",
      dataIndex: "results",
      key: "results",
      align: "center",
      render: (results) => <>{results?.map((result) => result + " ")}</>,
    },
  ];
  const data = [
    {
      key: "1",
      stage: "Final",
      player: "Hamlet Hajiyev",
      opponent: "Fuad Agayev",
      surfacetype: "Hard",
      results: ["6:4", "4:1", "10-5"],
    },
    {
      key: "2",
      stage: "1/2",
      player: "Murad Gadirov",
      opponent: "Fuad Isgandarov",
      surfacetype: "Clay",
      results: ["6:4", "4:1", "10-5"],
    },
    {
      key: "3",
      stage: "1/4",
      player: "Hamlet Hajiyev",
      opponent: "Fuad Isgandarov",
      surfacetype: "Clay",
      results: ["6:4", "4:1", "10-5"],
    },
    {
      key: "4",
      stage: "1/8",
      player: "Murad Gadirov",
      opponent: "Fuad Agayev",
      surfacetype: "Hard",
      results: ["6:4", "4:1", "10-5"],
    },
  ];
  return (
    <PlayOffView>
      <Head>
        <Title>Play-Off</Title>
      </Head>
      <Body>
        <Table columns={columns} dataSource={data} pagination={false} />
      </Body>
    </PlayOffView>
  );
};
const PlayOffView = styled.div`
  background: #ffffff;
  border-radius: 21px;
  padding-top: 30px;
  margin-bottom: 20px;
  overflow: hidden;
`;
const Title = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  color: #0067ff;
  text-align: center;
`;
const PlayerView = styled.div`
  display: flex;
`;
const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  span {
    text-align: left;
  }
`;
const ProgressWrapper = styled.div`
  line-height: 10px;
  .ant-progress-steps-item {
    width: 11px !important;
    height: 5px !important;
    background: #c6c6c6b0;
    &:nth-of-type(1) {
      border-radius: 5px 0px 0px 5px;
    }
    &:nth-of-type(10) {
      border-radius: 0px 5px 5px 0px;
    }
  }
`;
const Head = styled.div``;
const Body = styled.div`
  .ant-table-thead > tr > th {
    font-family: "Manrope";
    font-weight: 500;
    font-size: 14px;
    color: #474747;
    border-bottom: none;
    white-space: nowrap;
    background-color:#fff;
    &::before {
      display: none;
    }
  }
  .ant-table-tbody > tr > td {
    border-bottom: none;
  }
  tr:nth-child(odd) {
    background-color: rgba(235, 237, 240, 0.66);
  }
`;
export default PlayOff;
