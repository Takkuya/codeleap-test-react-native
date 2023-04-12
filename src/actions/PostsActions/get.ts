import { api } from '../../lib/axios'

export const getPosts = async () => {
  try {
    const response = await api.get(`/`)

    return {
      responseCount: response.data.count,
      responseResults: response.data.results
    }
  } catch (err) {
    console.error(err)
  }
}
