import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
// import { Pressable, Text } from 'react-native'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'
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
            />
          </Body>
          <Footer>
            <Button
              type={'default'}
              variant={'primary'}
              onPress={() => navigation.navigate('Home')}
            >
              ENTER
            </Button>
          </Footer>
        </Wrapper>
      </Content>
    </SignUpContainer>
  )
}
