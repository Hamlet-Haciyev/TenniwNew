import React, { useState } from "react";
import { Col, Row, Steps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as Yup from "yup";
import { Field } from "formik";
// import { Steps } from "../../../components";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import { useLocalstorage } from "../../../hooks/useLocalstorage";
import Icon from "../../../helpers/icons";
import LoginImg from "../../../assets/images/login.png";
const Register = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Surname is required"),
    email: Yup.string().email("email is not valid").required(),
    phone: Yup.number("phone number can only consist of digits").required(),
  });
  const [value, setValue] = useState();
  const [atLeast8Character, setAtLeast8Character] = useState(false);
  const [hasUppercaseCharacter, sethasUppercaseCharacter] = useState(false);
  const [hasLowercaseCharacter, sethasLowercaseCharacter] = useState(false);
  const [hasNumber, sethasNumber] = useState(false);
  const [hasSpecialCharacter, sethasSpecialCharacter] = useState(false);
  const [storeVal, setStoreVal] = useLocalstorage("user", {});
  const checkPasswordValidation = (psw) => {
    if (psw.trim().length >= 8) {
      setAtLeast8Character(true);
    } else {
      setAtLeast8Character(false);
    }
    if (/(?=.*[A-Z])/g.test(psw)) {
      sethasUppercaseCharacter(true);
    } else {
      sethasUppercaseCharacter(false);
    }
    if (/(?=.*[a-z])/g.test(psw)) {
      sethasLowercaseCharacter(true);
    } else {
      sethasLowercaseCharacter(false);
    }
    if (/(?=.*[0-9])/g.test(psw)) {
      sethasNumber(true);
    } else {
      sethasNumber(false);
    }
    if (/(?=.*[-+_!@#$%^&*., ?])/g.test(psw)) {
      sethasSpecialCharacter(true);
    } else {
      sethasSpecialCharacter(false);
    }
  };
  const navigate = useNavigate();
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
              <div className="">
                <h2 className="font-[Manrope] font-semibold text-[#000000] text-3xl my-10">
                  Create an account
                </h2>
                <div className="h-10">
                  <Steps
                    size="small"
                    current={1}
                    items={[
                      {
                        title: "Finished",
                      },
                      {
                        title: "In Progress",
                      },
                      {
                        title: "Waiting",
                      },
                    ]}
                  />
                </div>
                <MultiStepForm
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    password: "",
                    confirmPassword: "",
                    question: "",
                    answer: "",
                  }}
                  onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                    setStoreVal(JSON.stringify(values));
                    navigate("/login");
                  }}
                >
                  <FormStep
                    stepName="Basic Info"
                    onSubmit={() => console.log("step1 submit")}
                    validationSchema={validationSchema}
                  >
                    <div className="flex flex-col mb-16">
                      <div className="flex justify-between mb-8">
                        <div className="flex flex-col mr-5 w-[50%]">
                          <label
                            className="font-[Manrope] text-[#585858] text-md mb-3"
                            htmlFor="name"
                          >
                            Name
                          </label>
                          <Field name="firstName">
                            {({
                              field, // { name, value, onChange, onBlur }
                              form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                              meta,
                            }) => (
                              <>
                                <input
                                  id="name"
                                  type="text"
                                  placeholder="Mark"
                                  {...field}
                                  className={`font-[Manrope] text-md border ${
                                    meta.touched && meta.error
                                      ? "border-[#C72D2D]"
                                      : "border-[#C2C8D0]"
                                  } rounded-md p-3 outline-none w-full`}
                                />
                                {meta.touched && meta.error && (
                                  <div className="text-red-600 text-sm font-Manrope">
                                    {meta.error}
                                  </div>
                                )}
                              </>
                            )}
                          </Field>
                        </div>
                        <div className="flex flex-col w-[50%]">
                          <label
                            className="font-[Manrope] text-[#585858] text-md mb-3"
                            htmlFor="surname"
                          >
                            Surname
                          </label>
                          <Field name="lastName">
                            {({ field, form: { touched, errors }, meta }) => (
                              <>
                                <input
                                  id="surname"
                                  type="text"
                                  placeholder="Thomas"
                                  {...field}
                                  className={`font-[Manrope] text-md border ${
                                    meta.touched && meta.error
                                      ? "border-[#C72D2D]"
                                      : "border-[#C2C8D0]"
                                  } rounded-md p-3 outline-none w-full`}
                                />
                                {meta.touched && meta.error && (
                                  <div className="text-red-600 text-sm font-Manrope">
                                    {meta.error}
                                  </div>
                                )}
                              </>
                            )}
                          </Field>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col mr-5 w-[50%]">
                          <label
                            className="font-[Manrope] text-[#585858] text-md mb-3"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <Field name="email">
                            {({ field, form: { touched, errors }, meta }) => (
                              <>
                                <input
                                  id="email"
                                  type="email"
                                  placeholder="mark@example.com"
                                  {...field}
                                  className={`font-[Manrope] text-md border ${
                                    meta.touched && meta.error
                                      ? "border-[#C72D2D]"
                                      : "border-[#C2C8D0]"
                                  } rounded-md p-3 outline-none w-full`}
                                />
                                {meta.touched && meta.error && (
                                  <div className="text-red-600 text-sm font-Manrope">
                                    {errors.email}
                                  </div>
                                )}
                              </>
                            )}
                          </Field>
                        </div>
                        <div className="flex flex-col w-[50%]">
                          <label
                            className="font-[Manrope] text-[#585858] text-md mb-3"
                            htmlFor="phone"
                          >
                            Phone
                          </label>
                          {/* <PhoneInput
                            international
                            defaultCountry="AZ"
                            placeholder="Enter phone number"
                            value={value}
                            onChange={setValue}
                            className="font-[Manrope] text-md border border-[#C2C8D0] rounded-md p-3 outline-none"
                            name="phone"
                           /> */}

                          <Field name="phone">
                            {({ field, form: { touched, errors }, meta }) => (
                              <>
                                <input
                                  id="phone"
                                  type="text"
                                  placeholder="XX XXX XX XX"
                                  {...field}
                                  className={`font-[Manrope] text-md border ${
                                    meta.touched && meta.error
                                      ? "border-[#C72D2D]"
                                      : "border-[#C2C8D0]"
                                  } rounded-md p-3 outline-none w-full`}
                                />
                                {meta.touched && meta.error && (
                                  <div className="text-red-600 text-sm font-Manrope">
                                    {meta.error}
                                  </div>
                                )}
                              </>
                            )}
                          </Field>
                        </div>
                      </div>
                    </div>
                  </FormStep>
                  <FormStep
                    stepName="Security"
                    onSubmit={() => console.log("step2 submit")}
                    validationSchema={Yup.object({
                      password: Yup.string()
                        .min(8)
                        .max(15)
                        .required()
                        .matches(
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                        ),
                      confirmPassword: Yup.string().oneOf([
                        Yup.ref("password"),
                        null,
                      ]),
                    })}
                  >
                    <div className="flex mb-16">
                      <div className="flex flex-col w-[50%] mr-5">
                        <label
                          className="font-[Manrope] text-[#585858] text-md mb-3"
                          htmlFor="password"
                        >
                          Password
                        </label>
                        <Field
                          validate={checkPasswordValidation}
                          type="password"
                          name="password"
                          placeholder="**********"
                          id="password"
                          className="font-[Manrope] text-md border border-[#C2C8D0] rounded-md p-3 outline-none"
                        />
                      </div>
                      <div className="flex flex-col w-[50%]">
                        <label
                          className="font-[Manrope] text-[#585858] text-md mb-3"
                          htmlFor="confirmPassword"
                        >
                          Repeat Password
                        </label>
                        <Field
                          type="password"
                          name="confirmPassword"
                          placeholder="**********"
                          id="confirmPassword"
                          className="font-[Manrope] text-md border border-[#C2C8D0] rounded-md p-3 outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <h5 className="font-[Manrope] text-[#585858] text-md mb-5">
                        Your password must be contain:
                      </h5>
                      <ul className="flex items-center flex-wrap justify-between gap-2 mb-10 list-disc pl-4">
                        <li
                          className={`font-[Manrope] ${
                            atLeast8Character
                              ? "text-[#219040]"
                              : "text-[#63666A]"
                          }`}
                        >
                          At least 8 characters
                        </li>
                        <li
                          className={`font-[Manrope] ${
                            hasUppercaseCharacter
                              ? "text-[#219040]"
                              : "text-[#63666A]"
                          }`}
                        >
                          Upper-case letters (A-Z)
                        </li>
                        <li
                          className={`font-[Manrope] ${
                            hasNumber ? "text-[#219040]" : "text-[#63666A]"
                          }`}
                        >
                          Numbers (0-9)
                        </li>
                        <li
                          className={`font-[Manrope] ${
                            hasLowercaseCharacter
                              ? "text-[#219040]"
                              : "text-[#63666A]"
                          }`}
                        >
                          Lower-case letters (a-z)
                        </li>
                        <li
                          className={`font-[Manrope] ${
                            hasSpecialCharacter
                              ? "text-[#219040]"
                              : "text-[#63666A]"
                          }`}
                        >
                          Special characters (@,_*!/-)
                        </li>
                      </ul>
                    </div>
                  </FormStep>
                  <FormStep
                    stepName="Security"
                    onSubmit={() => console.log("step3 submit")}
                    validationSchema={Yup.object({
                      question: Yup.string().required(),
                      answer: Yup.string().required(),
                    })}
                  >
                    <div className="flex flex-col mb-16">
                      <div className="flex flex-col mb-4">
                        <label
                          className="font-[Manrope] text-[#585858] text-md mb-3"
                          htmlFor="password"
                        >
                          Recovery Question
                        </label>
                        <Field
                          component="select"
                          type="text"
                          name="question"
                          placeholder="question"
                          id="question"
                          className="font-[Manrope] text-md border border-[#C2C8D0] rounded-md p-2 outline-none"
                        >
                          <option value="Where did you go on your first flight?">
                            “Where did you go on your first flight?”
                          </option>
                          <option value="SF">San Francisco</option>
                          <option value="CH">Chicago</option>
                          <option value="OTHER">Other</option>
                        </Field>
                      </div>
                      <div className="flex flex-col mb-4">
                        <label
                          className="font-[Manrope] text-[#585858] text-md mb-3"
                          htmlFor="answer"
                        >
                          Answer
                        </label>
                        <Field
                          type="text"
                          name="answer"
                          placeholder="Answer"
                          id="answer"
                          className="font-[Manrope] text-md border border-[#C2C8D0] rounded-md p-3 outline-none"
                        />
                      </div>
                    </div>
                  </FormStep>
                </MultiStepForm>
              </div>
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

export default Register;
