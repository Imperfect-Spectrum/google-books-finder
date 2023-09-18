import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectSorting {
  selectSorting: string;
}

const initialState: SelectSorting = {
  selectSorting: "relevance",
};

const selectSlice = createSlice({
  name: "selectSorting",
  initialState,
  reducers: {
    setSelectSorting: (state, action: PayloadAction<SelectSorting>) => {
      // eslint-disable-next-line no-param-reassign
      state.selectSorting = action.payload.selectSorting;
    },
  },
});

export const { setSelectSorting } = selectSlice.actions;
export default selectSlice.reducer;
