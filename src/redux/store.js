
import { configureStore } from '@reduxjs/toolkit'
import basket from './basketSlice'
export const store = configureStore({
    reducer:{
     basket
    }
})