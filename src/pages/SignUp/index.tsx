import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
// import { Pressable, Text } from 'react-native'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'
import { useAppDispatch } from '../../redux/store'
import { getUsername } from '../../redux/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  SignUpContainer,
  Header,
  Body,
  Footer,
  Content,
  Wrapper,
  Title
} from './styles'

export const SignUp = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()
  const [username, setUsername] = useState('')

  async function getUsernameFromStorage() {
    const username = await AsyncStorage.getItem('username')
    console.log('username', username)
    if (username) {
      navigation.navigate('Home')
    }
  }

  const dispatch = useAppDispatch()

  async function handleUsername() {
    dispatch(getUsername(username.trim()))
    await AsyncStorage.setItem('username', username.trim())
    navigation.navigate('Home')
    setUsername('')
  }

  useEffect(() => {
    getUsernameFromStorage()
  }, [])

  return (
    <SignUpContainer>
      <Content>
        <Header>
          <Title>Welcome to CodeLeap network!</Title>
        </Header>
        <Wrapper>
          <Body>
            <TextInput
              placeholder="John doe"
              label="Please enter your username"
              value={username}
              onChangeText={(value) => setUsername(value)}
            />
          </Body>
          <Footer>
            <Button
              type={'default'}
              variant={'primary'}
              onPress={handleUsername}
              disabled={username.trim().length < 1}
            >
              ENTER
            </Button>
          </Footer>
        </Wrapper>
      </Content>
    </SignUpContainer>
  )
}
