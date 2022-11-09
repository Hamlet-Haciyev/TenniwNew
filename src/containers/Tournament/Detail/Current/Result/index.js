import { Progress, Table } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { red, green, blue, yellow, orange } from "@ant-design/colors";
import player1 from "../../../../../assets/images/user1.png";
const Result = () => {
  const columns = [
    {
      title: "Player",
      dataIndex: "player",
      key: "player",
      align: "center",
      render: (_, { player }) => (
        <PlayerView>
          <img src={player1} />
          <PlayerInfo>
            <span>{ player }</span>
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
      width:100,
      ellipsis: true,
    },
    {
      title: "Result",
      dataIndex: "results",
      key: "results",
      align: "center",
      width:120,
      render: (results) => <>{results?.map((result) => result +" ")}</>,
    },
  ];
  const [data, setData] = useState([
    {
      key: "1",
      player: "Hamlet Hajiyev",
      opponent: "Fuad Agayev",
      surfacetype: "Hard",
      results: ["6:4", "4:1", "10-5"],
    },
    {
      key: "2",
      player: "Murad Gadirov",
      opponent: "Fuad Isgandarov",
      surfacetype: "Clay",
      results: ["6:4", "4:1", "10-5"],
    },
    {
      key: "3",
      player: "Hamlet Hajiyev",
      opponent: "Fuad Isgandarov",
      surfacetype: "Clay",
      results: ["6:4", "4:1", "10-5"],
    },
    {
      key: "4",
      player: "Murad Gadirov",
      opponent: "Fuad Agayev",
      surfacetype: "Hard",
      results: ["6:4", "4:1", "10-5"],
    },
    {
      key: "5",
      player: "Hamlet Hajiyev",
      opponent: "Fuad Isgandarov",
      surfacetype: "Clay",
      results: ["6:4", "4:1", "10-5"],
    },
    {
      key: "6",
      player: "Murad Gadirov",
      opponent: "Fuad Agayev",
      surfacetype: "Hard",
      results: ["6:4", "4:1", "10-5"],
    },
  ]);
  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};
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
export default Result;
