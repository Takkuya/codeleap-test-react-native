import { api } from '../../lib/axios'

type DeleteItemsData = {
  itemId: string
}

export const deleteItems = async ({ itemId }: DeleteItemsData) => {
  try {
    const response = await api.delete(`/${itemId}/`)

    return response.data.results
  } catch (err) {
    console.error(err)
  }
}
