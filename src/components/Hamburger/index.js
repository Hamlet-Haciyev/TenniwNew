import React from "react";
import { Button as AntButton } from "antd";
import styled from "styled-components";
export const Hamburger = ({ type, toggleCollapsed, children }) => {
  return (
    <HamburgerStyled onClick={toggleCollapsed} type={type}>
      {children}
    </HamburgerStyled>
  );
};

const HamburgerStyled = styled(AntButton)`
  background-color: #f5f5f5;
  border: none;
  box-shadow: none;
  margin-bottom: 40px;  
  padding-right: 5px;
  svg {
    color: black;
  }
  &:hover {
    background-color: #f5f5f5;
  }
  &:focus {
    background-color: #f5f5f5;
  }
`;
