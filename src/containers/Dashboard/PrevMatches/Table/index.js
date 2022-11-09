import React, { useState } from "react";
import { Avatar } from "antd";
import styled from "styled-components";
import { AvatarGroup } from "../../../../components";
import Icon from "../../../../helpers/icons";
const TablePrevMatches = () => {
  const [data, setData] = useState([
    {
      date: "15.07.2022",
      time: "15:00",
      matchType: "KIA Tournament",
      court: "Clay",
      location: "MOS",
      format: false,
      rival: "Anna Thomas",
      result: "3:1",
    },
    {
      date: "15.07.2022",
      time: "15:00",
      matchType: "Comrade",
      court: "Hard",
      location: "MOS",
      format: true,
      rival: "Anna Thomas",
      result: "3:1",
    },
    {
      date: "15.07.2022",
      time: "15:00",
      matchType: "Final Tournament",
      court: "Hard",
      location: "MOS",
      format: false,
      rival: "Anna Thomas",
      result: "3:1",
    },
  ]);
  return (
    <Table>
      <Thead>
        <Trow>
          <Ttitle>Date</Ttitle>
          <Ttitle>Time</Ttitle>
          <Ttitle>Match type</Ttitle>
          <Ttitle>Court</Ttitle>
          <Ttitle>Location</Ttitle>
          <Ttitle>Format</Ttitle>
          <Ttitle>Rival</Ttitle>
          <Ttitle>Result</Ttitle>
        </Trow>
      </Thead>
      <Tbody>
        {data.map((dt, index) => {
          return (
            <Trow key={index} striped={index % 2 == 1}>
              <Tdata colSpan={1}>{dt.date}</Tdata>
              <Tdata colSpan={1}>{dt.time}</Tdata>
              <Tdata colSpan={1}>{dt.matchType}</Tdata>
              <Tdata colSpan={1}>
                {dt.court == "Clay" ? (
                  <Icon name={"clay"} />
                ) : (
                  <Icon name={"hard"} />
                )}
                <Court>{dt.court}</Court>
              </Tdata>
              <Tdata colSpan={1}>
                <Icon name={"location"} />
                <Location>{dt.location}</Location>
              </Tdata>
              <Tdata colSpan={1}>
                {data[0].format ? (
                  <>
                    <AvatarGroup>
                      <Avatar src="https://joeschmoe.io/api/v1/random" />
                    </AvatarGroup>
                    Team
                  </>
                ) : (
                  <>
                    <Icon name={"defaultuser"} />
                    <Format>Single</Format>
                  </>
                )}
              </Tdata>
              <Tdata colSpan={1}>
                <AvatarGroup>
                  <Avatar src="https://joeschmoe.io/api/v1/random" />
                </AvatarGroup>
                <AvatarName>{dt.rival}</AvatarName>
              </Tdata>
              <Tdata>
                <span>{dt.result}</span>
              </Tdata>
            </Trow>
          );
        })}
      </Tbody>
    </Table>
  );
};

const AvatarName = styled.span`
  white-space: nowrap;
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
  font-weight: 400;
  font-size: 15px;
  flex: 1;
  color: #757575;
`;
const Tdata = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  font-family: "Manrope";
  font-size: 15px;
  color: #000000;
  white-space: nowrap;
  flex: 1;
`;
const Location = styled.span`
  margin-left: 5px;
`;
const Court = styled.span`
  margin-left: 5px;
`;
const Format = styled.span`
  margin-left: 5px;
`;
export default TablePrevMatches;
