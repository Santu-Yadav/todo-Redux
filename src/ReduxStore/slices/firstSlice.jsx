import { createSlice } from "@reduxjs/toolkit";

export const firstTodoSlice = createSlice({
  name: "first",
  initialState: [],
  reducers: {
    add: (state = initialState, action) => {
      return [...state, action.payload];
    },
    remove: (state = initialState, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { add, remove } = firstTodoSlice.actions;

export default firstTodoSlice.reducer;
