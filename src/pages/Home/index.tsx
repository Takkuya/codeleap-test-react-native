import { Pressable, SafeAreaView, StatusBar, Text } from 'react-native'
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
import { InfiniteScrollLoading } from '../../InfiniteScrollLoading'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { Loading } from '../../components/Loading'
import { loadInfiniteScrollPosts } from '../../actions/ItemsActions/loadInfiniteScrollPosts'
import { getCardItems, loadCardItems, loadPosts } from '../../redux/itemsSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const Home = () => {
  const dispatch = useAppDispatch()

  const items = useAppSelector((store) => store.items.value)
  // const offset = useAppSelector((store) => store.items.offset)
  const loading = useAppSelector((store) => store.items.loading)
  // const userState = useAppSelector((store) => store.user)

  // const [posts, setPosts] = useState([])
  const [isPostsLoading, setIsPostsLoading] = useState(false)
  const postsLoadingRef = useRef(false)

  const [offset, setOffset] = useState(0)

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()

  const listPosts = useCallback(async () => {
    if (postsLoadingRef.current || isPostsLoading) {
      return
    }

    postsLoadingRef.current = true
    setIsPostsLoading(true)
    dispatch(loadCardItems(offset))
    setOffset((previousOffset) => previousOffset + 10)
    postsLoadingRef.current = false
    setIsPostsLoading(false)
  }, [dispatch])

  // async function listPosts() {
  //   if (postsLoadingRef.current) {
  //     return
  //   }

  //   postsLoadingRef.current = true
  //   setIsPostsLoading(true)
  //   const response = await api.get(`?limit=${postsPerPage}&offset=${offset}`)

  //   setPosts([...posts, ...response.data.results])
  //   setOffset((previousOffset) => previousOffset + 10)
  //   postsLoadingRef.current = false
  //   setIsPostsLoading(false)
  //   setLoading(false)
  // }

  async function removeUserFromStorage() {
    await AsyncStorage.removeItem('username')
    navigation.navigate('SignUp')
  }

  useEffect(() => {
    dispatch(getCardItems())
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
                onPress={removeUserFromStorage}
              />
            </LogoutButton>
          </IconWrapper>
        </Header>
        <Pressable onPress={listPosts}>
          <Text>asdadadasdassdadasdasasdasd</Text>
        </Pressable>
        <Body
          contentContainerStyle={{ paddingBottom: 32 }}
          data={items}
          keyboardShouldPersistTaps="handled"
          getItem={(data, index) => data[index]}
          getItemCount={(data) => data.length}
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
          onEndReached={listPosts}
          onEndReachedThreshold={0.1}
          ListFooterComponent={
            <InfiniteScrollLoading loading={isPostsLoading} />
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
