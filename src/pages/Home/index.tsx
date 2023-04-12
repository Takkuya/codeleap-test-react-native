import { RefreshControl, SafeAreaView, StatusBar } from 'react-native'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import {
  HomeContainer,
  Header,
  Body,
  Title,
  LogoutButton,
  IconWrapper,
  StickButton
} from './styles'
import theme from '../../global/styles/theme'
import { PostCard } from '../../components/PostCard'
import { Icon } from '../../components/Icon'
import { useCallback, useRef, useState } from 'react'
import { useEffect } from 'react'
import { InfiniteScrollLoading } from '../../components/InfiniteScrollLoading'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { Loading } from '../../components/Loading'
import {
  getPostData,
  loadPostDataWhenInfiniteScroll
} from '../../redux/postsSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()
  const dispatch = useAppDispatch()

  const posts = useAppSelector((store) => store.posts.value)
  const loading = useAppSelector((store) => store.posts.loading)
  const totalPostsCount = useAppSelector((store) => store.posts.totalPostsCount)

  const isPostsCountGreaterThanTotalPostsCount = posts.length > totalPostsCount

  const [isPostsLoading, setIsPostsLoading] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const postsLoadingRef = useRef(false)

  const listPosts = useCallback(async () => {
    if (postsLoadingRef.current || isPostsCountGreaterThanTotalPostsCount) {
      return
    }

    postsLoadingRef.current = true
    setIsPostsLoading(true)
    dispatch(loadPostDataWhenInfiniteScroll(posts.length))
    postsLoadingRef.current = false
    setIsPostsLoading(false)
  }, [posts.length])

  async function getPostsPullToRefresh() {
    setRefreshing(true)
    dispatch(getPostData())
    setRefreshing(false)
  }

  async function handleLogout() {
    await AsyncStorage.removeItem('@codeleap-react-native-takkuya-username')
    navigation.navigate('SignUp')
  }

  useEffect(() => {
    getPostsPullToRefresh()
  }, [])

  if (loading == true) {
    return (
      <HomeContainer>
        <Loading />
      </HomeContainer>
    )
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.colors.primary} />
      <HomeContainer>
        <Header>
          <Title>CodeLeap Network</Title>
          <IconWrapper style={{ borderRadius: 90 }}>
            <LogoutButton>
              <Icon
                name="log-out"
                size={24}
                color={'white'}
                onPress={handleLogout}
              />
            </LogoutButton>
          </IconWrapper>
        </Header>
        <Body
          data={posts}
          keyboardShouldPersistTaps="handled"
          onEndReached={listPosts}
          onEndReachedThreshold={0.1}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: { item: any }) => (
            <PostCard
              id={item.id}
              title={item.title}
              username={item.username}
              created_datetime={item.created_datetime}
              content={item.content}
            />
          )}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={getPostsPullToRefresh}
            />
          }
          ListFooterComponent={
            <InfiniteScrollLoading
              postsLength={posts.length}
              loading={isPostsLoading}
            />
          }
        />
        <StickButton>
          <Icon
            name="plus"
            size={48}
            color={'white'}
            rounded
            onPress={() => navigation.navigate('NewPost')}
          />
        </StickButton>
      </HomeContainer>
    </SafeAreaView>
  )
}
