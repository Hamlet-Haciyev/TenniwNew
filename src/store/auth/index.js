import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const updateAuthhorize = createAsyncThunk(
  "updateAuthhorize",
  async (check) => {
    if (check == false) {
      return false;
    }
    return true;
  }
);
export const AuthSlice = createSlice({
  name: "counter",
  initialState: {
    authHorize: false,
  },
  extraReducers: {
    [updateAuthhorize.fulfilled]: (state, action) => {
      state.authHorize = action.payload;
    },
  },
});
export const authReducer = AuthSlice.reducer;
