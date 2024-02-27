import { configureStore } from "@reduxjs/toolkit";
import openPopUpSlice from "../features/FeedBack/slices/openPopUpSlice";

export const store = configureStore({
  reducer: { openPopUpSlice },
});
