import { configureStore } from "@reduxjs/toolkit";

import mySubjectReducer from "./reducers/mySubject/mySubjectSlice";
import newNoteModalReducer from "./reducers/Modal/newNoteModal";
import imgInfoReducer from "./reducers/OCR/imgInfoSlice";
import loadingReducer from "./reducers/Modal/loadingSlice";

export const store = configureStore({
  reducer: {
    mySubject: mySubjectReducer,
    newNoteModal: newNoteModalReducer,
    imgInfo: imgInfoReducer,
    loadingModal: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
