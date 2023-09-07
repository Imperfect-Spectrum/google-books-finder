import { configureStore } from "@reduxjs/toolkit";
import sortingSlice from "./sortingSlice";
import categoriesSlice from "./categoriesSlice";
import bookSlice from "./bookSlice";

const store = configureStore({
  reducer: {
    books: bookSlice,
    sorts: sortingSlice,
    categories: categoriesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
