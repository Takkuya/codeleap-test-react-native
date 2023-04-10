import { api } from '../../lib/axios'

export const loadInfiniteScrollPosts = async (offset: number) => {
  const postsPerPage = 10

  try {
    const response = await api.get(`/?limit=${postsPerPage}&offset=${offset}`)

    return {
      responseCount: response.data.count,
      responseResults: response.data.results
    }
  } catch (err) {
    console.error(err)
  }
}
