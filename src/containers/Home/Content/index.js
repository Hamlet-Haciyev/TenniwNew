import React from "react";
import styled from "styled-components";
import { Container } from "../../../GlobalStyled";
import { Button } from "../../../components";
import { Link, Navigate } from "react-router-dom";
const Content = () => {
  return (
    <ContentWrapper>
      <Container>
        <MiddleSection>
          <Head>LOREM IPSUM</Head>
          <Text>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum
          </Text>
          <ButtonGroup>
            <Button borradius={"7px"} middle padding={"20px 30px"}>
              <Link to={"/login"}>Login</Link>
            </Button>
            <Button borradius={"7px"} bgcolor={"black"} color="#fff" middle padding={"20px 30px"}>
              <Link to={"/login"}>Guest Mode</Link>
            </Button>
          </ButtonGroup>
        </MiddleSection>
      </Container>
    </ContentWrapper>
  );
};
const ContentWrapper = styled.div`
  padding: 180px 0;
`;
const MiddleSection = styled.div`
  max-width: 600px;
`;
const Head = styled.h1`
  font-family: "Manrope";
  font-weight: 600;
  font-size: 35px;
  line-height: 55px;
  color: #ffffff;
  margin-bottom: 20px;
`;
const Text = styled.p`
  font-family: "Manrope";
  font-weight: 400;
  font-size: 21px;
  line-height: 32px;
  color: #ffffff;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-top: 10px;
  & > button {
    margin-right: 15px;
    font-size: 18px;
    font-weight: 600;
  }
`;
export default Content;
