import { configureStore } from '@reduxjs/toolkit'
import itemsReducer from './itemsSlice'
import userReducer from './userSlice'
import { useSelector } from 'react-redux'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const store = configureStore({
  reducer: {
    items: itemsReducer,
    user: userReducer
  }
})

export default store
