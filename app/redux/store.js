import { configureStore } from "@reduxjs/toolkit";
import userLoggedReducer from "./features/userSlice";

export const store = configureStore({
  reducer: {
    userLogged: userLoggedReducer,
  },
});
