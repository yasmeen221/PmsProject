import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {},
};
const editTeamPopUpSlice = createSlice({
  name: "editTeamPopUpSlice",
  initialState: initialState,
  reducers: {
    editButtonTeamHandle: (state, action) => {
      state.item = action.payload;
    },
  },
});
export const { editButtonTeamHandle } = editTeamPopUpSlice.actions;

export default editTeamPopUpSlice.reducer;
