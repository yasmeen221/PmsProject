
import { configureStore } from "@reduxjs/toolkit";
import openPopUpSlice from "../features/FeedBack/slices/openPopUpSlice";
import openTeamPopUpSlice from "../features/ManageTeams/slices/addTeamTogglePopUp";
import editTeamPopUpSlice from "../features/ManageTeams/slices/editTemTogglePopUp";
import usersReducer from '../features/ManageUsers/slices/userSlice.jsx';
import editUsersSlice from "../features/ManageUsers/slices/editUsersSlice.jsx";
import openAddUserFormPopUp from "../features/ManageUsers/slices/openAddUserFormPopUp.jsx";
import openPopupAddLevel from "../features/ManageLevels/slices/OpenPopupLevel";
import editLevelSlice from "../features/ManageLevels/slices/EditLevel";
<<<<<<< HEAD
import levelsReducer from "../features/ManageLevels/slices/LevelSlice.jsx"

export const store = configureStore({
  reducer: { 
    // Here you're providing reducers for different slices
    openPopUpSlice, // Feedback slice
    openTeamPopUpSlice, // Manage Teams slice
    editTeamPopUpSlice, // Manage Teams slice
    users: usersReducer, // Manage Users slice
    editUser: editUsersSlice, // Manage Users slice
    levels: levelsReducer, // Manage Levels slice
    openAddUserFormPopUp, // Manage Users slice
    editLevel: editLevelSlice, // Manage Levels slice
    openPopupAddLevel // Manage Levels slice
  },
});
=======
import {apiSlice }from "../features/ManageTeams/slices/apis/apiSlice.js"
export const store = configureStore({
  reducer: {
    openPopUpSlice,
    openTeamPopUpSlice,
    editTeamPopUpSlice,
    users: usersReducer,
    editUser: editUsersSlice,
    openAddUserFormPopUp,
    editLevelSlice,openPopupAddLevel,
    [apiSlice.reducerPath]:apiSlice.reducer
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware)
})
>>>>>>> c812a6bda2e94607b13ac6229bb4f99c6979a64d
