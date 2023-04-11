import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postsSlice'
import userReducer from './userSlice'
import { useSelector } from 'react-redux'
import { TypedUseSelectorHook, useDispatch } from 'react-redux'

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const store = configureStore({
  reducer: {
    posts: postsReducer,
    user: userReducer
  }
})

export default store
