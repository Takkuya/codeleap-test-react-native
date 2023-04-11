import { api } from '../../lib/axios'

type EditPostData = {
  postId: string
  postTitle: string
  postContent: string
}

export const editPost = async ({
  postId,
  postTitle,
  postContent
}: EditPostData) => {
  try {
    const response = await api.patch(`/${postId}/`, {
      title: postTitle,
      content: postContent
    })

    return response.data
  } catch (err) {
    console.error(err)
  }
}
