import { View } from 'react-native'
import { Button } from '../../components/Button'
import { TextInput } from '../../components/TextInput'
import {
  Header,
  Title,
  Content,
  CreateNewPostContainer,
  Footer
} from './styles'

export const CreateNewPost = () => {
  return (
    <CreateNewPostContainer>
      <Header>
        <Title>What’s on your mind?</Title>
      </Header>
      <Content>
        <View>
          <TextInput placeholder="John doe" label="Title" />
        </View>
        <View>
          <TextInput
            type="textarea"
            placeholder="Content Here"
            label="Content"
            multiline={true}
          />
        </View>
      </Content>
      <Footer>
        <Button type={'default'} variant={'primary'}>
          Create
        </Button>
      </Footer>
    </CreateNewPostContainer>
  )
}
