import { ActivityIndicator, View } from 'react-native'
import theme from '../global/styles/theme'

type InfiniteScrollLoading = {
  loading: boolean
}

export const InfiniteScrollLoading = ({ loading }: InfiniteScrollLoading) => {
  if (loading) {
    return <View />
  }

  return <ActivityIndicator size="large" color={theme.colors.primary} />
}
