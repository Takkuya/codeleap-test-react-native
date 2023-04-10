import { api } from '../../lib/axios'

export const loadInfiniteScrollPosts = async (offset: number) => {
  const postsPerPage = 10

  console.log('função', offset)

  try {
    const response = await api.get(`/?limit=${postsPerPage}&offset=${offset}`)

    return response.data.results
  } catch (err) {
    console.error(err)
  }
}
