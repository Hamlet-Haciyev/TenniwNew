import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { authReducer } from "./auth";
import { userReducer } from "./user";
import { TournamentReducer } from "./tournament";
import { PartnerReducer } from "./partner";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    tournament: TournamentReducer,
    partner: PartnerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
