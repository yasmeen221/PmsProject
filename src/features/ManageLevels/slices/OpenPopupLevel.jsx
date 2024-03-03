import { createSlice } from "@reduxjs/toolkit";

const openPopupAddLevel = createSlice({
  name: "openPopupAddLevel",
  initialState: {
    open: false,
  },
  reducers: {
    handleOpenAddLevelPopUp: (state,action) => {
      state.open = action.payload;
    },
    
  },
});
 export const { handleOpenAddLevelPopUp } = openPopupAddLevel.actions;
 export default openPopupAddLevel.reducer;