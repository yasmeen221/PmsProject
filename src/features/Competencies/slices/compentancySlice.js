import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  editCompentancyDone: false,
  editShardCompentancy: false,
  deleteCompentancy: false,
  deleteShardCompetancy: false,
  addNewComp: false,
};
const compentancySlice = createSlice({
  name: "compentancySlice",
  initialState: initialState,
  reducers: {
    setEditCompetancyDone: (state, action) => {
      state.editCompentancyDone = action.payload;
    },
    setEditShardCompetancyDone: (state, action) => {
      state.editShardCompentancy = action.payload;
    },
    setDeleteCompentancy: (state, action) => {
      state.deleteCompentancy = action.payload;
    },
    setDeleteShardCompentancy: (state, action) => {
      state.deleteShardCompetancy = action.payload;
    },
    setAddCompentancy: (state, action) => {
      state.addNewComp = action.payload;
    },
  },
});
export const {
  setEditCompetancyDone,
  setEditShardCompetancyDone,
  setDeleteCompentancy,
  setDeleteShardCompentancy,
  setAddCompentancy,
} = compentancySlice.actions;

export default compentancySlice.reducer;
