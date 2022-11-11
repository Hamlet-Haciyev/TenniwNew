import { Input as AntInput } from "antd";
import styled from "styled-components";
const { Password } = AntInput;
const { TextArea } = AntInput;
export const Input = ({ placeholder, status, suffix }) => {
  return (
    <InputWrapper>
      <AntInput placeholder={placeholder} status={status} suffix={suffix} />
    </InputWrapper>
  );
};
export const TextAreaCustom = () => {
  return <TextAreaWrapper />;
};

export const InputPassword = () => {
  return <PasswordWrapper placeholder="·····················" />;
};
const InputWrapper = styled.div`
  .ant-input {
    border: 1px solid #c2c8d0;
    border-radius: 7px;
    padding: 17px 10px;
  }
`;
const PasswordWrapper = styled(Password)`
  border: 1px solid #c2c8d0;
  border-radius: 7px;
  padding: 17px 10px;
  &::placeholder {
    font-size: 20px;
    width: 20px;
  }
`;
const TextAreaWrapper = styled(TextArea)``;
