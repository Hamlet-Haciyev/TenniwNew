import React from "react";
import styled from "styled-components";
import { Steps } from "antd";
const { Step } = Steps;

export const StepCustom = ({ steps, current }) => {
  return (
    <StepWrapper>
      <Steps current={current}>
        {steps.map((item) => (
          <StepCustomStyled key={item.title} title={item.title} description={item.description}/>
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
    </StepWrapper>
  );
};
const StepCustomStyled = styled(Step)``;

const StepWrapper = styled.div`
  .steps-content {
    margin-top: 50px;
  }
`;
