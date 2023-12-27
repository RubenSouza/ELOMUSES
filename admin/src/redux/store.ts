import { configureStore } from "@reduxjs/toolkit";

import darkModeReducer from "./features/darkMode";
import userLoggedReducer from "./features/userLogged";
import querysReducer from "./features/querys";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    userLogged: userLoggedReducer,
    querys: querysReducer,
  },
});
