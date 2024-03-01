import { createSlice } from "@reduxjs/toolkit";

const editUserSlice= createSlice({
  name: "editUser",
  initialState: {
    user: {},
  },
  reducers: {
    editUser: (state, action) => {
      state.user = action.payload;
    },
  },
})

export const { editUser } = editUserSlice.actions;
export default editUserSlice.reducer;