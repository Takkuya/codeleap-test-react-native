import { ActivityIndicator, View } from 'react-native'
import theme from '../global/styles/theme'
import { useAppSelector } from '../redux/store'
import { Container, NoMorePostsContainer, Paragraph } from './styles'

type InfiniteScrollLoading = {
  itemsLength: number
  loading: boolean
}

export const InfiniteScrollLoading = ({
  itemsLength,
  loading
}: InfiniteScrollLoading) => {
  const postsCount = useAppSelector((store) => store.items.postsCount)

  if (loading) {
    return <View />
  }

  if (itemsLength === postsCount) {
    return (
      <NoMorePostsContainer>
        <Paragraph>There is no more posts :c</Paragraph>
      </NoMorePostsContainer>
    )
  }

  return (
    <Container>
      <ActivityIndicator size={'large'} color={theme.colors.primary} />
    </Container>
  )
}
