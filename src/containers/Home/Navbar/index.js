import { Col, Row, Select } from "antd";
import React from "react";
import styled from "styled-components";
import { Container, ListGroup, ListGroupItem } from "../../../GlobalStyled";
import Icon from "../../../helpers/icons";

const Navbar = () => {
  const { Option } = Select;
  return (
    <NavbarWrapper>
      <Container>
        <Row>
          <Col span={3}>
            <LogoWrapper>
              <Icon name={"logo"} width={"200"} height={"60"}/>
            </LogoWrapper>
          </Col>
          <Col span={21}>
            <NavRSide>
              <ListGroup>
                <ListGroupItem margin="0 20px">
                  <Icon name={"donatecircle"} />
                  <ListGroupItemText>Donate</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem margin="0 20px">
                  <Icon name={"contactUs"} />
                  <ListGroupItemText>Contact us</ListGroupItemText>
                </ListGroupItem>
                <ListGroupItem margin="0 20px">
                  <Icon name={"language"} />
                  <CsSelect
                    defaultValue="azerbaijan"
                    style={{
                      width: 140,
                    }}
                  >
                    <Option value="azerbaijan">Azerbaijan</Option>
                    <Option value="english">English</Option>
                    <Option value="russian">Russian</Option>
                  </CsSelect>
                </ListGroupItem>
              </ListGroup>
            </NavRSide>
          </Col>
        </Row>
      </Container>
    </NavbarWrapper>
  );
};
const NavbarWrapper = styled.nav`
  border: 0.5px solid rgba(255, 255, 255, 0.35);
  padding: 10px 0;
`;
const LogoWrapper = styled.div`
`;
const NavRSide = styled.div`
  display: flex;
  justify-content: end;
  height: 100%;
`;
const ListGroupItemText = styled.span`
  margin-left: 5px;
`;
// Muveqqeti olaraq select. Custom versiyasini yazacam
const CsSelect = styled(Select)`
  font-family: "Manrope";
  font-weight: 500;
  font-size: 18px;
  color: #ffffff;
  .ant-select-selector {
    border: none !important;
    background-color: transparent !important;
  }
`;
export default Navbar;
