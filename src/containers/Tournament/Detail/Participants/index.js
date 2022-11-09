import React from "react";
import styled from "styled-components";
import { Participant } from "../../../../components";
const Participants = ({tournamentDetail}) => {
  return (
    <ParticipantsView>
      <Title>
        Participants: <Count>{tournamentDetail.participants && tournamentDetail.participants.length}</Count>
      </Title>
      <ParticipantList>
        {tournamentDetail.participants && tournamentDetail.participants.map((participant) => {
          return <Participant key={participant.id} name={participant.name} power={participant.power}/>;
        })}
      </ParticipantList>
    </ParticipantsView>
  );
};
const ParticipantsView = styled.div`
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 15px;
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
export default Participants;
