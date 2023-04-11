import { createSlice } from '@reduxjs/toolkit'

import { getPosts } from '../actions/PostsActions/get'
import { getPostsInfiniteScroll } from '../actions/PostsActions/getPostsInfiniteScroll'
import { createPost } from '../actions/PostsActions/post'
import { AppDispatch } from './store'

type IValue = {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

const initialState = {
  value: [] as IValue[],
  totalPostsCount: 0,
  loading: true
}

type PostCardDataProps = {
  postUsername: string
  postTitle: string
  postContent: string
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    get: (state, action) => {
      state.value = action.payload.responseResults
      state.totalPostsCount = action.payload?.responseCount
      state.loading = false
    },
    loadPostsWhenInfiniteScroll: (state, action) => {
      state.value = [...state.value, ...action.payload.responseResults]
      state.totalPostsCount = action.payload?.responseCount
      state.loading = false
    },

    post: (state, action) => {
      state.value = [...state.value, action.payload]
    }
  }
})

export const { get, loadPostsWhenInfiniteScroll, post } = postsSlice.actions

export const getPostData = () => async (dispatch: AppDispatch) => {
  const posts = await getPosts()
  dispatch(get(posts))
}

export const loadPostDataWhenInfiniteScroll =
  (offset: number) => async (dispatch: AppDispatch) => {
    const posts = await getPostsInfiniteScroll(offset)
    dispatch(loadPostsWhenInfiniteScroll(posts))
  }

export const createPostData =
  ({ postUsername, postTitle, postContent }: PostCardDataProps) =>
  async (dispatch: AppDispatch) => {
    try {
      const response = await createPost({
        postUsername,
        postTitle,
        postContent
      })

      dispatch(post(response?.data))
      dispatch(getPostData())
    } catch (err) {
      console.error(err)
    }
  }

export default postsSlice.reducer
