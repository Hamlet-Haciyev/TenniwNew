import React from "react";
import styled from "styled-components";
import participant from "../../assets/images/participant.png";
import { Progress ,Avatar} from "antd";
import { red, green, blue, yellow, orange } from "@ant-design/colors";
export const Participant = ({ name, power = 0,tournamentType }) => {
  return (
    <ParticipantView>
      <ImgContainer>
      {tournamentType == "Single" ? (
            <img src={participant} />
          ) : (
            <Avatar.Group>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <Avatar
                style={{
                  backgroundColor: "#f56a00",
                }}
              >
                K
              </Avatar>
            </Avatar.Group>
          )}
      </ImgContainer>
      <ParticipantInfo>
        <Name>{name}</Name>
        <ProgressWrapper>
          <Progress
            percent={power}
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
      </ParticipantInfo>
    </ParticipantView>
  );
};
const ParticipantView = styled.div`
  background-color: #fff;
  padding: 5px 10px;
  border: 1px solid #e4e4e4;
  border-radius: 35px;
  display: flex;
  margin-right: 5px;
  margin-bottom: 10px;
  line-height: 0;
`;
const ParticipantInfo = styled.div`
  margin-left: 10px;
`;
const ImgContainer = styled.div``;
const Name = styled.h5`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin-bottom: 4px;
`;
const ProgressWrapper = styled.div`
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
