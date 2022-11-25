import { configureStore } from "@reduxjs/toolkit";

import mySubjectReducer from "./reducers/mySubject/mySubjectSlice";
import newNoteModalReducer from "./reducers/newNoteModal/newNoteModal";

export const store = configureStore({
  reducer: { mySubject: mySubjectReducer, newNoteModal: newNoteModalReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
