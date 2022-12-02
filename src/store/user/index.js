import { createSlice } from "@reduxjs/toolkit";

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    // fname: "",
    // surname: "",
    // email: "",
    // phone: "",
    // password: "",
    // question: "",
    // answer: "",
  },
  reducers: {
    // addUserInfo: (state, action) => {
    //   const { fname, surname, email, phone, password, question, answer } =
    //     action.payload;
    //   state.fname = fname;
    //   state.surname = surname;
    //   state.email = email;
    //   state.phone = phone;
    //   state.password = password;
    //   state.question = question;
    //   state.answer = answer;
    //   console.log(state);
    // },
  },
});
export const userReducer = UserSlice.reducer;
export const { addUserInfo } = UserSlice.actions;
