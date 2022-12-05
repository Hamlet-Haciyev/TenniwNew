import React, { useState } from "react";
import { Form, Col, Row, Select, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Icon from "../../../helpers/icons";
import LoginImg from "../../../assets/images/login.png";
import * as Yup from "yup";
import {
  Formik,
  useFormik,
  Field,
  ErrorMessage,
  yupToFormErrors,
} from "formik";
import MultiStepForm, { FormStep } from "./MultiStepForm";

const Register = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Name is required"),
    lastName: Yup.string().required("Surname is required"),
  });
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
                <h2 className="font-[Manrope] font-semibold text-[#000000] text-3xl mb-10">
                  Create an account
                </h2>
                <div className="h-[100px] mb-10">
                  Step by Step Register (Progress)
                </div>
                <MultiStepForm
                  initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                  }}
                  onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                  }}
                >
                  <FormStep
                    stepName="Basic Info"
                    onSubmit={() => console.log("step1 submit")}
                    validationSchema={validationSchema}
                  >
                    <div className="flex flex-col">
                      <label
                        className="font-[Manrope] text-[#585858] text-md"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <Field
                        type="text"
                        name="firstName"
                        placeholder="Name"
                        id="name"
                        className="font-[Manrope] text-md border border-[#C2C8D0] rounded-md px-2 py-1 outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label
                        className="font-[Manrope] text-[#585858] text-md"
                        htmlFor="surname"
                      >
                        Surname
                      </label>
                      <Field
                        id="surname"
                        type="text"
                        name="lastName"
                        placeholder="Surname"
                        className="font-[Manrope] text-md border border-[#C2C8D0] rounded-md px-2 py-1 outline-none"
                      />
                    </div>
                  </FormStep>
                  <FormStep
                    stepName="Security"
                    onSubmit={() => console.log("step2 submit")}
                    validationSchema={Yup.object({
                      email: Yup.string().email().required(),
                      phone: Yup.number().required(),
                    })}
                  >
                    <div className="flex flex-col">
                      <label
                        className="font-[Manrope] text-[#585858] text-md"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                        className="font-[Manrope] text-md border border-[#C2C8D0] rounded-md px-2 py-1"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label
                        className="font-[Manrope] text-[#585858] text-md"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <Field
                        type="number"
                        name="phone"
                        placeholder="Phone"
                        id="phone"
                        className="font-[Manrope] text-md border border-[#C2C8D0] rounded-md px-2 py-1 mx-2"
                      />
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
//#region Sing up (old)
{
  // const steps = [
  //   {
  //     title: "Basic Info",
  //     description: "Full name, Email & Phone number",
  //     content: (
  //       <Row gutter={[16, 16]}>
  //         <Col span={12}>
  //           <FormItem
  //             label={"Name"}
  //             name="name"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please enter first name",
  //               },
  //             ]}
  //             marginbottom="25px"
  //           >
  //             <Input type="text" placeholder={"Mark"} />
  //           </FormItem>
  //         </Col>
  //         <Col span={12}>
  //           <FormItem
  //             label={"Surname"}
  //             name="surname"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please enter last name",
  //               },
  //             ]}
  //             marginbottom="25px"
  //           >
  //             <Input type="text" placeholder={"Thomas"} />
  //           </FormItem>
  //         </Col>
  //         <Col span={12}>
  //           <FormItem
  //             label={"Email"}
  //             name="email"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please enter email or mobile number",
  //               },
  //               emailRule,
  //             ]}
  //             marginbottom="25px"
  //           >
  //             <Input type="text" placeholder={"mark@example.com"} />
  //           </FormItem>
  //         </Col>
  //         <Col span={12}>
  //           <FormItem
  //             label={"Phone number"}
  //             name="phone"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please enter email or mobile number",
  //               },
  //               mobilePrefixRule,
  //             ]}
  //             marginbottom="25px"
  //           >
  //             <Input type="text" placeholder={"XX XXX XX XX"} />
  //           </FormItem>
  //         </Col>
  //       </Row>
  //     ),
  //   },
  //   {
  //     title: "Security",
  //     description: "Set up a password",
  //     content: (
  //       <Row gutter={[16, 16]}>
  //         <Col span={12}>
  //           <FormItem
  //             label={"Password"}
  //             name="password"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please enter password",
  //               },
  //             ]}
  //             marginbottom="25px"
  //           >
  //             <Input.Password />
  //           </FormItem>
  //         </Col>
  //         <Col span={12}>
  //           <FormItem
  //             label={"Repeat Password"}
  //             name="repeatpassword"
  //             rules={[
  //               {
  //                 required: true,
  //                 message: "Please enter repeat password",
  //               },
  //             ]}
  //             marginbottom="25px"
  //           >
  //             <Input.Password />
  //           </FormItem>
  //         </Col>
  //         <PasswordRequirements>
  //           <RequirementHead>You password must contain</RequirementHead>
  //           <RequirementDescription>
  //             <RequirementCriteria>
  //               <Icon name={"checkTrue"} />
  //               At least 8 characters
  //             </RequirementCriteria>
  //             <RequirementCriteria>
  //               <Icon name={"checkTrue"} />
  //               Upper-case letters(A-Z)
  //             </RequirementCriteria>
  //             <RequirementCriteria>
  //               <Icon name={"checkTrue"} />
  //               Numbers(0-9)
  //             </RequirementCriteria>
  //             <RequirementCriteria>
  //               <Icon name={"checkTrue"} />
  //               Lower-case letters(a-z)
  //             </RequirementCriteria>
  //             <RequirementCriteria>
  //               <Icon name={"checkTrue"} />
  //               Special characters(@,._*|/-)
  //             </RequirementCriteria>
  //           </RequirementDescription>
  //         </PasswordRequirements>
  //       </Row>
  //     ),
  //   },
  //   {
  //     title: "Recovery Question",
  //     description: "In case you forget the password",
  //     content: (
  //       <>
  //         <Select
  //           defaultValue="lucy"
  //           style={{
  //             width: 100 + "%",
  //           }}
  //           labelInValue={false}
  //         >
  //           <Option value="jack">
  //             "Where did you go on your first flight?"0
  //           </Option>
  //           <Option value="lucy">
  //             "Where did you go on your first flight?"1
  //           </Option>
  //           <Option value="tom">
  //             "Where did you go on your first flight?"2
  //           </Option>
  //         </Select>
  //         <FormItem
  //           label={"Answer"}
  //           name="answer"
  //           rules={
  //             [
  //               // {
  //               //   required: true,
  //               //   message: "Your answer should consists of minimum 4 symbols",
  //               // },
  //             ]
  //           }
  //         >
  //           <Input suffix={<ClockCircleOutlined />} />
  //         </FormItem>
  //         <SecurityQuestionText>
  //           Select a security question. It will help us verify your identity
  //           should you forget your password
  //         </SecurityQuestionText>
  //       </>
  //     ),
  //   },
  // ];
  /* <RegisterView>
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
              </RegisterView> */
}
//#endregion
//#region yup and react-hook-form
// const {
//   register,
//   handleSubmit,
//   formState: { errors, isValid },
// } = useForm({
//   mode: "all",
//   resolver: yupResolver(schema),
// });
{
  /* <form onSubmit={handleSubmit(onSubmit)}>
{current == 0 ? (
  <div className="flex">
    <div className="flex flex-col">
      <label
        className="font-[Manrope] text-[#585858] text-sm"
        htmlFor="firstname"
      >
        Firstname
      </label>
      <input
        className="rounded-md px-3 pt-2 border border-blue mx-1"
        {...register("firstname")}
        id="firstname"
      />
      <p>{errors.firstname?.message}</p>
    </div>
    <div className="flex flex-col">
      <label
        className="font-[Manrope] text-[#585858] text-sm"
        htmlFor="lastname"
      >
        Lastname
      </label>
      <input
        className="rounded-md px-3 pt-2 border border-blue mx-1"
        {...register("lastname")}
        id="lastname"
      />
    </div>
  </div>
) : (
  <div className="flex">
    <div className="flex flex-col">
      <label
        className="font-[Manrope] text-[#585858] text-sm"
        htmlFor="email"
      >
        email
      </label>
      <input
        className="rounded-md px-3 pt-2 border border-blue mx-1"
        {...register("email")}
        id="email"
      />
      {errors.email && (
        <p className="text-red-600 text-sm mt-2">
          {errors.email?.message}
        </p>
      )}
    </div>
    <div className="flex flex-col">
      <label
        className="font-[Manrope] text-[#585858] text-sm"
        htmlFor="phone"
      >
        phone number
      </label>
      <input
        className="rounded-md px-3 pt-2 border border-blue mx-1"
        {...register("phonenumber")}
        id="phone"
      />
    </div>
  </div>
)}
<div className="flex items-center justify-between pt-10">
  <p className="font-Manrope] text-[#58585] text-md">
    Already have an account?
    <Link to={"/login"} className="text-[#0067FF] ml-2">
      Log in
    </Link>
  </p>
  {renderButton()}
</div>
</form> */
}
//#endregion
