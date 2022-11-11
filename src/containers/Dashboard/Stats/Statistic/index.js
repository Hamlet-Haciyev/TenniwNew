import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { Progress } from "../../../../components";
const Statistic = () => {
  return (
    <StatisticSection>
      <StatisticHead>Statistic</StatisticHead>
      <Row gutter={[16]}>
        <Col span={12}>
          <ProgressWrapper>
            <Progress
              type={"circle"}
              percent={75}
              strokeWidth={10}
              width={80}
            />
            <StatisticInfo>
              <StatisticInfoHead>Hard</StatisticInfoHead>
              <StatisticInfoWin>5 victories</StatisticInfoWin>
              <StatisticInfoLose>2 losses</StatisticInfoLose>
            </StatisticInfo>
          </ProgressWrapper>
        </Col>
        <Col span={12}>
          <ProgressWrapper>
            <Progress
              type={"circle"}
              percent={66}
              strokeWidth={10}
              width={80}
            />
            <StatisticInfo>
              <StatisticInfoHead>Grass</StatisticInfoHead>
              <StatisticInfoWin>3 victories</StatisticInfoWin>
              <StatisticInfoLose>1 losses</StatisticInfoLose>
            </StatisticInfo>
          </ProgressWrapper>
        </Col>
        <Col span={12}>
          <ProgressWrapper>
            <Progress
              type={"circle"}
              percent={66}
              strokeWidth={10}
              width={80}
            />
            <StatisticInfo>
              <StatisticInfoHead>Teraflex</StatisticInfoHead>
              <StatisticInfoWin>3 victories</StatisticInfoWin>
              <StatisticInfoLose>1 losses</StatisticInfoLose>
            </StatisticInfo>
          </ProgressWrapper>
        </Col>
        <Col span={12}>
          <ProgressWrapper>
            <Progress
              type={"circle"}
              percent={50}
              strokeWidth={10}
              width={80}
            />
            <StatisticInfo>
              <StatisticInfoHead>Clay</StatisticInfoHead>
              <StatisticInfoWin>1 victories</StatisticInfoWin>
              <StatisticInfoLose>1 losses</StatisticInfoLose>
            </StatisticInfo>
          </ProgressWrapper>
        </Col>
      </Row>
    </StatisticSection>
  );
};
const StatisticSection = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.05);
`;
const StatisticHead = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 25px;
  color: #11142d;
  margin-bottom: 10px;
`;
const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const StatisticInfo = styled.div`
  margin-left: 10px;
`;
const StatisticInfoHead = styled.h5`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: #000000;
  margin-bottom: 3px;
`;
const StatisticInfoWin = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  color: #0067ff;
  display: block;
  white-space: nowrap;
`;
const StatisticInfoLose = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 18px;
  color: #000000;
  display: block;
  white-space: nowrap;
`;
export default Statistic;
