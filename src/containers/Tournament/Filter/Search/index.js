import React from "react";
import { Input } from "antd";
import styled from "styled-components";
import Icon from "../../../../helpers/icons";
import { useDispatch, useSelector } from "react-redux";
import { searchTournament ,setFilterKeys} from "../../../../store/tournament";
import { useRef } from "react";

const Search = () => {
  // const tournaments = useSelector((state) => state.tournament.data);
  const dispatch = useDispatch();
  const refInput = useRef();
  const changeInput = (e) => {
    // dispatch(filterTournament({ search: e.target.value }));
    setFilterKeys(dispatch({ text: e.target.value, category: "" }));
    // dispatch(searchTournament(e.target.value));
  };
  return (
    <SearchView>
      <Input
        prefix={<Icon name={"search"} />}
        placeholder="Search"
        bordered={false}
        onChange={changeInput}
        ref={refInput}
      />
    </SearchView>
  );
};
const SearchView = styled.div`
  background: rgba(255, 255, 255, 0.85);
  border-radius: 15px;
  padding: 5px 0;
  .ant-input {
    &::placeholder {
      color: #222222;
    }
  }
`;
export default Search;
