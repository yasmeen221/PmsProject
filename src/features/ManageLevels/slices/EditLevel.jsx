import { createSlice } from "@reduxjs/toolkit";
const initialState= {
  level: {}
}
const editLevelSlice= createSlice({
  name: "editLevel",
  initialState: initialState,
  reducers: {
    editLevel: (state, action) => {
      state.level = action.payload;
    },
  },
})

export const { editLevel } = editLevelSlice.actions;
export default editLevelSlice.reducer;