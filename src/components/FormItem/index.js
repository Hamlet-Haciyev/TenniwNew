import React from "react";
import { Form } from "antd";
import styled from "styled-components";

const { Item } = Form;

 const FormItem = ({
  children,
  auto = false,
  info = {
    header: "",
    body: "",
  },
  autoheight = false,
  rules,
  hasFeedback,
  ...rest
}) => {
  return (
    <div>
      <StyledItem
        colon={true}
        rules={rules}
        {...rest}
      >
        {children}
      </StyledItem>
    </div>
  );
};

FormItem.defaultProps = {
  autoheight: false,
};

FormItem.propTypes = {
  // children: PropTypes.element
};

const StyledItem = styled(Item)`
  position: relative;
  margin-bottom: ${({ marginbottom }) => marginbottom || "20px"};
  margin-left: ${({ marginhorizontal }) => marginhorizontal || "0"};
  margin-right: ${({ marginhorizontal }) => marginhorizontal || "0"};
  align-self: start;
  .ant-input{
    border: 1px solid #c2c8d0;
    border-radius: 7px;
    padding: 17px 10px;
    margin-bottom: 5px;
  }
  .ant-form-item-explain-error{
    margin-bottom: 5px;
  }
  .ant-form-item-label {
    padding-bottom: ${({ labelheight }) => labelheight || "5px"};
    margin-bottom: 10px;
    label {
      font-family: "Manrope" !important;
      color: #585858 !important;
    }
  }
  .ant-form-item-required {
    &::before {
      display: none !important;
    }
  }
  .ant-form-item-control {
    /* height: ${({ autoheight }) => autoheight || "50px"}; */
    line-height: unset;
  }

  .ant-form-item-label label {
    font-family: Proxima Nova;
    font-size: 14px;
    line-height: 19px;
    color: #75787b;
    height: 0;
    width: 100%;
    font-weight: 500;
  }

  label > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .ant-form-item-label > label .ant-form-item-tooltip {
    color: #ffb500;
  }
`;

const StyledTooltip = styled.div`
  h3,
  p {
    font-style: normal;
    font-size: 12px;
    line-height: 18px;
    padding: 3px;
  }

  h3 {
    color: #344054;
    font-weight: 500;
  }

  p {
    font-weight: 400;
    color: #555555;
  }
`;
export default FormItem