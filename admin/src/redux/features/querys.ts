import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
  isSearching: false,
  search: "",
  sort: "Mais Novo",
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
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setPage, setIsSearching, setSearch, setSort } =
  querysSlice.actions;

export default querysSlice.reducer;
