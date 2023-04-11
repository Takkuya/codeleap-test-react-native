import { api } from '../../lib/axios'

type PostType = {
  id: number
  username: string
  created_datetime: string
  title: string
  content: string
}

export const getPostsInfiniteScroll = async (offset: number) => {
  const postsPerPage = 10

  try {
    const response = await api.get(`/?limit=${postsPerPage}&offset=${offset}`)

    const filteredResponse: PostType[] = response.data.results.filter(
      (item: PostType, index: number, self: PostType[]) => {
        return index === self.findIndex((t) => t.id === item.id)
      }
    )

    return {
      responseCount: response.data.count,
      responseResults: filteredResponse
    }
  } catch (err) {
    console.error(err)
  }
}
