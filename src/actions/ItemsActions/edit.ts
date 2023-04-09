import { api } from '../../lib/axios'

type EditItemsData = {
  itemId: string
  itemTitle: string
  itemContent: string
}

export const editItems = async ({
  itemId,
  itemTitle,
  itemContent
}: EditItemsData) => {
  try {
    const response = await api.patch(`/${itemId}/`, {
      title: itemTitle,
      content: itemContent
    })

    return response.data
  } catch (err) {
    console.error(err)
  }
}
