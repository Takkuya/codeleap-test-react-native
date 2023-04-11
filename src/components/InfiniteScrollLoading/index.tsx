import { ActivityIndicator, View } from 'react-native'
import theme from '../../global/styles/theme'
import { useAppSelector } from '../../redux/store'
import { Container, NoMorePostsContainer, Paragraph } from './styles'

type InfiniteScrollLoading = {
  postsLength: number
  loading: boolean
}

export const InfiniteScrollLoading = ({
  postsLength,
  loading
}: InfiniteScrollLoading) => {
  const totalPostsCount = useAppSelector((store) => store.posts.totalPostsCount)

  if (loading) {
    return <View />
  }

  if (postsLength >= totalPostsCount) {
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
