import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  isSearching: false,
  search: "",
};

const querysSlice = createSlice({
  name: "querys",
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setIsSearching: (state, action) => {
      state.isSearching = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setPage, setIsSearching, setSearch } = querysSlice.actions;

export default querysSlice.reducer;
