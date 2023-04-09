import { ActivityIndicator } from 'react-native'
import theme from '../../global/styles/theme'
import { LoadingContainer } from './styles'

export const Loading = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </LoadingContainer>
  )
}
