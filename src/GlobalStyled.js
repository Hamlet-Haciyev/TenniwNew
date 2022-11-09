import styled from "styled-components";
export const Container = styled.div`
  max-width: 1376px;
  margin: 0 auto;
`;
export const ListGroup = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  height: 100%;
`;
export const ListGroupItem = styled.li`
  margin: ${(props) => props.margin && props.margin};
  font-family: "Manrope";
  font-weight: 500;
  font-size: 18px;
  line-height: 33px;
  color: #ffffff;
  display: flex;
  align-items: center;
`;
