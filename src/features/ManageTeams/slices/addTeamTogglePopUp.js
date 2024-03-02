import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openPopUpTeam: false,
  teams: []
};

const openTeamPopUpSlice = createSlice({
  name: "openTeamPopUpSlice",
  initialState: initialState,
  reducers: {
    dropDownTeamHandle: (state, action) => {
      state.openPopUpTeam = action.payload;
    },
    setTeamsData: (state, action) => {
      state.teams = action.payload //in case of the success of get in rtk query dispatch this action to set teams data to access it in all places
    }
  },
});
export const { dropDownTeamHandle,setTeamsData } = openTeamPopUpSlice.actions;

export default openTeamPopUpSlice.reducer;
