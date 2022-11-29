import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const newNoteModal = createSlice({
  name: "newNoteModal",
  initialState,
  reducers: {
    open: (state) => {
      state.value = true;
    },
    close: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { open, close } = newNoteModal.actions;

export default newNoteModal.reducer;
