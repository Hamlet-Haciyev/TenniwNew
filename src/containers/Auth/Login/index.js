import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Col, Row } from "antd";
import * as Yup from "yup";
import styled from "styled-components";
import Icon from "../../../helpers/icons";
import { updateAuthhorize } from "../../../store/auth";
import { useDispatch } from "react-redux";
import { logo } from "../../../assets";
import { Field, Form, Formik } from "formik";
import { useLocalstorage } from "../../../hooks/useLocalstorage";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getLocalStorage = useLocalstorage("user");
  const handleSubmit = (values) => {
    const { email, password } = JSON.parse(getLocalStorage[0]);
    if (email == values.email && password == values.password) {
      dispatch(updateAuthhorize(true));
      navigate("/dashboard");
    } else {
      alert("Password or Email is not correct");
    }
  };
  return (
    <AuthLayout>
      <Row className="w-full">
        <Col xl={11} lg={24}>
          <div className="relative">
            <div className="absolute top-10 left-10 max-[1199.5px]:hidden">
              <Icon name={"logo"} width={"200"} height={"60"} />
            </div>
            <div className="bg-authBG bg-cover bg-no-repeat h-[100vh] max-[1199.5px]:hidden"></div>
          </div>
        </Col>
        <Col xl={13} lg={24} className="w-full">
          <div className="bg-[#fff] h-[100%]">
            <div className="max-w-[720px] mx-auto py-[58px]">
              <div className="w-[max-content] max-[776px]:pl-5 mb-6">
                <Link
                  to={"/"}
                  className="flex items-center leading-7 text-[#0067ff]"
                >
                  <Icon name={"leftArrow"} />
                  <span className="ml-3 font-Manrope text-[16px]">Go back</span>
                </Link>
              </div>
              <div className="max-[776px]:px-14 min-[776px]:pl-[170px] min-[776px]:pt-7 min-[776px]:pb-8 min-[776px]:pr-48">
                <img
                  src={logo}
                  alt="logo"
                  className="min-[1199.5px]:hidden"
                />
                <h2 className="font-[Manrope] text-lg text-[#707070] leading-8 mb-2">
                  Welcome back!
                </h2>
                <p className="font-[Manrope] font-semibold text-3xl text-[#000000] leading-[55px] mb-5">
                  Log in to your account
                </p>
                <Formik
                  initialValues={{ email: "", password: "" }}
                  validationSchema={Yup.object({
                    email: Yup.string()
                      .email("Invalid email address")
                      .required("Email is Required"),
                    password: Yup.string().required(
                      "Password fill in the blank"
                    ),
                  })}
                  onSubmit={(values) => {
                    handleSubmit(values);
                  }}
                >
                  <Form>
                    <Field name="email">
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="mb-5">
                          <label
                            htmlFor="email"
                            className="block font-Manrope text-md text-[#585858] mb-2"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            placeholder="mark@example.com"
                            {...field}
                            className={`${
                              errors.email ? "border-[#C72D2D]" : ""
                            } font-Manrope border border-[#C2C8D0] rounded-md py-4 px-2 outline-none w-full placeholder:text-[#C2C8D0]`}
                          />
                          {meta.touched && meta.error && (
                            <div className="text-[#C72D2D] text-[13px] font-[Manrope] mt-1 ml-1">
                              {meta.error}
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, form: { touched, errors }, meta }) => (
                        <div className="mb-5">
                          <label
                            htmlFor="password"
                            className="block font-Manrope text-md text-[#585858] mb-2"
                          >
                            Password
                          </label>
                          <input
                            id="password"
                            type="password"
                            placeholder="**************"
                            {...field}
                            className={`${
                              errors.password ? "border-[#C72D2D]" : ""
                            } font-Manrope border border-[#C2C8D0] rounded-md py-4 px-2 outline-none w-full`}
                          />
                          {meta.touched && meta.error && (
                            <div className="text-[#C72D2D] text-[13px] font-[Manrope] mt-1 ml-1">
                              {meta.error}
                            </div>
                          )}
                        </div>
                      )}
                    </Field>
                    <p className="text-end text-md font-Manrope mb-4">
                      <Link
                        to={"/forgotpassword"}
                        className="font-Manrope text-[#0067FF] ml-2"
                      >
                        Forgot your password?
                      </Link>
                    </p>
                    <button
                      type="submit"
                      className="font-Manrope font-bold text-[#FFFFFF] text-md bg-[#0067FF] w-full rounded-md py-4"
                    >
                      Log In
                    </button>
                  </Form>
                </Formik>
                <p className="text-center text-[16px] text-[#585858] font-Manrope mt-5">
                  Don’t have an account?
                  <Link
                    to={"/reg"}
                    className="font-Manrope text-[#0067FF] ml-2"
                  >
                    Let’s create one!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </AuthLayout>
  );
};
const AuthLayout = styled.div`
  background-color: white;
`;

export default Login;
