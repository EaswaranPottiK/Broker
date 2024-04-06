import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice.js'

export const store = configureStore({
  reducer: {user:userReducer},
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({
    serializableCheck:false, //to avoid getting serializable error if we dont serialise our variable 
  }),
})

