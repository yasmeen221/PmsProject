import { createSlice } from "@reduxjs/toolkit";

const openPopUpConfirmDeleteSlice = createSlice({
  name: "openPopUpDelete",
  initialState: {
    open: false,
  },
  reducers: {
    HandelOpenPopUpDelete: (state, action) => {
      state.open = action.payload;
    },
  },
});
export const { HandelOpenPopUpDelete } = openPopUpConfirmDeleteSlice.actions;
export default openPopUpConfirmDeleteSlice.reducer;
