import { configureStore } from "@reduxjs/toolkit";
import openPopUpSlice from "./slices/openPopUpSlice";

export const store = configureStore({
  reducer: { openPopUpSlice },
});
