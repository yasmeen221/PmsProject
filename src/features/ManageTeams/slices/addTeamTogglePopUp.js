import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  openPopUpTeam: false,
  isLoading: false,
  error: null
};
export const addTeam = createAsyncThunk(
  "openTeamPopUpSlice/addTeam",
  async (teamData, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      //axios code here

      // const response = await fetch(`link/${id}`, { //كده بتبعتيلو الاي دي بتاع العنصر اللي هيمسحه
      //     method: 'DELETE',
      //     headers: {
      //         'Content-Type': 'application/json; charset=UTF-8',
      //     },
      // })
      // return id;
      
    } catch (error) {
      return rejectWithValue(error.message);
    }

  })
const openTeamPopUpSlice = createSlice({
  name: "openTeamPopUpSlice",
  initialState: initialState,
  reducers: {
    dropDownTeamHandle: (state, action) => {
      state.openPopUpTeam = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addTeam.pending, (state, action) => {
      console.log("pending")
      state.isLoading = true
      state.error = null
    }),
      builder.addCase(addTeam.fulfilled, (state, action) => {
        console.log("fulfilled")
        state.isLoading = false
        state.error = null

      }),
      builder.addCase(addTeam.rejected, (state, action) => {
        console.log("rejected")
        state.isLoading = false
        state.error = action.payload

      })
  }
});
export const { dropDownTeamHandle } = openTeamPopUpSlice.actions;

export default openTeamPopUpSlice.reducer;
