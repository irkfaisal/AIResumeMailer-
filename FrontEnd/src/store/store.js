import { configureStore } from '@reduxjs/toolkit'
import modalStateSlice from './Slices/modalStateSlice'
import postUserDataSlice from './Slices/postSliceUserData'

export const store = configureStore({
    reducer: {
        modal: modalStateSlice,
        postUserData: postUserDataSlice
    }
})