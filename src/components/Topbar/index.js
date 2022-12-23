import { Avatar } from "antd";
import styled from "styled-components";
import { logo } from "../../assets";
import Icon from "../../helpers/icons";
import { Select } from "../";
import { Link } from "react-router-dom";
import { updateAuthhorize } from "../../store/auth";
import { useSelector, useDispatch } from "react-redux";

const Topbar = () => {
  const dispatch = useDispatch();
  const ChangePage = () => {
    dispatch(updateAuthhorize(false));
  };
  return (
    <TopbarContainer>
      <TopbarRow>
        <ImgContainer onClick={ChangePage}>
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
        </ImgContainer>
        <ListGroup>
          <ListGroupItem>
            <Icon name={"donate"} />
          </ListGroupItem>
          <ListGroupItem>
            <Icon name={"email"} />
          </ListGroupItem>
          <ListGroupItem>
            <Icon name={"notification"} />
          </ListGroupItem>
          <ListGroupItem>
            {/* Muveqqeti */}
            <Avatar src={"https://joeschmoe.io/api/v1/random"} />
            {/* <Select bordered={false}>
              <Option value="jack">
                <Avatar src={"https://joeschmoe.io/api/v1/random"} />
              </Option>
              <Option value="lucy">Lucy</Option>
            </Select> */}
          </ListGroupItem>
        </ListGroup>
      </TopbarRow>
    </TopbarContainer>
  );
};

const ImgContainer = styled.div`
  width: 140px;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const ListGroup = styled.ul`
  display: flex;
  align-items: center;
  gap: 52px;
  margin: 0;
  padding: 0;
`;
const ListGroupItem = styled.li`
  display: flex;
  align-items: center;
  list-style: none;
  svg {
    margin-right: 5px;
  }
  .down {
    font-size: 20px;
    margin-left: 10px;
  }
`;
const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;
  padding: 10px 50px 10px 0;
  width: 100%;
  background-color: #fff;
  border-bottom: 0.4px solid rgba(158, 158, 158, 0.2);
  box-shadow: 0px 4px 30px rgba(45, 45, 45, 0.1);
`;
const TopbarRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
`;
export default Topbar;
