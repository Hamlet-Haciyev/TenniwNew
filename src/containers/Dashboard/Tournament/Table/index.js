import React, { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { AvatarGroup, Progress } from "../../../../components";
const TableTournament = () => {
  const [data, setData] = useState([
    {
      rank: "1",
      player: "Bulat Peters",
      h2h: 70,
      surfaceType: "Clay",
      result: "6:4",
      ofmatches: 1,
      score: "3",
    },
    {
      rank: "2",
      player: "Bulat Peters",
      h2h: 50,
      surfaceType: "Clay",
      result: "6:4",
      ofmatches: 1,
      score: "3",
    },
    {
      rank: "3",
      player: "Bulat Peters",
      h2h: 90,
      surfaceType: "Clay",
      result: "6:4",
      ofmatches: 1,
      score: "3",
    },
    {
      rank: "4",
      player: "Bulat Peters",
      h2h: 30,
      surfaceType: "Clay",
      result: "6:4",
      ofmatches: 1,
      score: "3",
    },
    {
      rank: "5",
      player: "Bulat Peters",
      h2h: 30,
      surfaceType: "Clay",
      result: "6:4",
      ofmatches: 1,
      score: "2",
    },
  ]);
  return (
    <Table>
      <Thead>
        <Trow>
          <Ttitle>Rank</Ttitle>
          <Ttitle>Player</Ttitle>
          <Ttitle style={{ marginLeft: "2.5rem" }}>H2H</Ttitle>
          <Ttitle>SurfaceType</Ttitle>
          <Ttitle>Result</Ttitle>
          <Ttitle>Of matches</Ttitle>
          <Ttitle>Score</Ttitle>
        </Trow>
      </Thead>
      <Tbody>
        {data.map((dt, index) => {
          return (
            <Trow key={index} striped={index % 2 == 1}>
              <Tdata>{dt.rank}</Tdata>
              <Tdata>
                <Avatar icon={<UserOutlined size={32} />} />
                <AvatarName>{dt.player}</AvatarName>
              </Tdata>
              <Tdata>
                <span>5</span>
                <Progress
                  percent={dt.h2h}
                  style={{ width: "100px" }}
                  width={70}
                />
                <span>2</span>
              </Tdata>
              <Tdata>{dt.surfaceType}</Tdata>
              <Tdata>{dt.result}</Tdata>
              <Tdata>{dt.ofmatches}</Tdata>
              <Tdata>{dt.score}</Tdata>
            </Trow>
          );
        })}
      </Tbody>
    </Table>
  );
};

const AvatarName = styled.span`
  white-space: nowrap;
  margin-left: 5px;
`;
const Table = styled.table`
  width: 100%;
`;
const Thead = styled.thead`
  padding: 0 10px;
`;
const Tbody = styled.tbody`
  padding: 0 10px;
`;
const Trow = styled.tr`
  display: flex;
  background: ${(props) => (props.striped ? "#F5F5F5" : "")};
`;
const Ttitle = styled.th`
  padding: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 22px;
  color: #757575;
  text-align: center;
  flex: 1;
`;
const Tdata = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  font-family: "Manrope";
  font-size: 15px;
  line-height: 22px;
  color: #000000;
  white-space: nowrap;
  flex: 1;
`;
export default TableTournament;
