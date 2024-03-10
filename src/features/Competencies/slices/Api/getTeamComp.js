import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllTeamCompetencies } from './competenciesApi';

const initState = {
    isLoadingTeamComp: false,
    error: null,
    comps: [],
};
export const getTeams = createAsyncThunk(
    'Teams/getTeams',
    async (_id, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        try {
            const res=await getAllTeamCompetencies(_id)
                if (res.data) {
                    dispatch(setCompsArr(res.data))
                    // console.log(res.data)
                    return res.data
                    
                } else {
                    console.log(res)
                }
        } catch (error) {
            console.log(error.message);
            dispatch(setError(JSON.stringify(error)));
            return rejectWithValue(error.message);
        }
    },
);

const TeamsSlice = createSlice({
    name: 'Teams',
    initialState: initState,
    reducers: {
        setCompsArr: (state, action) => {
            state.comps = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getTeams.pending, (state, action) => {
                state.isLoadingTeamComp = true;
                state.error = null;
                // console.log('pending');
            })
            .addCase(getTeams.fulfilled, (state, action) => {
                state.isLoadingTeamComp = false;
                // console.log('success');
            })
            .addCase(getTeams.rejected, (state, action) => {
                state.isLoadingTeamComp = false;
                state.error = action.payload;
                //console.log('failed');
            });
    },
});
export default TeamsSlice.reducer;
export const { setCompsArr, setError } = TeamsSlice.actions;
