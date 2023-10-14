import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const GlobalState = createSlice({
  name: "second",
  initialState,
  reducers: {
    changeToggleTrue: (state: any) => {
      state.toggle = true;
    },
    changeToggleFalse: (state: any) => {
      state.toggle = false;
    },
  },
});

export const { changeToggleTrue, changeToggleFalse } = GlobalState.actions;

export default GlobalState.reducer;
