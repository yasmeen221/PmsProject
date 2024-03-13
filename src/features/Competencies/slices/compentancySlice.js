import { createSlice } from "@reduxjs/toolkit";
import { getAllDataCompetencies } from "./Api/competenciesApi";

const initialState = {
  editCompentancyDone: false,
  editShardCompentancy: false,
  deleteCompentancy: false,
  deleteShardCompetancy: false,
};
const compentancySlice = createSlice({
  name: "compentancySlice",
  initialState: initialState,
  reducers: {
    setEditCompetancyDone: (state, action) => {
      state.editCompentancyDone = action.payload;
    },
    setEditShardCompetancyDone: (state, action) => {
      state.editShardCompentancy = action.payload;
    },
    setDeleteCompentancy: (state, action) => {
      state.deleteCompentancy = action.payload;
    },
    setDeleteShardCompentancy: (state, action) => {
      state.deleteShardCompetancy = action.payload;
    },
  },
});
export const {
  setEditCompetancyDone,
  setEditShardCompetancyDone,
  setDeleteCompentancy,
  setDeleteShardCompentancy,
} = compentancySlice.actions;

export default compentancySlice.reducer;

// const initialState = {
//   compentacyData: [],
// };

// const fetchCompentacyData = async () => {
//   try {
//     const response = await getAllDataCompetencies();
//     console.log("from slice", response);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching compentacy data:", error);
//     return null;
//   }
// };

// const compentancySlice = createSlice({
//   name: "compentancySlice",
//   initialState: initialState,
//   reducers: {
//     getAllCompentancy: (state, action) => {
//       state.compentacyData = action.payload;
//     },
//   },
//   //   extraReducers: (builder) => {
//   //     builder.addCase(fetchCompentacyData.fulfilled, (state, action) => {
//   //       state.compentacyData = action.payload;
//   //     });
//   //   },
// });

// export const { getAllCompentancy } = compentancySlice.actions;

// export const fetchCompentacyDataAsync = () => async (dispatch) => {
//   const data = await fetchCompentacyData();
//   dispatch(getAllCompentancy(data));
// };

// export default compentancySlice.reducer;
