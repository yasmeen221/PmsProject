import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dropDown: "",
  normalFeedbackPopup: false,
  praisePopUp: false,
  requestFeedbackForSomeOne: false,
  requestFeedbackForMySelf: false,
  feedbackDetailsOpenPopUp: false,
  idToDeleteRequestedPage: "",
  idToDeletePendingPage:""
};
const openPopUpSlice = createSlice({
  name: "openPopUpSlice",
  initialState: initialState,
  reducers: {
    changeDropDownValue: (state, action) => {
      state.dropDown = action.payload;
    },
    toggleNormalFeedback: (state, action) => {
      state.normalFeedbackPopup = action.payload;
    },
    tooglePraisePopUp: (state, action) => {
      state.praisePopUp = action.payload;
    },
    toogleRequestFeedbackForSomeOne: (state, action) => {
      state.requestFeedbackForSomeOne = action.payload;
    },
    toogleRequestFeedbackForMySelf: (state, action) => {
      state.requestFeedbackForMySelf = action.payload;
    },
    // toogleCompentancyDetails: (state, action) => {
    //   state.feedbackDetailsOpenPopUp = action.payload;
    // },
    toogleCompentancy: (state, action) => {
      state.feedbackDetailsOpenPopUp = action.payload;
    },
    setIdToDeleteRequestedPage: (state, action) => {
      state.idToDeleteRequestedPage = action.payload
    },setIdToDeletePendingPage: (state, action) => {
      state.idToDeletePendingPage = action.payload
    }

  },
});
export const {
  changeDropDownValue,
  toggleNormalFeedback,
  tooglePraisePopUp,
  toogleRequestFeedbackForSomeOne,
  toogleRequestFeedbackForMySelf,
  // toogleCompentancyDetails,
  toogleCompentancy,
  setIdToDeleteRequestedPage,
  setIdToDeletePendingPage

} = openPopUpSlice.actions;

export default openPopUpSlice.reducer;
