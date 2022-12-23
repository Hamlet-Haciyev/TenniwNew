import React from "react";
import { Button as AntButton } from "antd";
import styled, { css } from "styled-components";
 const Button = ({
  children,
  borradius,
  bgcolor,
  color,
  width,
  middle,
  padding,
  mb,
  onClick,
  htmlType
}) => {
  return (
    <ButtonStyled
    borradius={borradius}
      bgcolor={bgcolor}
      color={color}
      width={width}
      middle={middle}
      padding={padding}
      mb={mb}
      onClick={onClick}
      htmlType={htmlType}
    >
      {children}
    </ButtonStyled>
  );
};
const ButtonStyled = styled(AntButton)`
  margin-bottom: ${(props) => props.mb && props.mb + "px"};
  ${(props) =>
    props.middle &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
    `}
  padding: ${(props) => props.padding && props.padding};
  border: 1px solid rgba(81, 81, 81, 0.2);
  border-radius: ${(props) => (props.borradius && props.borradius) || "5px"};
  background-color: ${(props) => (props.bgcolor && props.bgcolor) || "#fff"};
  color: ${(props) => (props.color && props.color) || "#000"};
  width: ${(props) => props.width && props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: ${(props) => (props.bgcolor && props.bgcolor) || "#fff"};
    color: ${(props) => (props.color && props.color) || "#000"};
    border: 1px solid transparent;
  }
  &:focus {
    background-color: ${(props) => (props.bgcolor && props.bgcolor) || "#fff"};
    color: ${(props) => (props.color && props.color) || "#000"};
    border: 1px solid transparent;
  }
`;
export default Button