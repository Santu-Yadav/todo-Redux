import { configureStore } from "@reduxjs/toolkit";
import firstTodoSlice from "./slices/firstSlice";
import secondSlice from "./slices/secondSlice";

export default configureStore({
  reducer: {
    todos: firstTodoSlice,
    filter: secondSlice,
  },
});
