import React from "react";
import { Col, Row, Slider, Checkbox } from "antd";
import { Form,Field, Formik, useField } from "formik";
import * as Yup from "yup";
const marks = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
};

const MyCheckbox = ({ label, ...props }) => {
  const [field] = useField(props);
  return (
    <div className="mb-1">
      <Checkbox {...field}>{label}</Checkbox>
    </div>
  );
};

const AddPartner = () => {
  const initialValues = {
    // rivalRate: {
    //   min: 0,
    //   max: 0,
    // },
    sex: "not important",
    gameType: [],
    courtPayment: [],
    city: "",
    phone: "",
    comment: "",
    // datetime: "",
    // expirationDate: "",
  };
  const getRivalLevel = (value) => {
    const [min, max] = value;
    console.log(min, max);
  };

  return (
    <div className="bg-white w-full py-16 min-h-[100%]">
      <div className="flex flex-wrap gap-1">
        <div className="max-w-[1100px] mx-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={Yup.object({
              // rivalRate: Yup.object()
              //   .shape({
              //     min: Yup.number(),
              //     max: Yup.number(),
              //   })
              //   .required(),
              sex: Yup.string().required("required"),
              gameType: Yup.array().required("Must have game type"),
              courtPayment: Yup.array().required("Must have payment type"),
              city: Yup.string().required("required"),
              phone: Yup.string().required("required"),
              comment: Yup.string().required("required"),
              // expirationDate: Yup.date()
              //   .transform(function (value, originalValue) {
              //     if (this.isType(value)) {
              //       return value;
              //     }
              //     const result = parse(originalValue, "dd.MM.yyyy", new Date());
              //     return result;
              //   })
              //   .typeError("please enter a valid date")
              //   .required(),
            })}
            onSubmit={(values) => alert(JSON.stringify(values,null,2))}
          >
            {({ values }) => (
              <Form>
                <Row gutter={[32]}>
                  <Col lg={8} md={12}>
                    <div className="">
                      <h2 className="font-[Manrope] font-semibold text-[#242731] text-2xl mb-3">
                        Add New Post
                      </h2>
                      <p className="font-[Manrope] text-[#575F6E] text-sm mb-10">
                        Поля со звездочкой * обязательны для заполнения.
                      </p>
                      <div className="">
                        <label className="block font-[Manrope] text-[#242731] text-sm">
                          Opponent's level
                        </label>
                        {/* <Field
                        name="rivalRate"
                        render={({ field }) => (
                          <Slider
                            range
                            marks={marks}
                            defaultValue={[2, 5]}
                            min={1}
                            max={10}
                            {...field}
                          />
                        )}
                      /> */}
                        {/* <Field name="rivalRate">
                      {({ field, form: { touched, errors }, meta }) => (
                        <Slider
                          range
                          onChange={getRivalLevel}
                          marks={marks}
                          defaultValue={[2, 5]}
                          min={1}
                          max={10}
                          {...field}
                        />
                      )}
                    </Field> */}
                      </div>
                      <div className="">
                        <label className="block font-Manrope text-[#242731] text-md mb-2">
                          The desired gender of the opponent
                        </label>
                        <Field
                          name="sex"
                          component="select"
                          className="rounded-md border border-[#E1E1E1] py-2 px-1 w-full cursor-pointer outline-none"
                        >
                          <option value="female">Female</option>
                          <option value="male">Male</option>
                          <option value="not important">Not important</option>
                        </Field>
                      </div>
                      <div className="mt-2">
                        <label className="block font-Manrope text-[#242731] text-md mb-2">
                          Game Type
                        </label>
                        <MyCheckbox
                          type="checkbox"
                          name="gameType"
                          value={"Single play"}
                          label="Single play"
                        />
                        <MyCheckbox
                          type="checkbox"
                          name="gameType"
                          value={"Pair play"}
                          label="Pair play"
                        />
                        <MyCheckbox
                          type="checkbox"
                          name="gameType"
                          value={"Points Play"}
                          label="Points Play"
                        />
                        <MyCheckbox
                          type="checkbox"
                          name="gameType"
                          value={"Non-points Play"}
                          label="Non-points Play"
                        />
                        <p className="font-Manrope text-[#caccce] mt-2">
                          Не выставляйте флажки, если Вам не важен тип игры
                        </p>
                      </div>
                      <div className="mt-2">
                        <label className="block font-Manrope text-[#242731] text-md mb-2">
                          Court payment
                        </label>
                        <MyCheckbox
                          type="checkbox"
                          name="courtPayment"
                          value={"Partner pays"}
                          label="Partner pays"
                        />
                        <MyCheckbox
                          type="checkbox"
                          name="courtPayment"
                          value={"Pay 50/50"}
                          label="Pay 50/50"
                        />
                        <MyCheckbox
                          type="checkbox"
                          name="courtPayment"
                          value={"I play"}
                          label="I play"
                        />
                        <MyCheckbox
                          type="checkbox"
                          name="courtPayment"
                          value={"Other variant"}
                          label="Other variant"
                        />
                      </div>
                    </div>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                  </Col>
                  <Col lg={16} md={12}>
                    <div className="pt-10">
                      <div className="mb-10">
                        <Field name="city">
                          {({ field, form: { touched, errors }, meta }) => (
                            <div className="mb-5">
                              <label
                                htmlFor="city"
                                className="block font-Manrope text-[#242731] text-md mb-2"
                              >
                                City*
                              </label>
                              <input
                                id="city"
                                type="text"
                                placeholder="Санкт-Петербург"
                                {...field}
                                className={`${
                                  errors.city ? "border-[#C72D2D]" : ""
                                } font-Manrope border border-[#C2C8D0] rounded-md py-2 px-2 outline-none w-[300px] placeholder:text-[#C2C8D0]`}
                              />
                              {meta.touched && meta.error && (
                                <div className="text-[#C72D2D] text-[13px] font-[Manrope] mt-1 ml-1">
                                  {meta.error}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                      </div>
                      <div className="mb-5">
                        <Field name="phone">
                          {({ field, form: { touched, errors }, meta }) => (
                            <div className="mb-2">
                              <label
                                htmlFor="phone"
                                className="block font-Manrope text-[#242731] text-md mb-2"
                              >
                                Phone
                              </label>
                              <input
                                id="phone"
                                type="number"
                                placeholder="XX XXX XX XX"
                                {...field}
                                className={`${
                                  errors.phone ? "border-[#C72D2D]" : ""
                                } font-Manrope border border-[#C2C8D0] rounded-md py-2 px-2 outline-none w-[300px] text-[#242731] placeholder:text-[#C2C8D0]`}
                              />
                              {meta.touched && meta.error && (
                                <div className="text-[#C72D2D] text-[13px] font-[Manrope] mt-1 ml-1">
                                  {meta.error}
                                </div>
                              )}
                            </div>
                          )}
                        </Field>
                        <p className="font-Manrope text-[#caccce]">
                          Enter your phone number so that we send you a
                          notification if they want to play with you.
                        </p>
                      </div>
                      <div className="mb-5">
                        <label
                          className="block font-Manrope text-[#242731] text-md mb-2"
                          htmlFor="comment"
                        >
                          Comment
                        </label>
                        <Field
                          type="text"
                          name="comment"
                          id="comment"
                          className="font-[Manrope] text-md border border-[#C2C8D0] rounded-md outline-none w-[600px] p-3"
                        />
                        <p className="font-Manrope text-[#caccce] mt-2">
                          Write a comment for your post
                        </p>
                      </div>
                      <button
                        type="submit"
                        className="border border-[#E1E1E1] bg-white text-[#0066FF] text-md font-Manrope rounded-md w-20 py-2 px-3"
                      >
                        Post
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};
//#region Task
// const initialValues = {
//   expirationDate: "",
//   comment: "",
//   city: "",
//   phone: "",
// };
// const [formData, setFormData] = useState(initialValues);
// const [errorMessage, setErrorMessage] = useState({});
// const handleOnChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({ ...formData, [name]: value });
// };
// const handleOnSubmit = (e) => {
//   e.preventDefault();
//   const hasError = validator(formData);
//   if (!(Object.keys(hasError).length === 0)) {
//     setErrorMessage(hasError);
//     alert("Error");
//   } else {
//     setFormData(formData);
//     alert(formData);
//   }
// };
// useEffect(() => {
//   if (Object.keys(errorMessage).length === 0) {
//     console.log("No Found Error!!!");
//   } else {
//   }
// }, [errorMessage]);

//#endregion
export default AddPartner;
