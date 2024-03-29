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

    taskCompletedBoxChecked: (state, action) => {
      console.log("taskCompletedBoxChecked @@", action);

      return state.map((element) => {
        return element.id === action.payload.selectedId
          ? action.payload.isChecked
            ? { ...element, completed: true }
            : { ...element, completed: false }
          : { ...element };
      });
    },

    markAllCompleted: (state) => {
      return state.map((element) => {
        return { ...element, completed: true };
      });
    },

    clearCompleted: (state) => {
      return state.filter((element) => element.completed === false);
    },

    changeEditIndicator: (state, action) => {
      console.log("changeEditIndicator @@", action.payload);
      return state.map((element) => {
        return element.id === action.payload
          ? { ...element, editIndicator: !element.editIndicator }
          : { ...element };
      });
    },

    editValueLater: (state, action) => {
      // console.log("##### @@@@", action.payload.receivedItem);
      return state.map((element) => {
        return element.id === action.payload.receivedItem.id
          ? { ...element, value: action.payload.changedValue }
          : { ...element };
      });
    },
  },
});

export const {
  add,
  remove,
  colorChange,
  taskCompletedBoxChecked,
  markAllCompleted,
  clearCompleted,
  changeEditIndicator,
  editValueLater,
} = firstTodoSlice.actions;

export default firstTodoSlice.reducer;
