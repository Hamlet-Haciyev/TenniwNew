import React from "react";
import styled from "styled-components";
import { Participant } from "../../../../components";

const Pending = () => {
  const pendings = [
    {
      name: "Hana Riva",
      power: 7,
    },
    {
      name: "Bulat Peters",
      power: 4,
    },
    {
      name: "Frank Ivers",
      power: 9,
    },
  ];
  return (
    <PendingView>
      <Title>
        Pending: <Count>{pendings.length}</Count>
      </Title>
      <ParticipantList>
        {pendings.map((pending,index) => {
          return <Participant key={index} name={pending.name} power={pending.power} />;
        })}
      </ParticipantList>
    </PendingView>
  );
};
const PendingView = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 30px 40px;
`;
const Title = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 44px;
  color: #000000;
  text-align: center;
  margin-bottom: 30px;
`;
const Count = styled.span`
  color: #0067ff;
`;
const ParticipantList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default Pending;
