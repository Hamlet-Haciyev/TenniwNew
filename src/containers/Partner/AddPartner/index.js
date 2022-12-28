import { Col, Row, Slider, Select, Checkbox } from "antd";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import parse from "date-fns/parse";
import { useState } from "react";
import { useEffect } from "react";
// const marks = {
//   1: "1",
//   2: "2",
//   3: "3",
//   4: "4",
//   5: "5",
//   6: "6",
//   7: "7",
//   8: "8",
//   9: "9",
//   10: "10",
// };
// const plainOptions = [
//   "Одиночная игра",
//   "Парная игра",
//   "Игра на счет",
//   "Игра не на счет",
// ];
// const paymentOptions = [
//   "Платит партнер",
//   "Плата 50 на 50",
//   "Плачу я",
//   "Другое",
// ];
const initialValues = {
  expirationDate: "",
  comment: "",
  city: "",
  phone: "",
};
const validator = (data) => {
  let err = {};
  if (!data.comment.trim()) {
    err.comment = "Required";
  } else {
  }
  return err;
};
const AddPartner = () => {
  const [formData, setFormData] = useState(initialValues);
  const [errorMessage, setErrorMessage] = useState({});
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const hasError = validator(formData);
    if (!(Object.keys(hasError).length === 0)) {
      setErrorMessage(hasError);
      alert("Error");
    } else {
      setFormData(formData);
      alert(formData);
    }
  };
  useEffect(() => {
    if (Object.keys(errorMessage).length === 0) {
      console.log("No Found Error!!!");
    } else {
    }
  }, [errorMessage]);
  return (
    <div className="bg-white w-full py-16 min-h-[100%]">
      <div className="flex flex-wrap gap-1">
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor="comment" className="block">
              Comment
            </label>
            <input
              type="text"
              id="comment"
              name="comment"
              onChange={handleOnChange}
              value={formData.comment}
              className="border border-[#E1E1E1] rounded-md py-2 px-3 w-[300px] outline-none"
            />
            <span className="text-red-400">
              {errorMessage.comment ? errorMessage.comment : null}
            </span>
          </div>
          <button className="border border-[#E1E1E1] bg-white text-[#0066FF] text-md font-Manrope rounded-md w-20 py-2 px-3">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};
//#region Task

// const initialValues = {
//   rivalRate: "",
//   sex: "",
//   gameType: "",
//   courtPayment: "",
//   city: "",
//   phone: "",
//   comment: "",
//   datetime: "",
//   expirationDate: "",
// };
// const getRivalLevel = (value) => {
//   const [min, max] = value;
//   console.log(min, max);
// };
// const handleChange = (value) => {};
// const getTypeGame = (value) => {};

{
  /* <div className="max-w-[1100px] mx-auto">
<Formik
  initialValues={initialValues}
  validationSchema={Yup.object({
    rivalRate: Yup.object()
      .shape({
        min: Yup.number(),
        max: Yup.number(),
      })
      .required(),
    sex: Yup.string().required("required"),
    gameType: Yup.array().required("Must have game type"),
    courtPayment: Yup.array().required("Must have payment type"),
    city: Yup.string().required("required"),
    phone: Yup.string().required("required"),
    comment: Yup.string().required("required"),
    expirationDate: Yup.date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        const result = parse(originalValue, "dd.MM.yyyy", new Date());
        return result;
      })
      .typeError("please enter a valid date")
      .required(),
  })}
  onSubmit={(values) => alert(values)}
>
  <Row gutter={[32]}>
    <Col lg={8} md={12}>
      <div className="">
        <h2 className="font-[Manrope] font-semibold text-[#242731] text-2xl mb-3">
          Add New Post
        </h2>
        <p className="font-[Manrope] text-[#575F6E] text-sm mb-10">
          Поля со звездочкой * обязательны для заполнения.
        </p>
        <h6 className="font-[Manrope] text-[#242731] text-sm">
          Уровень соперника
        </h6>
        <Field name="rivalRate">
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
        </Field>
        <div className="">
          <h4 className="font-Manrope text-[#242731] text-md mb-2">
            Желаемый пол соперника
          </h4>
        </div>
        <div className="mt-2">
          <h4 className="font-Manrope text-[#242731] text-md mb-2">
            Тип игры
          </h4>
          <Checkbox.Group
            options={plainOptions}
            defaultValue={["Одиночная игра"]}
            onChange={getTypeGame}
            className="flex flex-col gap-1"
          />
          <p className="font-Manrope text-[#caccce] mt-2">
            Не выставляйте флажки, если Вам не важен тип игры
          </p>
        </div>
        <div className="mt-2">
          <h4 className="font-Manrope text-[#242731] text-md mb-2">
            Оплата корта
          </h4>
          <Checkbox.Group
            options={paymentOptions}
            defaultValue={["Платит партнер"]}
            onChange={getTypeGame}
            className="flex flex-col gap-1"
          />
        </div>
      </div>
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
            Укажите телефон, чтобы мы отправили Вам уведомление, если с
            Вами захотят сыграть.
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
            Укажите комментарий к объявлению
          </p>
        </div>
        <button className="border border-[#E1E1E1] bg-white text-[#0066FF] text-md font-Manrope rounded-md w-20 py-2 px-3">
          Post
        </button>
      </div>
    </Col>
  </Row>
</Formik>
</div> */
}
//#endregion
export default AddPartner;
