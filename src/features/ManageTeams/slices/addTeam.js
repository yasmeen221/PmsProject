import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openPopUpTeam: false,
};
const openTeamPopUpSlice = createSlice({
  name: "openTeamPopUpSlice",
  initialState: initialState,
  reducers: {
    dropDownTeamHandle: (state, action) => {
      state.openPopUpTeam = action.payload;
    },
  },
});
export const { dropDownTeamHandle } = openTeamPopUpSlice.actions;

export default openTeamPopUpSlice.reducer;
