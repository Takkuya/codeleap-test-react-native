import { SafeAreaView, StatusBar, Text, View } from 'react-native'
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
import { getCardItems } from '../../redux/itemsSlice'
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { Loading } from '../../components/Loading'

export const Home = () => {
  const items = useAppSelector((store) => store.items.value)
  const loading = useAppSelector((store) => store.items.loading)
  const userState = useAppSelector((store) => store.user)

  const dispatch = useAppDispatch()
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()

  const listPosts = useCallback(async () => {
    dispatch(getCardItems())
  }, [dispatch])

  console.log('renderizou home', userState)

  useEffect(() => {
    listPosts()
  }, [dispatch])

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
                onPress={() => navigation.navigate('SignUp')}
              />
            </LogoutButton>
          </IconWrapper>
        </Header>
        <Body
          contentContainerStyle={{ paddingBottom: 32 }}
          data={items}
          keyboardShouldPersistTaps="handled"
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: { item: any }) => (
            <PostCard
              id={item.id}
              title={item.title}
              username={item.username}
              created_datetime={item.created_datetime}
              content={item.content}
            />
          )}
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
