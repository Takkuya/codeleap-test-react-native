import { api } from '../../lib/axios'

export const getItems = async () => {
  try {
    const response = await api.get('/')
    return response.data.results
  } catch (err) {
    console.error(err)
  }
}
