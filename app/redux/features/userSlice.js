import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  user: null,
};

const userLoggedSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      if (action.payload === null) {
        AsyncStorage.removeItem("user");
      } else {
        AsyncStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
  },
});

export const { setUser } = userLoggedSlice.actions;

export default userLoggedSlice.reducer;
