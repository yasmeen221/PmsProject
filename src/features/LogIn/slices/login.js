import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: null,
};
const userDataSlice = createSlice({
  name: "userDataSlice",
  initialState: initialState,
  reducers: {
    changeUserDataValue: (state, action) => {
      state.userData = action.payload;
    },
  },
});
export const { changeUserDataValue } = userDataSlice.actions;

export default userDataSlice.reducer;
