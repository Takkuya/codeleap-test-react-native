import { api } from '../../lib/axios'

export type CreatePostData = {
  postUsername: string
  postTitle: string
  postContent: string
}

export const createPost = async ({
  postUsername,
  postTitle,
  postContent
}: CreatePostData) => {
  try {
    const response = await api.post('/', {
      username: postUsername,
      title: postTitle,
      content: postContent
    })
    return response
  } catch (err) {
    console.error(err)
  }
}
