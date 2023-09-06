import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import sortingSlice from "./sortingSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    sorts: sortingSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
