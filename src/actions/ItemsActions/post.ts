import { api } from '../../lib/axios'

export type PostItemsData = {
  itemUsername: string
  itemTitle: string
  itemContent: string
}

export const postItems = async ({
  itemUsername,
  itemTitle,
  itemContent
}: PostItemsData) => {
  try {
    const response = await api.post('/', {
      username: itemUsername,
      title: itemTitle,
      content: itemContent
    })
    return response
  } catch (err) {
    console.error(err)
  }
}
