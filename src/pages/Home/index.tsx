import { SafeAreaView, StatusBar } from 'react-native'
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

const test = [
  { id: 1, title: 'teste', user: 'Takkuya', content: 'lorem ipsum us ciik' },
  { id: 2, title: 'teste', user: 'Takkuya', content: 'lorem ipsum us ciik' },
  { id: 3, title: 'teste', user: 'Takkuya', content: 'lorem ipsum us ciik' },
  { id: 4, title: 'teste', user: 'Takkuya', content: 'lorem ipsum us ciik' },
  { id: 5, title: 'teste', user: 'Takkuya', content: 'lorem ipsum us ciik' },
  { id: 6, title: 'teste', user: 'Takkuya', content: 'lorem ipsum us ciik' }
]

export const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()

  return (
    <SafeAreaView>
      <StatusBar backgroundColor={theme.colors.primary} />
      <HomeContainer>
        <Header>
          <Title>CodeLeap Network</Title>
          <IconWrapper style={{ borderRadius: 90 }}>
            <LogoutButton>
              <Icon name="log-out" size={24} color={'white'} />
            </LogoutButton>
          </IconWrapper>
        </Header>
        <Body
          data={test}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PostCard
              title={item.title}
              user={item.user}
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
