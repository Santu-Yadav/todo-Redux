import { createSlice } from "@reduxjs/toolkit";

export const firstTodoSlice = createSlice({
  name: "first",
  initialState: [],
  reducers: {
    add: (state, action) => {
      return [...state, action.payload];
    },

    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },

    colorChange: (state, action) => {
      console.log("redux-action @@@@", action);
      return state.map((element) =>
        element.id === action.payload.id
          ? { ...element, color: action.payload.value }
          : { ...element }
      );
    },
  },
});

export const { add, remove, colorChange } = firstTodoSlice.actions;

export default firstTodoSlice.reducer;
