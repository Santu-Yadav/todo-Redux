import { configureStore } from "@reduxjs/toolkit";
import firstTodoSlice from "./slices/firstSlice";

export default configureStore({
  reducer: {
    todos: firstTodoSlice,
  },
});
