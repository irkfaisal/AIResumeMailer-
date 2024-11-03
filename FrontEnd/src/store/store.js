import {configureStore} from '@reduxjs/toolkit'
import modalStateSlice  from './Slices/modalStateSlice'

export const store = configureStore({
    reducer:{
        modal: modalStateSlice ,
    }
})