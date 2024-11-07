import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen: false,
};

const modalStateSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.isOpen = action.payload;
        },
        closeModal: (state) => {
            state.isOpen = false;
        }
    }
})

export const { openModal, closeModal } = modalStateSlice.actions;

export default modalStateSlice.reducer;