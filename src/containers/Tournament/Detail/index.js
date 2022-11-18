import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Icon from "../../../helpers/icons";
import Participants from "./Participants";
import Pending from "./Pending";
import Current from "./Current";
import History from "./History";
import Info from "./Info";
import { getTournamentFindById } from "../../../store/tournament";
const TournamentDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const tournamentDetail = useSelector((state) => state.tournament.tournament);
  useEffect(() => {
    dispatch(getTournamentFindById(id));
  }, []);
  return (
    <DetailView>
      <PrevBtn>
        <Link to={"/tournament"}>
          <Icon name="leftArrow" />
        </Link>
      </PrevBtn>
      <Info tournamentDetail={tournamentDetail} />
      <Participants tournamentDetail={tournamentDetail} />.
      {tournamentDetail &&
      tournamentDetail.startDate < new Date() &&
      tournamentDetail.endDate > new Date() ? (
        <Current />
      ) : tournamentDetail.endDate < new Date() ? (
        <History />
      ) : (
        <Pending />
      )}
    </DetailView>
  );
};
const DetailView = styled.div`
  max-width: 1160px;
`;
const PrevBtn = styled.button`
  background: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  margin-bottom: 50px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 20px;
    }
  }
`;
export default TournamentDetail;
