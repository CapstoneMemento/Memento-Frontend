import { configureStore } from "@reduxjs/toolkit";

import myBookReducer from "./myBook/myBookSlice";

export const store = configureStore({
  reducer: { myBook: myBookReducer },
});
