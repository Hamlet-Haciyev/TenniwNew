import React, { useState } from "react";
import { Col, Row, Steps } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Field } from "formik";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import { useLocalstorage } from "../../../hooks/useLocalstorage";
import Icon from "../../../helpers/icons";
import { logo } from "../../../assets";
import {
  validationSchemaForBasicInfo,
  validationSchemaForSecurity,
  validationSchemaForQuestionRecovery,
} from "../../../utils/checkValidation";
const Step = Steps.Step;

const Register = () => {
  const [value, setValue] = useState();
  const [current, setCurrent] = useState(0);
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
      <Row className="h-[100%]">
        <Col xl={11} lg={24}>
          <div className="relative">
            <div className="absolute top-10 left-10 max-[1199.5px]:hidden">
              <Icon name={"logo"} width={"200"} height={"60"} />
            </div>
            <div className="bg-authBG bg-cover bg-no-repeat h-[100vh] max-[1199.5px]:hidden"></div>
          </div>
        </Col>
        <Col xl={13} lg={24} className="w-full">
          <div className="pt-[60px] h-[100%]">
            <div className="w-[max-content] pl-5 mb-6">
              <Link
                to={"/"}
                className="flex items-center leading-7 text-[#0067ff]"
              >
                <Icon name={"leftArrow"} />
                <span className="ml-3 font-Manrope text-[16px]">Go back</span>
              </Link>
            </div>
            <div className="max-w-[715px] mx-auto">
              <img
                src={logo}
                alt="logo"
                className="mb-5 min-[1199.5px]:hidden"
              />
              <h2 className="font-[Manrope] font-semibold text-[#000000] text-3xl my-10">
                Create an account
              </h2>
              <Steps current={current}>
                <Step
                  title="Basic Info"
                  description="Full name, Email & Phone number"
                />
                <Step title="Security" description="Set up a password" />
                <Step
                  title="Recovery question"
                  description="In case you forget the password"
                />
              </Steps>
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
                  onSubmit={() => setCurrent((i) => (i += 1))}
                  validationSchema={validationSchemaForBasicInfo}
                >
                  <div className="flex flex-col mb-16">
                    <div className="flex justify-between mb-8">
                      <div className="flex flex-col mr-5 w-[50%]">
                        <label
                          className="font-[Manrope] text-[#585858] text-md mb-3 w-max"
                          htmlFor="name"
                        >
                          Name
                        </label>
                        <Field name="firstName">
                          {({ field, form: { touched, errors }, meta }) => (
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
                          className="font-[Manrope] text-[#585858] text-md mb-3 w-max"
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
                          className="font-[Manrope] text-[#585858] text-md mb-3 w-max"
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
                          className="font-[Manrope] text-[#585858] text-md mb-3 w-max"
                          htmlFor="phone"
                        >
                          Phone
                        </label>
                        {/* <Field
                          name="phone"
                          render={({
                            field,
                            form: { touched, errors },
                            meta,
                          }) => (
                            <>
                              <PhoneInput
                                id="phone"
                                international
                                defaultCountry="AZ"
                                value={value}
                                onChange={setValue}
                                placeholder="Enter your phone number"
                                className={`font-[Manrope] text-md border ${
                                  meta.touched && meta.error
                                    ? "border-[#C72D2D]"
                                    : "border-[#C2C8D0]"
                                } rounded-md p-3 outline-none w-full`}
                              />
                              {touched[field.name] && errors[field.name] && (
                                <div className="text-red-600 text-sm font-Manrope">
                                  {errors[field.name]}
                                </div>
                              )}
                            </>
                          )}
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
                  onSubmit={() => setCurrent((i) => (i += 1))}
                  validationSchema={validationSchemaForSecurity}
                >
                  <div className="flex mb-16">
                    <div className="flex flex-col w-[50%] mr-5">
                      <label
                        className="font-[Manrope] text-[#585858] text-md mb-3 w-max"
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
                        className="font-[Manrope] text-[#585858] text-md mb-3 w-max"
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
                  validationSchema={validationSchemaForQuestionRecovery}
                >
                  <div className="flex flex-col mb-16">
                    <div className="flex flex-col mb-4">
                      <label
                        className="font-[Manrope] text-[#585858] text-md mb-3 w-max"
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
                        className="font-[Manrope] text-[#585858] text-md mb-3 w-max"
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
          </div>
        </Col>
      </Row>
    </AuthLayout>
  );
};
const AuthLayout = styled.div`
  height: 100%;
  background-color: #fff;
`;

export default Register;
