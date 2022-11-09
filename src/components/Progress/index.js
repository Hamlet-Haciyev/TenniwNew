import { Progress as AntProgress } from "antd";
import styled from "styled-components";
export const Progress = ({ percent = 50, width = 50, type, strokeWidth }) => {
  return (
    <ProgressBarWrapper>
      <AntProgress
        percent={percent}
        width={width}
        showInfo={false}
        trailColor={"#E9E7E7"}
        type={type}
        strokeWidth={strokeWidth}
      />
    </ProgressBarWrapper>
  );
};

const ProgressBarWrapper = styled.div`
  span {
    margin: 0 5px;
  }
`;
