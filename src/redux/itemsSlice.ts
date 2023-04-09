import { createSlice } from '@reduxjs/toolkit'

import { getItems } from '../actions/ItemsActions/get'
import { postItems } from '../actions/ItemsActions/post'
import { AppDispatch } from './store'

const initialState = { value: [], loading: true }

type PostCardItemsProps = {
  itemUsername: string
  itemTitle: string
  itemContent: string
}

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    get: (state, action) => {
      state.value = action.payload
      state.loading = false
    },
    post: (state, action) => {
      state.value.concat(action.payload)
    }
  }
})

export const { get, post } = itemsSlice.actions

export const getCardItems = () => async (dispatch: AppDispatch) => {
  const items = await getItems()
  dispatch(get(items))
}

export const postCardItems =
  ({ itemUsername, itemTitle, itemContent }: PostCardItemsProps) =>
  async (dispatch: AppDispatch) => {
    console.log('aiaiaiaia', itemUsername, itemTitle, itemContent)

    try {
      const response = await postItems({ itemUsername, itemTitle, itemContent })

      dispatch(post(response?.data))
      dispatch(getCardItems())
    } catch (err) {
      console.error(err)
    }
  }

export default itemsSlice.reducer
