import { configureStore } from '@reduxjs/toolkit'
import modalStateSlice from './Slices/modalStateSlice'
import postUserDataSlice from './Slices/postSliceUserData'
import sendMail from './Slices/sendMailSlice'

export const store = configureStore({
    reducer: {
        modal: modalStateSlice,
        postUserData: postUserDataSlice,
        mailSend: sendMail
    }
})