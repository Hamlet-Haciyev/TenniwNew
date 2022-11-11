import React, { useState } from "react";
import { Input as AntInput, AutoComplete } from "antd";
import styled from "styled-components";
import PropTypes from "prop-types";

//INPUT
export const Input = React.forwardRef((props, ref) => {
  const {
    width,
    password,
    bgWhit,
    disabled = false,
    maxLength,
    inputValue,
    ...rest
  } = props;
  return (
    <StyledInput width={width} bgWhit={bgWhit} password={password}>
      {password ? (
        <AntInput.Password ref={ref} {...rest} />
      ) : (
        <AntInput
          ref={ref}
          disabled={disabled}
          defaultValue={inputValue}
          maxLength={maxLength}
          {...rest}
        />
      )}
    </StyledInput>
  );
});

Input.propTypes = {
  placeholder: PropTypes.string,
};

//TEXTAREA
export const TextArea = (props) => {
  const { ...rest } = props;
  return (
    <StyledInput>
      <AntInput.TextArea {...rest} />
    </StyledInput>
  );
};

//SEARCH_INPUT
export const SearchInput = ({ header = false, ...rest }) => {
  return (
    <SearchContainer header={header}>
      <div className="search_icon_container">
        {/* <img src={search} alt="search" /> */}
      </div>
      <input
        {...rest}
        type="text"
        placeholder="Search"
        className="search_input"
      />
    </SearchContainer>
  );
};

//AUTOCOMPLETE
export const AutoCompleteInput = ({ ...rest }) => {
  return (
    <StyledAutoComplete>
      <AutoComplete
        {...rest}
        getPopupContainer={(trigger) => trigger.parentNode}
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      />
    </StyledAutoComplete>
  );
};

const StyledInput = styled.div`
  width: ${(props) => props.width && props.width};

  /* əyər password inputdan istifadə ediriksə passwordun css classı işləsin */
  ${(props) => (props.password ? ".ant-input-password" : ".ant-input")} {
    font-family: Proxima Nova;
    font-size: 16px;
    /* line-height: 20px; */
    letter-spacing: 0.05em;
    background: ${(props) => (props.bgWhit ? "#fff" : "#fcfcfc")};
    /* padding: 16px 24px; */
    ::placeholder {
      font-family: Proxima Nova;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.05em;
      color: #9696aa;
    }
    //input number tipində olduqda inputun kənarında aşağı və yuxarı oxlar olmayacaq
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:hover {
      box-sizing: border-box;
      /* box-shadow: 0px 5px 10px #DADAE5; */
    }
    &:focus {
      border: 1px solid #bfc5d2;
      box-sizing: border-box;
      /* box-shadow: 0px 5px 10px #DADAE5; */
    }
  }

  .ant-input:focus,
  .ant-input-password:focus-within {
    outline: 0;
    border-color: #ffb500;
  }

  .ant-input-password input {
    font-family: Proxima Nova;
    font-size: 16px;
    border-radius: 0px;
    background: transparent;
  }

  /* passwor inputunu focus etdikde shadow gorunsun */
  .ant-input-affix-wrapper-focused {
    border: 1px solid #bfc5d2;
    box-sizing: border-box;
    /* box-shadow: 0px 5px 10px #DADAE5; */
  }
`;
const SearchContainer = styled.div`
  width: 100%;
  border-radius: 30px;
  border: ${(props) => (props.header ? "none" : "1px solid #DADAE5")};
  background-color: ${(props) => (props.header ? "#F1F1F5" : "#FFFFFF")};
  display: flex;
  flex-direction: row;
  &:hover {
    background: #e7e9ec;
  }
  &:focus-within {
    background: #e7e9ec;
  }
  .search_input {
    width: 90%;
    height: 35px;
    box-sizing: border-box;
    border: none;
    background-color: transparent;
    font-family: Proxima Nova;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;

    &:focus {
      outline: none;
    }
    ::placeholder {
      font-family: Proxima Nova;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #9696aa;
    }
  }
  .search_icon_container {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  img {
    padding-left: 5px;
  }
`;

const StyledAutoComplete = styled.div`
  .ant-select-focused .ant-select-selector {
    border-color: ${(props) =>
      props.simple ? "transparent" : "#DADAE5"} !important;
    /* box-shadow: 0px 5px 10px #DADAE5 !important; */
  }
  .ant-select-item-option-content {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.fontSize || "16px"};
    font-family: Proxima Nova;
  }
  .ant-select-selector {
    font-family: Proxima Nova;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    ::placeholder {
      font-family: Proxima Nova;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.05em;
      color: #9696aa;
    }
    &:hover {
      box-sizing: border-box;
      /* box-shadow: 0px 5px 10px #DADAE5; */
    }
    &:focus {
      border: 1px solid #bfc5d2 !important;
      /* box-shadow: 0px 5px 10px #DADAE5; */
    }
  }
`;
