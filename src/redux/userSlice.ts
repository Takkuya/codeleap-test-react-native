import { createSlice } from '@reduxjs/toolkit'

import { AppDispatch } from './store'

const initialState = { value: '' }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getName: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { getName } = userSlice.actions

export const getUsername =
  (username: string) => async (dispatch: AppDispatch) => {
    dispatch(getName(username))
  }

export default userSlice.reducer
