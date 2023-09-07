import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Books } from "../type";

const initialState: Books[] = [];

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addNewBooks(state, action: PayloadAction<Books>) {
      state.push(action.payload);
    },
    addNewItems(state, action: PayloadAction<Books>) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state[0].items.push(...action.payload.items);
    },
    clearBook(state) {
      state.splice(0);
    },
  },
});

export const { addNewBooks, clearBook, addNewItems } = bookSlice.actions;

export default bookSlice.reducer;
