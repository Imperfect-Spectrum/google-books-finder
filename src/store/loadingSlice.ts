import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Loading {
  loadingState: boolean;
}

const initialState: Loading = {
  loadingState: false,
};

const loadingSlice = createSlice({
  name: "loadingState",
  initialState,
  reducers: {
    setLoadingState: (state, action: PayloadAction<Loading>) => {
      // eslint-disable-next-line no-param-reassign
      state.loadingState = action.payload.loadingState;
    },
  },
});

export const { setLoadingState } = loadingSlice.actions;
export default loadingSlice.reducer;
