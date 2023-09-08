import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectCategories {
  selectCategories: number;
}

const initialState: SelectCategories = {
  selectCategories: 0,
};

const categoriesSlice = createSlice({
  name: "selectCategories",
  initialState,
  reducers: {
    setSelectCategories: (state, action: PayloadAction<SelectCategories>) => {
      // eslint-disable-next-line no-param-reassign
      state.selectCategories = action.payload.selectCategories;
    },
  },
});

export const { setSelectCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;