import { ActivityIndicator, View } from 'react-native'
import theme from '../global/styles/theme'
import { Container } from './styles'

type InfiniteScrollLoading = {
  loading: boolean
}

export const InfiniteScrollLoading = ({ loading }: InfiniteScrollLoading) => {
  if (loading) {
    return <View />
  }

  return (
    <Container>
      <ActivityIndicator size={'large'} color={theme.colors.primary} />
    </Container>
  )
}
