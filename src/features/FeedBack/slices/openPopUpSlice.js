import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dropDown: "",
  normalFeedbackPopup: false,
  praisePopUp: false,
  requestFeedbackForSomeOne:false,
  requestFeedbackForMySelf:false

};
const openPopUpSlice = createSlice({
  name: "openPopUpSlice",
  initialState: initialState,
  reducers: {
    changeDropDownValue: (state, action) => {
      state.dropDown = action.payload;
    },
    toggleNormalFeedback: (state, action) => {
      state.normalFeedbackPopup = action.payload
    },
    tooglePraisePopUp: (state, action) => {
      state.praisePopUp = action.payload
    },toogleRequestFeedbackForSomeOne:(state,action)=>{
      state.requestFeedbackForSomeOne=action.payload
    },toogleRequestFeedbackForMySelf:(state,action)=>{
      state.requestFeedbackForMySelf=action.payload
    }
  },
});
export const { changeDropDownValue, toggleNormalFeedback,tooglePraisePopUp,toogleRequestFeedbackForSomeOne ,toogleRequestFeedbackForMySelf} = openPopUpSlice.actions;

export default openPopUpSlice.reducer;
