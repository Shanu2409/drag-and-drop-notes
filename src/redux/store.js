import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notes/notesCounter";

export const store = configureStore({
  reducer: notesReducer,
});
