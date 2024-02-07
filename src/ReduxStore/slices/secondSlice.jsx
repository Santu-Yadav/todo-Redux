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
      if (action.payload.checkedIndicator) {
        return {
          ...state,
          filterColor: [...state.filterColor, action.payload.value],
        };
      } else {
        return {
          ...state,
          filterColor: state.filterColor.filter(
            (item) => item !== action.payload.value
          ),
        };
      }
    },

    // return {
    //   ...state,
    //   filterColor: [...state.filterColor, action.payload.value],
    // };
  },
});

export const { filterByState, filterByColor } = secondSlice.actions;

export default secondSlice.reducer;
