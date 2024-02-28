import { configureStore } from "@reduxjs/toolkit";
import openPopUpSlice from "../features/FeedBack/slices/openPopUpSlice";
import openTeamPopUpSlice from "../features/ManageTeams/slices/addTeam"
export const store = configureStore({
  reducer: { openPopUpSlice ,openTeamPopUpSlice},
});
