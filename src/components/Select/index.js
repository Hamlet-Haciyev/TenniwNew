import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Select as AntSelect } from "antd";
import styled from "styled-components";

const { Option } = AntSelect;

export const SelectWithoutMemo = forwardRef(function CustomSelect(props, ref) {
  const {
    data = [],
    keys = ["name"],
    placeholder,
    showFirstEmptyOption = false,
    notFoundContent = "Məlumat tapılmadı",
    loading = false,
    disabled = false,
    // size = 'large', // large used in most cases
    getPopupContainer = (trigger) => trigger.parentNode,
    simple = false,
    allowClear,
    positionSelect,
    ...rest
  } = props;

  return (
    <StyledSelect
      {...rest}
      simple={simple}
      className={positionSelect ? "positionSelect" : "simpleSelect"}
    >
      <AntSelect
        {...rest}
        allowClear={allowClear}
        loading={loading}
        notFoundContent={notFoundContent}
        dropdownClassName="selectDropdownClassName"
        optionFilterProp="children"
        getPopupContainer={getPopupContainer}
        //Label-a verdiyimiz datanı göstər
        optionLabelProp="label"
        // suffixIcon={!loading && <Icon component={DownArrow} />}
        filterOption={(input, option) =>
          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
        disabled={disabled || loading}
        // size={size}
        ref={ref}
        placeholder={placeholder || "select"}
        // suffixIcon={<img src={selectArrow} alt={selectArrow} />}
      >
        {showFirstEmptyOption && <Option value="all">Hamısı</Option>}
        {data.map((element, index) => (
          <Option
            key={`${element.id || ""}${index}`}
            disabled={element.disabled}
            value={element?.id}
            // value={<span className="selected_span">{element?.id}</span>} Dizayina uygun select value

            label={element[keys[0]]}
          >
            {/*{`${element[keys[0]]} ${element[keys[1]] || ''} ${element[keys[2]] || ''}`}*/}
            <SelectOptionStyle>
              <span>
                {element[keys[2]] || ""} {element[keys[0]]}
              </span>
              <span>{element[keys[1]] || ""}</span>
            </SelectOptionStyle>
          </Option>
        ))}
      </AntSelect>
    </StyledSelect>
  );
});

export const Select = React.memo(
  SelectWithoutMemo,
  (prevProps, nextProps) =>
    prevProps.data &&
    prevProps.data.length === nextProps.data &&
    nextProps.data.length &&
    prevProps.value === nextProps.value &&
    prevProps.hasError === nextProps.hasError &&
    !prevProps.notUseMemo
);

Select.propTypes = {
  hasError: PropTypes.bool,
  showSearch: PropTypes.bool,
  loading: PropTypes.bool,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
  data: PropTypes.array,
  keys: PropTypes.array,
  showFirstEmptyOption: PropTypes.bool,
};

Select.defaultProps = {
  showSearch: false,
  loading: false,
  placeholder: "",
  onSelect: () => {},
  data: [],
  keys: ["name"],
  showFirstEmptyOption: false,
};

const SelectOptionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-family: Proxima Nova;
`;

const StyledSelect = styled.div`
  .ant-select-focused .ant-select-selector {
    /* border-color: ${(props) =>
      props.simple ? "transparent" : "#DADAE5"} !important; */
    /* box-shadow:  0px 5px 10px  transparent !important; */
  }
  .ant-select-item-option-content {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.fontSize || "16px"};
    font-family: Proxima Nova;
  }
  .ant-select-selector {
    height: 30px !important;
    background: transparent !important;
    /* padding: 16px 24px !important; */
    display: flex;
    align-items: center;
  }
  .ant-select-arrow {
    top: 45% !important;
    right: 25px;
  }
  .ant-select {
    font-size: ${(props) => props.fontSize || "16px"};
    font-family: Proxima Nova;
    /* width: ${(props) => props.width || "100%"} !important; */
    .ant-select-selection-placeholder {
      font-family: Proxima Nova;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      color: #b1b3b3;
      text-align: left;
    }
    &:hover {
      transition: 0.2s all;
      box-sizing: border-box;
      /* box-shadow: 0px 5px 10px ${(props) =>
        props.simple ? "transparent" : "#DADAE5"}; */
      border-radius: 8px;
    }
    &:focus {
      /* border: 1px solid #BFC5D2; */
      box-sizing: border-box;
      /* box-shadow: 0px 5px 10px '#DADAE5'; */
    }
    .ant-select-selection-item {
      text-align: left;
    }
  }
`;

export const MultiSelect = forwardRef(function (props, ref) {
  const { data, mode = "multiple", ...rest } = props;

  return (
    <AntSelect
      mode={mode}
      size="large"
      notFoundContent={null}
      ref={ref}
      {...rest}
    >
      {data.map((item) => (
        <Option
          key={String(item.id)}
          value={mode === "multiple" ? String(item.id) : item.name}
        >
          {item.name}
        </Option>
      ))}
    </AntSelect>
  );
});

export const SelectBorderless = (props) => {
  const {
    data = [],
    keys = ["name"],
    placeholder,
    showFirstEmptyOption = false,
    notFoundContent = "Məlumat tapılmadı",
    loading = false,
    disabled = false,
    fontSize,
    ...rest
  } = props;
  return (
    <SelectContainer fontSize={fontSize}>
      <AntSelect
        {...rest}
        bordered={false}
        style={{ width: 200 }}
        placeholder={placeholder}
        loading={loading}
        notFoundContent={notFoundContent}
        disabled={disabled || loading}
        getPopupContainer={(trigger) => trigger.parentNode}
        // getPopupContainer={() => document.getElementById('layoutFixOverflow')}
        // suffixIcon={<img style={{ marginTop: -8 }} src={down} alt="" />}
      >
        {showFirstEmptyOption && <Option value="all">Hamısı</Option>}
        {data.map((element, index) => (
          <Option
            key={`${element.id || ""}${index}`}
            disabled={element.disabled}
            value={element?.id}
          >
            {`${element[keys[0]]} ${element[keys[1]] || ""} ${
              element[keys[2]] || ""
            }`}
          </Option>
        ))}
      </AntSelect>
    </SelectContainer>
  );
};

const SelectContainer = styled.div`
  width: 200px;
  height: 35px;
  background-color: white;
  /* border: 1px solid #DADAE5; */
  box-sizing: border-box;
  border-radius: 50px;
  display: flex;
  align-items: center;
  .ant-select-item-option-content {
    display: flex;
    align-items: center;
    font-size: ${(props) => props.fontSize || "14px"};
  }
  .ant-select {
    font-size: ${(props) => props.fontSize || "14px"};
  }
`;
