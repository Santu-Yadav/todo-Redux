import { createSlice } from "@reduxjs/toolkit";

export const secondSlice = createSlice({
  name: "second",
  initialState: { filterState: "all", filterColor: [] },
  reducers: {
    filterByState: (state, action) => {
      // state.filterState = action.payload;
      return { ...state, filterState: action.payload };
    },

    filterByColor: (state, action) => {
      return {...state, filterColor: state.filterColor.push()}
    },
  },
});

export const { filterByState, filterByColor } = secondSlice.actions;

export default secondSlice.reducer;
