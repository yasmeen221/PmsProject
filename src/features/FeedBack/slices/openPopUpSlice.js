import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dropDown: "",
};
const openPopUpSlice = createSlice({
  name: "openPopUpSlice",
  initialState: initialState,
  reducers: {
    changeDropDownValue: (state, action) => {
      state.dropDown = action.payload;
    },
  },
});
export const { changeDropDownValue } = openPopUpSlice.actions;

export default openPopUpSlice.reducer;
