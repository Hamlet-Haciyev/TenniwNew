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
  border: none;
  box-shadow: none;
  `;
