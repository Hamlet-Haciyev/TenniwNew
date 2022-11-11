import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { userReducer } from "./user";
import { TournamentReducer } from "./tournament";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    tournament: TournamentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
