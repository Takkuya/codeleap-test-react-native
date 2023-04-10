import { createSlice } from '@reduxjs/toolkit'

import { getItems } from '../actions/ItemsActions/get'
import { loadInfiniteScrollPosts } from '../actions/ItemsActions/loadInfiniteScrollPosts'
import { postItems } from '../actions/ItemsActions/post'
import { AppDispatch } from './store'

type IValue = {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

const initialState = { value: [] as IValue[], loading: true }

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
    loadPosts: (state, action) => {
      ;(state.value = [...state.value, ...action.payload]),
        (state.loading = false)
    },
    post: (state, action) => {
      state.value.concat(action.payload)
    }
  }
})

export const { get, loadPosts, post } = itemsSlice.actions

export const getCardItems = () => async (dispatch: AppDispatch) => {
  const items = await getItems()
  dispatch(get(items))
}

export const loadCardItems =
  (offset: number) => async (dispatch: AppDispatch) => {
    const items = await loadInfiniteScrollPosts(offset)
    dispatch(loadPosts(items))
  }

// export const getCardItemsInfiniteScroll =
//   (offset: number) => async (dispatch: AppDispatch) => {
//     const items = await getItemsInfiniteScroll(offset)
//     dispatch(getInfiniteScrollItems(items))
//   }

export const postCardItems =
  ({ itemUsername, itemTitle, itemContent }: PostCardItemsProps) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await postItems({ itemUsername, itemTitle, itemContent })

      dispatch(post(response?.data))
      dispatch(getCardItems())
    } catch (err) {
      console.error(err)
    }
  }

export default itemsSlice.reducer
