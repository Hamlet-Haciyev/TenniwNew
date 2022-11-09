import { Col, Row, Progress, Table } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Group from "./Group";
import Result from "./Result";
const Current = () => {
  return (
    <CurrentView>
      <Row gutter={16}>
        <Col span={11}>
          <GroupView>
            <Title>
              Group - <span>3A</span>
            </Title>
            <Body>
              <Group />
            </Body>
          </GroupView>
        </Col>
        <Col span={13}>
          <ResultView>
            <Title>Results</Title>
            <Body>
              <Result />
            </Body>
          </ResultView>
        </Col>
      </Row>
    </CurrentView>
  );
};
const CurrentView = styled.div``;
const GroupView = styled.div`
  background-color: #fff;
  padding: 30px 0;
  border-radius: 20px;
  margin-bottom: 20px;
`;
const ResultView = styled.div`
  background-color: #fff;
  padding: 30px 0;
  border-radius: 20px;
  margin-bottom: 20px;
`;
const Title = styled.div`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 33px;
  color: #000000;
  text-align: center;
  span {
    color: #0067ff;
  }
`;
const Body = styled.div`
  .ant-table-thead > tr > th {
    font-family: "Manrope";
    font-weight: 500;
    font-size: 14px;
    color: #474747;
    background-color: transparent;
    border-bottom: none;
    white-space: nowrap;
    &::before {
      display: none;
    }
  }
  .ant-table-tbody > tr > td {
    border-bottom: none;
  }
  tr:nth-child(even) {
    background-color: rgba(235, 237, 240, 0.66);
  }
`;


export default Current;
