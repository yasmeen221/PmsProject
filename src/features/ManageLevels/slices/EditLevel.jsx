import { createSlice } from "@reduxjs/toolkit";

const editLevelSlice= createSlice({
  name: "editLevel",
  initialState: {
    level: {},
  },
  reducers: {
    editLevel: (state, action) => {
      state.level = action.payload;
    },
  },
})

export const { editLevel } = editLevelSlice.actions;
export default editLevelSlice.reducer;

