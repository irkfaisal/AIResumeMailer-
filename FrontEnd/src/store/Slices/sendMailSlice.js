import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define an async thunk to handle the POST API call

export const sendMailPost = createAsyncThunk(
    'post/send-email',
    async (mailData, { rejectWithValue }) => {
        console.log("postData", mailData)
        try {
            const response = await axios.post('http://localhost:8400/api/send-email', mailData);
            console.log("send-email response", response)
            return response.data;
        } catch (error) {
            console.log("send-email error", error)
            return rejectWithValue(error.response.data);
        }
    }
)

const sendMail = createSlice({
    name: 'post',
    initialState: {
        mailSent: null,
        status: 'idle', // "idle" | "loading" | "succeeded" | "failed"
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendMailPost.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(sendMailPost.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.mailSent = action.payload;
            })
            .addCase(sendMailPost.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            });
    }
})

export default sendMail.reducer;