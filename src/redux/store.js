import { configureStore } from "@reduxjs/toolkit";

import mySubjectReducer from "./mySubject/mySubjectSlice";

export const store = configureStore({
  reducer: { mySubject: mySubjectReducer },
});
