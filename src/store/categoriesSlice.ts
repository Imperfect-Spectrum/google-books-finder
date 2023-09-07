import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectCategories {
  selectCategories: string;
}

const initialState: SelectCategories = {
  selectCategories: "All",
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
