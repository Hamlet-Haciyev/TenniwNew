import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../../../helpers/icons";
import { format } from "date-fns";
const TournamentItem = ({ tournament }) => {
  return (
    <TournamentItemView key={tournament.id}>
      <NameCol>
        <Link to={`/tournament/${tournament?.id}`}>
          <span>
            {tournament.name.length > 20
              ? tournament.name.slice(0, 15) + "..."
              : tournament.name}
          </span>
        </Link>
      </NameCol>
      <StartDateCol>
        <span>{format(tournament.startDate, 'dd.MM.yyyy | kk:mm')}</span>
      </StartDateCol>
      <EndDateCol>
        <span>{format(tournament.endDate, 'dd.MM.yyyy | kk:mm')}</span>
      </EndDateCol>
      <FormatCol>
        <IconView>
          {tournament.format.toLowerCase() == "single" ? (
            <Icon name={"single"} />
          ) : (
            <Icon name={"team"} />
          )}
        </IconView>
        <span>{tournament.format}</span>
      </FormatCol>
      <PlaceCol>
        <Icon name={"location"} />
        <span>{tournament.location}</span>
      </PlaceCol>
      <CourtCol>
        {tournament.court.toLowerCase() == "clay" ? (
          <Icon name={"clay"} />
        ) : (
          <Icon name={"hard"} />
        )}
        <span>{tournament.court}</span>
      </CourtCol>
      <PaymentCol>
        <span>{tournament.payment + "$"}</span>
      </PaymentCol>
      <RulesCol>
        <Icon name={"info"} />
      </RulesCol>
    </TournamentItemView>
  );
};
const TournamentItemView = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  margin-bottom: 15px;
  padding: 15px 30px;
  span {
    white-space: nowrap;
    color: #000;
  }
`;
const NameCol = styled.div`
  text-align: center;
  flex: 1;
`;
const StartDateCol = styled.div`
  text-align: center;
  flex: 1;
`;
const EndDateCol = styled.div`
  text-align: center;
  flex: 1;
`;
const FormatCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const PlaceCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  svg {
    margin-right: 5px;
  }
`;
const CourtCol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  svg {
    margin-right: 5px;
  }
`;
const PaymentCol = styled.div`
  text-align: center;
  flex: 1;
`;
const RulesCol = styled.div`
  text-align: center;
  flex: 1;
`;
const IconView = styled.span`
  margin-right: 5px;
`;
export default TournamentItem;
