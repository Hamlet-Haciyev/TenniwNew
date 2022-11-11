import styled from "styled-components";
import TablePrevMatches from "./Table";
const PrevMatches = () => {
  return (
    <PrevMatchesContainer>
      <Header>
        <h4>Previous matches</h4>
        <span>See all ➞</span>
      </Header>
      <TablePrevMatches />
    </PrevMatchesContainer>
  );
};
const PrevMatchesContainer = styled.article`
  background-color: #fff;
  padding: 25px 0;
  border-radius: 20px;
  margin-top: 20px;
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
export default PrevMatches;
