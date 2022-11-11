import React from "react";
import styled from "styled-components";
export const AnalyticBox = ({ head, barPercent, text, width }) => {
  return (
    <AnalyticBoxStyled>
      <AnalyticHead>{head}</AnalyticHead>
      <AnalyticBar barPercent={barPercent} width={width}></AnalyticBar>
      <AnalyticText>{text}</AnalyticText>
    </AnalyticBoxStyled>
  );
};

const AnalyticBoxStyled = styled.div`
  position: relative;
  margin-bottom: 15px;
`;
const AnalyticHead = styled.h4`
  font-family: "Manrope";
  font-weight: 400;
  font-size: 15px;
  color: #000000;
  margin-bottom: 10px;
`;
const AnalyticBar = styled.div`
  position: relative;
  width: 286px;
  height: 15px;
  background: #e8e8e8;
  border-radius: 4px;
  margin-bottom: 10px;
  width: ${(props) => props.width && props.width + "px"};

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: ${(props) => props.barPercent && props.barPercent + "px"};
    background: linear-gradient(270deg, #0067ff 0%, #4c9fec 100%);
    box-shadow: 0px 0px 15px rgba(24, 120, 249, 0.28);
    border-radius: 4px;
  }
`;
const AnalyticText = styled.p`
  margin-bottom: 0;
`;
