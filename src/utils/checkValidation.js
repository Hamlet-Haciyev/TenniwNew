import * as Yup from "yup";

export const validationSchemaForBasicInfo = Yup.object({
  firstName: Yup.string().required("Name is required"),
  lastName: Yup.string().required("Surname is required"),
  email: Yup.string().email("email is not valid").required(),
  phone: Yup.number("phone number can only consist of digits").required(),
});
export const validationSchemaForSecurity = Yup.object({
  password: Yup.string()
    .min(8)
    .max(15)
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
  confirmPassword: Yup.string().required().oneOf([Yup.ref("password"), null]),
});
export const validationSchemaForQuestionRecovery = Yup.object({
  question: Yup.string().required(),
  answer: Yup.string().required(),
});
