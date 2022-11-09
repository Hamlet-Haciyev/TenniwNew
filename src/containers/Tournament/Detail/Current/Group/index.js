import { Progress, Table } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { red, green, blue, yellow, orange } from "@ant-design/colors";
import player1 from "../../../../../assets/images/user1.png";
const Group = () => {
  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
      align: "center",
      colSpan: 1,
    },
    {
      title: "Player",
      dataIndex: "player",
      key: "player",
      align: "center",
      colSpan: 1,
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
      title: "#of matches",
      dataIndex: "matchCount",
      key: "matchCount",
      align: "center",
      colSpan: 1,
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
      align: "center",
      colSpan: 1,
    },
  ];
  const [data, setData] = useState([
    {
      key: "1",
      rank: 1,
      player: "Bulat Peters",
      matchCount: 1,
      score: 3,
    },
    {
      key: "2",
      rank: 2,
      player: "Hana Riva",
      matchCount: 0,
      score: 0,
    },
    {
      key: "3",
      rank: 3,
      player: "Bulat Peters",
      matchCount: 1,
      score: 3,
    },
    {
      key: "4",
      rank: 4,
      player: "Hana Riva",
      matchCount: 0,
      score: 0,
    },
    {
      key: "5",
      rank: 5,
      player: "Bulat Peters",
      matchCount: 1,
      score: 3,
    },
    {
      key: "6",
      rank: 6,
      player: "Hana Riva",
      matchCount: 1,
      score: 3,
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
    width: 12px !important;
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
export default Group;
