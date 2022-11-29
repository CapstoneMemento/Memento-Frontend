import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const textResult = createSlice({
  name: "textResult",
  initialState,
  reducers: {
    set: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { set } = textResult.actions;

export default textResult.reducer;
