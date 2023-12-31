import { configureStore } from "@reduxjs/toolkit";
import sortingSlice from "./sortingSlice";
import categoriesSlice from "./categoriesSlice";
import bookSlice from "./bookSlice";
import paginationIndexSlice from "./paginationIndexSlice";
import inputSearchSlice from "./inputSearchSlice";

const store = configureStore({
  reducer: {
    books: bookSlice,
    sorts: sortingSlice,
    categories: categoriesSlice,
    paginationIndex: paginationIndexSlice,
    inputSearch: inputSearchSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
