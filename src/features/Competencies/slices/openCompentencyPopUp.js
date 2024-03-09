import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailsPopup: false,
};
const openCompetencyPopUpSlice = createSlice({
  name: "openCompetencyPopUpSlice",
  initialState: initialState,
  reducers: {
    toggleCompetencyDetails: (state, action) => {
      state.detailsPopup = action.payload
    },
    
  },
});
export const { toggleCompetencyDetails} = openCompetencyPopUpSlice.actions;

export default openCompetencyPopUpSlice.reducer;
