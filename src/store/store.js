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
import userDataReducer from "../features/LogIn/slices/login.js";

import { apiSlice } from "../features/ManageTeams/slices/apis/apiSlice.js";
import { apiLevelSlice } from "../features/ManageLevels/slices/api/apiLevelSlice.js";
import { apiLoginSlice } from "../features/LogIn/slices/apis/apiLoginSlice.js";
import { apiRestPassSlice } from "../features/ResetPassword/slices/apis/apiSetPassSlice.js";
import { usersApiSlice } from "../features/ManageUsers/slices/api/apiSlice.js";
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
    userDataReducer,
    [apiSlice.reducerPath]: apiSlice.reducer, // API slice
    [apiLevelSlice.reducerPath]: apiLevelSlice.reducer, // API level slice
    [apiLoginSlice.reducerPath]:apiLoginSlice.reducer,
    [apiRestPassSlice.reducerPath]:apiRestPassSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      apiSlice.middleware,
      apiLevelSlice.middleware,
      apiLoginSlice.middleware,
      apiRestPassSlice.middleware,
      usersApiSlice.middleware
    ),

    
  },
)


export default store;

