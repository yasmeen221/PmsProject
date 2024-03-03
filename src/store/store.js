import { configureStore } from "@reduxjs/toolkit";
import openPopUpSlice from "../features/FeedBack/slices/openPopUpSlice";
import openTeamPopUpSlice from "../features/ManageTeams/slices/addTeamTogglePopUp";
import editTeamPopUpSlice from "../features/ManageTeams/slices/editTemTogglePopUp";
import usersReducer from "../features/ManageUsers/slices/userSlice.jsx";
import editUsersSlice from "../features/ManageUsers/slices/editUsersSlice.jsx";
import openAddUserFormPopUp from "../features/ManageUsers/slices/openAddUserFormPopUp.jsx";
import openPopupAddLevel from "../features/ManageLevels/slices/OpenPopupLevel";
import editLevelSlice from "../features/ManageLevels/slices/EditLevel";
import { apiSlice } from "../features/ManageTeams/slices/apis/apiSlice.js";
import { usersApiSlice } from "../features/ManageUsers/slices/api/apiSlice.js";
export const store = configureStore({
  reducer: {
    openPopUpSlice,
    openTeamPopUpSlice,
    editTeamPopUpSlice,
    users: usersReducer,
    editUser: editUsersSlice,
    openAddUserFormPopUp,
    editLevelSlice,
    openPopupAddLevel,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApiSlice.middleware,apiSlice.middleware),
 
});
