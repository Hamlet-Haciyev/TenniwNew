import { Form, Input } from "antd";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components";
import Icon from "../../../helpers/icons";
import {
  emailRule,
  passwordMin8Rule,
  passwordMax30Rule,
  minUppercaseLetterRule,
  minLowercaseLetterRule,
  minOneDigitRule,
} from "../../../utils/checkValidation";
import { updateAuthhorize } from "../../../store/auth";
import { useSelector, useDispatch } from "react-redux";
import { Col, Row } from "antd";
import LoginImg from "../../../assets/images/login.png";
const { Password } = Input;
const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
    dispatch(updateAuthhorize());
    navigate("/dashboard");
  };
  const onFinishFailed = (values) => {
    console.log("Failed:", values);
  };

  const onClick = () => {
    console.log(form[0]?.email);
    form.setFieldValue({
      email: form[0]?.email,
      password: form[0]?.password,
    });
  };

  return (
    <AuthLayout>
      <Row>
        <Col span={11}>
          <ImageWrapper>
            <Icon name={"logo"} width={"200"} height={"60"} />
            <img src={LoginImg} alt="login" />
          </ImageWrapper>
        </Col>
        <Col span={13}>
          <LoginWrapper>
            <LoginContainer>
              <GoBackLink>
                <Link to={"/"}>
                  <Icon name={"leftArrow"} /> Go back
                </Link>
              </GoBackLink>
              <LoginView>
                <Head>Welcome back!</Head>
                <RedirectInfo>Log in to your account</RedirectInfo>
                <Form
                  name="login"
                  layout="vertical"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  form={form}
                >
                  <Form.Item
                    label="Email or Mobile number"
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email or mobile number!",
                      },
                      emailRule,
                    ]}
                    required={false}
                  >
                    <InputWrapper placeholder={"mark@example.com"} />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                      passwordMin8Rule,
                      passwordMax30Rule,
                    ]}
                    required={false}
                  >
                    <PasswordWrapper />
                  </Form.Item>
                  <ForgotPasswordWrapper>
                    <Link to={"/forgotpassword"}>Forgot your password?</Link>
                  </ForgotPasswordWrapper>
                  <Form.Item>
                    <Button
                      htmlType="submit"
                      onClick={onClick}
                      width={"100%"}
                      bgcolor={"#0066FF"}
                      color={"#fff"}
                      padding={"25px 0"}
                      mb={20}
                    >
                      <ButtonText>Log In</ButtonText>
                    </Button>
                  </Form.Item>
                  <SignUpWrapper>
                    <span>Don’t have an account? </span>
                    <Link to={"/reg"}>Let’s create one!</Link>
                  </SignUpWrapper>
                </Form>
              </LoginView>
            </LoginContainer>
          </LoginWrapper>
        </Col>
      </Row>
    </AuthLayout>
  );
};
const GoBackLink = styled.div`
  display: inline-block;
  margin-bottom: 20px;
  a {
    display: flex;
    align-items: center;
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 27px;
    color: #0067ff;
    svg {
      margin-right: 10px;
    }
  }
`;
const LoginView = styled.div`
  padding: 30px 170px 40px 170px;
  .ant-form {
    width: 355px;
  }
`;
const Head = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  color: #707070;
`;
const RedirectInfo = styled.p`
  font-family: "Manrope";
  font-weight: 600;
  font-size: 32px;
  line-height: 55px;
  color: #000000;
  white-space: nowrap;
  margin-bottom: 20px;
`;
const ForgotPasswordWrapper = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 15px;
  a {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 25px;
    text-align: right;
    color: #0067ff;
  }
`;
const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  font-family: "Manrope";
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  span {
    color: #585858;
    margin-right: 10px;
  }
  a {
    color: #0066ff;
  }
`;
const ButtonText = styled.span`
  font-family: "Manrope";
  font-weight: 800;
  font-size: 15px;
  color: #ffffff;
`;
const AuthLayout = styled.div`
  height: 100vh;
  overflow: hidden;
`;
const LoginWrapper = styled.div`
  background-color: #fff;
  height: 100%;
`;
const LoginContainer = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 60px 0;
`;
const ImageWrapper = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 40px;
    left: 40px;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const InputWrapper = styled(Input)`
  border: 1px solid #c2c8d0;
  border-radius: 7px;
  padding: 17px 10px;
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
export default Login;
