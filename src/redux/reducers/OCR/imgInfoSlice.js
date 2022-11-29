import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { url: null, textFields: null },
};

export const imgInfo = createSlice({
  name: "imgInfo",
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = imgInfo.actions;

export default imgInfo.reducer;
