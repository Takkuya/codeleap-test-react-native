import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
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

  const isUsernameEmpty = username.trim().length < 1

  async function getUsernameFromStorage() {
    const username = await AsyncStorage.getItem('username')
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
              multiline={true}
              maxLength={255}
              value={username}
              onChangeText={(value) => setUsername(value)}
            />
          </Body>
          <Footer>
            <Button
              type={'default'}
              variant={'primary'}
              onPress={handleUsername}
              disabled={isUsernameEmpty}
            >
              ENTER
            </Button>
          </Footer>
        </Wrapper>
      </Content>
    </SignUpContainer>
  )
}
