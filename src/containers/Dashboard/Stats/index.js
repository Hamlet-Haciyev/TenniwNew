import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import Overview from "./Overview";
import Statistic from "./Statistic";
const Stats = () => {
  return (
    <StatsContainer>
      <Row gutter={[32]}>
        <Col span={16}>
          <Overview />
        </Col>
        <Col span={8}>
          <Statistic />
        </Col>
      </Row>
    </StatsContainer>
  );
};
const StatsContainer = styled.div`
  margin-top: 20px;
`;
export default Stats;
