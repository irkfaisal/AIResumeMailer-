import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

// Define an async thunk to handle the POST API call

export const userDataPost = createAsyncThunk(
    'post/get-ai-response',
    async (postData, { rejectWithValue }) => {
        console.log("postData", postData)
        try {
            const response = await axios.post('http://localhost:8400/ai/get-ai-response', postData);
            console.log("get-ai-response", response)
            return response.data;
        } catch (error) {
            console.log("get-ai-error", error)
            return rejectWithValue(error.response.data);
        }
    }
)

const postUserDataSlice = createSlice({
    name: 'post',
    initialState: {
        post: null,
        status: 'idle', // "idle" | "loading" | "succeeded" | "failed"
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(userDataPost.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(userDataPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.post = action.payload;
            })
            .addCase(userDataPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    },
});

export default postUserDataSlice.reducer;