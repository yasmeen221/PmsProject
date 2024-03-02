import { createSlice } from "@reduxjs/toolkit";

const openAddUserFormPopUp = createSlice({
  name: "openAddUserFormPopUp",
  initialState: {
    open: false,
  },
  reducers: {
    handleOpenAddUserFormPopUp: (state,action) => {
      state.open = action.payload;

    },
    
  },
});
 export const { handleOpenAddUserFormPopUp } = openAddUserFormPopUp.actions;
 export default openAddUserFormPopUp.reducer;