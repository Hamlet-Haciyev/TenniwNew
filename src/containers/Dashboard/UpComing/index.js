import styled from "styled-components";
import TableUpComing from "./Table";
const UpComing = () => {
  return (
    <UpComingContainer>
      <Header>
        <h4>Upcoming matches</h4>
        <span>See all ➞</span>
      </Header>
      <TableUpComing />
    </UpComingContainer>
  );
};
const UpComingContainer = styled.article`
  background-color: #fff;
  padding: 25px 0;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.05);
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 25px;
  h4 {
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 25px;
    color: #11142d;
  }
`;
export default UpComing;
