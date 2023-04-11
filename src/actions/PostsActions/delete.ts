import { api } from '../../lib/axios'

type DeletePostData = {
  postId: string
}

export const deletePost = async ({ postId }: DeletePostData) => {
  try {
    const response = await api.delete(`/${postId}/`)

    return response.data.results
  } catch (err) {
    console.error(err)
  }
}
