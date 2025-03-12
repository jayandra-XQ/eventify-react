import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'


export const store = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer
  },
})