import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFeedbacks } from './Api/feedbackApi';
const initState = {
    isLoadingFeedback: false,
    error: null,
    feedbacks: [],
};
export const getFeedbacksRequest = createAsyncThunk(
    'Feedback/getFeedbacksRequest',
    async (_id, thunkAPI) => {
        const { rejectWithValue, dispatch } = thunkAPI;
        try {
            const res = await getFeedbacks();
            if (res.data) {
                dispatch(setFeedbacksArr(res.data.data.feedbacks));
                console.log(res.data.data.feedbacks);
                return res.data.data.feedbacks; // Return the data
            } else {
                console.log(res);
            }
        } catch (error) {
            console.log(error.message);
            dispatch(setError(JSON.stringify(error)));
            return rejectWithValue(error.message);
        }
    },
);


const ViewFeedbackSlice = createSlice({
    name: 'Feedback',
    initialState: initState,
    reducers: {
        setFeedbacksArr: (state, action) => {
            state.feedbacks = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(getFeedbacksRequest.pending, (state, action) => {
                state.isLoadingFeedback = true;
                state.error = null;
                // console.log('pending');
            })
            .addCase(getFeedbacksRequest.fulfilled, (state, action) => {
                state.isLoadingFeedback = false;
                // console.log('success');
            })
            .addCase(getFeedbacksRequest.rejected, (state, action) => {
                state.isLoadingFeedback = false;
                state.error = action.payload;
                //console.log('failed');
            });
    },
});
export default ViewFeedbackSlice.reducer;
export const { setFeedbacksArr, setError } = ViewFeedbackSlice.actions;
