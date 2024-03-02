import { configureStore } from "@reduxjs/toolkit";
import openPopUpSlice from "../features/FeedBack/slices/openPopUpSlice";
import openTeamPopUpSlice from "../features/ManageTeams/slices/addTeamTogglePopUp";
import editTeamPopUpSlice from "../features/ManageTeams/slices/editTemTogglePopUp";
import usersReducer from "../features/ManageUsers/slices/userSlice";
import editUsersSlice from "../features/ManageUsers/slices/editUsersSlice";
import openAddUserFormPopUp from "../features/ManageUsers/slices/openAddUserFormPopUp";
import openPopupAddLevel from "../features/ManageLevels/slices/OpenPopupLevel";
import editLevelSlice from "../features/ManageLevels/slices/EditLevel";
import levelsReducer from "../features/ManageLevels/slices/LevelSlice";
import { apiSlice } from "../features/ManageTeams/slices/apis/apiSlice.js";
import { apiLevelSlice } from "../features/ManageLevels/slices/api/apiLevelSlice.js";

export const store = configureStore({
  reducer: {
    openPopUpSlice, // Feedback slice
    openTeamPopUpSlice, // Manage Teams slice
    editTeamPopUpSlice, // Manage Teams slice
    users: usersReducer, // Manage Users slice
    editUser: editUsersSlice, // Manage Users slice
    levels: levelsReducer, // Manage Levels slice
    openAddUserFormPopUp, // Manage Users slice
    editLevel: editLevelSlice, // Manage Levels slice
    openPopupAddLevel, // Manage Levels slice
    [apiSlice.reducerPath]: apiSlice.reducer, // API slice
    [apiLevelSlice.reducerPath]: apiLevelSlice.reducer, // API level slice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      apiLevelSlice.middleware,
    ),
});
