import { configureStore } from "@reduxjs/toolkit";
import myNotesReducer from "./features/myNotes/myNotesSlice";

export const store = configureStore({
  reducer: { myNotes: myNotesReducer },
});
