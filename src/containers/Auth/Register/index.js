import React, { useEffect, useState } from "react";
import { Form, Col, Row, Select, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import {
  FormItem,
  // InputPassword,
  Button,
  StepCustom,
} from "../../../components";
import Icon from "../../../helpers/icons";
import {
  emailRule,
  min6CharactersRule,
  mobilePrefixRule,
} from "../../../utils/checkValidation";
import { updateAuthhorize } from "../../../store/auth";
import { useDispatch } from "react-redux";
import LoginImg from "../../../assets/images/login.png";
import ClockCircleOutlined from "@ant-design/icons/ClockCircleOutlined";
import { addUserInfo } from "../../../store/user";
import { Carousel, CarouselItem } from "./form";
const Register = () => {
  const [formData, setFormData] = useState([]);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { Option } = Select;

  useEffect(() => {
    if (formData) {
      // form.setFieldsValue({
      //   fname: formData[0]?.fname,
      //   surname: formData[0]?.surname,
      //   email: formData[0]?.email,
      //   phone: formData[0]?.phone,
      //   password: formData[0]?.password,
      //   question: formData[0]?.question,
      //   answer: formData[0]?.answer,
      // });
      // form.setFieldsValue({
      //   fname: "formData[0].fname",
      //   surname: "formData[0].surname",
      //   email: "formData[0].email",
      //   phone: "formData[0].phone",
      //   password: "formData[0].password",
      //   question: "formData[0].question",
      //   answer: "formData[0].answer",
      // });
    }
  }, []);
  const steps = [
    {
      title: "Basic Info",
      description: "Full name, Email & Phone number",
      content: (
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <FormItem
              label={"Name"}
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please enter first name",
                },
              ]}
              marginbottom="25px"
            >
              <Input type="text" placeholder={"Mark"} />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              label={"Surname"}
              name="surname"
              rules={[
                {
                  required: true,
                  message: "Please enter last name",
                },
              ]}
              marginbottom="25px"
            >
              <Input type="text" placeholder={"Thomas"} />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              label={"Email"}
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter email or mobile number",
                },
                emailRule,
              ]}
              marginbottom="25px"
            >
              <Input type="text" placeholder={"mark@example.com"} />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              label={"Phone number"}
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Please enter email or mobile number",
                },
                mobilePrefixRule,
              ]}
              marginbottom="25px"
            >
              <Input type="text" placeholder={"XX XXX XX XX"} />
            </FormItem>
          </Col>
        </Row>
      ),
    },
    {
      title: "Security",
      description: "Set up a password",
      content: (
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <FormItem
              label={"Password"}
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter password",
                },
              ]}
              marginbottom="25px"
            >
              <Input.Password />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem
              label={"Repeat Password"}
              name="repeatpassword"
              rules={[
                {
                  required: true,
                  message: "Please enter repeat password",
                },
              ]}
              marginbottom="25px"
            >
              <Input.Password />
            </FormItem>
          </Col>
          <PasswordRequirements>
            <RequirementHead>You password must contain</RequirementHead>
            <RequirementDescription>
              <RequirementCriteria>
                <Icon name={"checkTrue"} />
                At least 8 characters
              </RequirementCriteria>
              <RequirementCriteria>
                <Icon name={"checkTrue"} />
                Upper-case letters(A-Z)
              </RequirementCriteria>
              <RequirementCriteria>
                <Icon name={"checkTrue"} />
                Numbers(0-9)
              </RequirementCriteria>
              <RequirementCriteria>
                <Icon name={"checkTrue"} />
                Lower-case letters(a-z)
              </RequirementCriteria>
              <RequirementCriteria>
                <Icon name={"checkTrue"} />
                Special characters(@,._*|/-)
              </RequirementCriteria>
            </RequirementDescription>
          </PasswordRequirements>
        </Row>
      ),
    },
    {
      title: "Recovery Question",
      description: "In case you forget the password",
      content: (
        <>
          <Select
            defaultValue="lucy"
            style={{
              width: 100 + "%",
            }}
            labelInValue={false}
          >
            <Option value="jack">
              "Where did you go on your first flight?"0
            </Option>
            <Option value="lucy">
              "Where did you go on your first flight?"1
            </Option>
            <Option value="tom">
              "Where did you go on your first flight?"2
            </Option>
          </Select>
          <FormItem
            label={"Answer"}
            name="answer"
            rules={[
              // {
              //   required: true,
              //   message: "Your answer should consists of minimum 4 symbols",
              // },
            ]}
          >
            <Input suffix={<ClockCircleOutlined />} />
          </FormItem>
          <SecurityQuestionText>
            Select a security question. It will help us verify your identity
            should you forget your password
          </SecurityQuestionText>
        </>
      ),
    },
  ];
  const onFinish = (values) => {
    console.log(values);
    setFormData([values]);
  };
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
    if (current == 2) {
      setCurrent(0);
      navigate("/login");
    }
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
          <RegisterWrapper>
            <RegisterContainer>
              <GoBackLink>
                <Link to={"/"}>
                  <Icon name={"leftArrow"} /> Go back
                </Link>
              </GoBackLink>
              <RegisterView>
                <RegisterHead>Create an account</RegisterHead>
                <StepsWrapper>
                  <Form
                    name="register"
                    layout="vertical"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                    form={form}
                  >
                    {/* <Carousel>
                      <CarouselItem>
                        <Row gutter={[16]}>
                          <Col span={12}>
                            <FormItem
                              label={"Name"}
                              name="name"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter first name",
                                },
                              ]}
                              marginbottom="25px"
                            >
                              <Input type="text" placeholder={"Mark"} />
                            </FormItem>
                          </Col>
                          <Col span={12}>
                            <FormItem
                              label={"Surname"}
                              name="surname"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter last name",
                                },
                              ]}
                              marginbottom="25px"
                            >
                              <Input type="text" placeholder={"Thomas"} />
                            </FormItem>
                          </Col>
                          <Col span={12}>
                            <FormItem
                              label={"Email"}
                              name="email"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Please enter email or mobile number",
                                },
                                emailRule,
                              ]}
                              marginbottom="25px"
                            >
                              <Input
                                type="text"
                                placeholder={"mark@example.com"}
                              />
                            </FormItem>
                          </Col>
                          <Col span={12}>
                            <FormItem
                              label={"Phone number"}
                              name="phone"
                              rules={[
                                {
                                  required: true,
                                  message:
                                    "Please enter email or mobile number",
                                },
                                mobilePrefixRule,
                              ]}
                              marginbottom="25px"
                            >
                              <Input type="text" placeholder={"XX XXX XX XX"} />
                            </FormItem>
                          </Col>
                        </Row>
                      </CarouselItem>
                      <CarouselItem>
                        <Row gutter={[16, 16]}>
                          <Col span={12}>
                            <FormItem
                              label={"Password"}
                              name="password"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter password",
                                },
                              ]}
                              marginbottom="25px"
                            >
                              <Input.Password />
                            </FormItem>
                          </Col>
                          <Col span={12}>
                            <FormItem
                              label={"Repeat Password"}
                              name="repeatpassword"
                              rules={[
                                {
                                  required: true,
                                  message: "Please enter repeat password",
                                },
                              ]}
                              marginbottom="25px"
                            >
                              <Input.Password />
                            </FormItem>
                          </Col>
                          <PasswordRequirements>
                            <RequirementHead>
                              You password must contain
                            </RequirementHead>
                            <RequirementDescription>
                              <RequirementCriteria>
                                <Icon name={"checkTrue"} />
                                At least 8 characters
                              </RequirementCriteria>
                              <RequirementCriteria>
                                <Icon name={"checkTrue"} />
                                Upper-case letters(A-Z)
                              </RequirementCriteria>
                              <RequirementCriteria>
                                <Icon name={"checkTrue"} />
                                Numbers(0-9)
                              </RequirementCriteria>
                              <RequirementCriteria>
                                <Icon name={"checkTrue"} />
                                Lower-case letters(a-z)
                              </RequirementCriteria>
                              <RequirementCriteria>
                                <Icon name={"checkTrue"} />
                                Special characters(@,._*|/-)
                              </RequirementCriteria>
                            </RequirementDescription>
                          </PasswordRequirements>
                        </Row>
                      </CarouselItem>
                      <CarouselItem>
                        <>
                          <Select
                            defaultValue="lucy"
                            style={{
                              width: 100 + "%",
                            }}
                            labelInValue={false}
                          >
                            <Option value="jack">
                              "Where did you go on your first flight?"0
                            </Option>
                            <Option value="lucy">
                              "Where did you go on your first flight?"1
                            </Option>
                            <Option value="tom">
                              "Where did you go on your first flight?"2
                            </Option>
                          </Select>
                          <FormItem
                            label={"Answer"}
                            name="answer"
                            rules={[
                              {
                                required: true,
                                message:
                                  "Your answer should consists of minimum 4 symbols",
                              },
                            ]}
                          >
                            <Input suffix={<ClockCircleOutlined />} />
                          </FormItem>
                          <SecurityQuestionText>
                            Select a security question. It will help us verify
                            your identity should you forget your password
                          </SecurityQuestionText>
                        </>
                      </CarouselItem>
                    </Carousel> */}
                    <Row gutter={[16, 16]}>
                    <StepCustom steps={steps} current={current}/>

                      <Col span={24}>
                        <NextSection>
                          <p>
                            Already have an account?
                            <Link to="/login">Log In</Link>
                          </p>
                          <Button
                            htmlType={current == 2 ? "submit" : "button"}
                            bgcolor={"#0067FF"}
                            color="#fff"
                            width={"115px"}
                            padding={"20px 0"}
                            onClick={next}
                          >
                            {current == 2 ? "Submit" : "Next"}
                          </Button>
                        </NextSection>
                      </Col>
                    </Row>
                  </Form>
                </StepsWrapper>
              </RegisterView>
            </RegisterContainer>
          </RegisterWrapper>
        </Col>
      </Row>
    </AuthLayout>
  );
};
const RegisterWrapper = styled.div`
  background-color: #fff;
  height: 100%;
`;
const RegisterContainer = styled.div`
  max-width: 715px;
  margin: 0 auto;
  padding: 60px 0;
`;
const RegisterView = styled.div`
  padding: 30px;
`;
const AuthLayout = styled.div`
  height: 100vh;
  overflow: hidden;
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
const GoBackLink = styled.div`
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
const RegisterHead = styled.h2`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 600;
  font-size: 31px;
  line-height: 55px;
  color: #000000;
  margin-bottom: 40px;
`;
const NextSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  p {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
    color: #585858;
    margin-bottom: 0;
    a {
      margin-left: 5px;
    }
  }
`;
const StepsWrapper = styled.div`
  margin-bottom: 30px;
`;
const PasswordRequirements = styled.div`
  margin-top: 30px;
`;
const RequirementDescription = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 15px;
`;
const RequirementCriteria = styled.span`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #219040;
  margin-bottom: 10px;
  width: 200px;
  white-space: nowrap;
  svg {
    margin-right: 5px;
  }
`;
const RequirementHead = styled.h4`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #585858;
`;
const SecurityQuestionText = styled.p`
  font-family: "Manrope";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #666666;
`;
export default Register;
