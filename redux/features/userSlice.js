import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: false,
};

const userLoggedSlice = createSlice({
  name: "userLogged",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userLoggedSlice.actions;
export default userLoggedSlice.reducer;
