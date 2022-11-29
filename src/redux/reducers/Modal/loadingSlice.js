import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const loadingModal = createSlice({
  name: "loadingModal",
  initialState,
  reducers: {
    start: (state) => {
      state.value = true;
    },
    end: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { start, end } = loadingModal.actions;

export default loadingModal.reducer;
