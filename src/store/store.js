import { configureStore } from "@reduxjs/toolkit";
import openPopUpSlice from "../features/FeedBack/slices/openPopUpSlice";
import openTeamPopUpSlice from "../features/ManageTeams/slices/addTeamTogglePopUp"
export const store = configureStore({
  reducer: { openPopUpSlice ,openTeamPopUpSlice},
});
