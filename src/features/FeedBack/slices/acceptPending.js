import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username:"",
  id:"",
  cardId:""
};
const confirmSlice = createSlice({
  name: "confirmSlice",
  initialState: initialState,
  reducers: {

    setUserName:(state,action)=>{
      state.username=action.payload
    },
    setFromId:(state,action)=>{
        state.id=action.payload
    },
    setCardId:(state,action)=>{
        state.cardId=action.payload
    }
  },
});
export const {

    setUserName,
  setFromId,
  setCardId
} = confirmSlice.actions;

export default confirmSlice.reducer;
