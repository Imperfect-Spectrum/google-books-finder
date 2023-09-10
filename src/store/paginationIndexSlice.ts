import { createSlice } from "@reduxjs/toolkit";

interface PaginationIndex {
  paginationIndex: number;
}

const initialState: PaginationIndex = {
  paginationIndex: 0,
};

const paginationIndexSlice = createSlice({
  name: "paginationIndex",
  initialState,
  reducers: {
    incrementPaginationIndex: (state) => {
      state.paginationIndex += 30;
    },
    resetPaginationIndex: (state) => {
      state.paginationIndex = 0;
    },
  },
});

export const { incrementPaginationIndex, resetPaginationIndex } =
  paginationIndexSlice.actions;
export default paginationIndexSlice.reducer;
