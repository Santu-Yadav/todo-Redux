import { createSlice } from "@reduxjs/toolkit";

export const secondSlice = createSlice({
  name: "second",
  initialState: { filterState: "completed" },
  reducers: {
    filterByState: (state, action) => {
      state.filterState = action.payload;
    },
  },
});

export const { filterByState } = secondSlice.actions;

export default secondSlice.reducer;
