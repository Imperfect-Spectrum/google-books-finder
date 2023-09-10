import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InputSearch {
  inputValue: string;
}

const initialState: InputSearch = {
  inputValue: "",
};

const inputSearchSlice = createSlice({
  name: "inputValue",
  initialState,
  reducers: {
    setInputValue: (state, action: PayloadAction<InputSearch>) => {
      state.inputValue = action.payload.inputValue;
    },
  },
});

export const { setInputValue } = inputSearchSlice.actions;
export default inputSearchSlice.reducer;
