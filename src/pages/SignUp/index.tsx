import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { useState } from 'react'
// import { Pressable, Text } from 'react-native'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'
import { useAppDispatch } from '../../redux/store'
import { getUsername } from '../../redux/userSlice'
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

  const dispatch = useAppDispatch()

  function handleUsername() {
    dispatch(getUsername(username.trim()))
    navigation.navigate('Home')
  }

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
