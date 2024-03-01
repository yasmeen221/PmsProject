import { configureStore } from "@reduxjs/toolkit";
import openPopUpSlice from "../features/FeedBack/slices/openPopUpSlice";
import openTeamPopUpSlice from "../features/ManageTeams/slices/addTeamTogglePopUp";
import editTeamPopUpSlice from "../features/ManageTeams/slices/editTemTogglePopUp";
import usersReducer from '../features/ManageUsers/slices/userSlice.jsx';
import editUsersSlice from "../features/ManageUsers/slices/editUsersSlice.jsx";
import openAddUserFormPopUp from "../features/ManageUsers/slices/openAddUserFormPopUp.jsx";
export const store = configureStore({
  reducer: { openPopUpSlice, openTeamPopUpSlice, editTeamPopUpSlice , users: usersReducer, editUser: editUsersSlice , openAddUserFormPopUp},
});
