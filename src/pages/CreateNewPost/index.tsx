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
import { useAppDispatch } from '../../redux/store'
import { useState } from 'react'
import { createPostData } from '../../redux/postsSlice'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const CreateNewPost = () => {
  const [cardTitle, setCardTitle] = useState('')
  const [cardContent, setCardContent] = useState('')

  const isCardTitleEmpty = cardTitle.trim().length < 1
  const isCardContentEmpty = cardContent.trim().length < 1

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()
  const dispatch = useAppDispatch()

  async function handleCreateNewPost() {
    const username = await AsyncStorage.getItem(
      '@codeleap-react-native-takkuya-username'
    )

    if (!username) {
      return navigation.navigate('SignUp')
    }

    dispatch(
      createPostData({
        postUsername: username,
        postTitle: cardTitle.trim(),
        postContent: cardContent.trim()
      })
    )
    setCardTitle('')
    setCardContent('')
    navigation.navigate('Home')
  }

  return (
    <CreateNewPostContainer keyboardShouldPersistTaps={'handled'}>
      <Header>
        <Title>What’s on your mind?</Title>
      </Header>
      <Content>
        <View style={{ paddingTop: 12 }}>
          <TextInput
            placeholder="John doe"
            label="Title"
            multiline={true}
            maxLength={255}
            onChangeText={(value) => setCardTitle(value)}
          />
        </View>
        <View>
          <TextInput
            type="textarea"
            placeholder="Content Here"
            label="Content"
            multiline={true}
            maxLength={255}
            onChangeText={(value) => setCardContent(value)}
          />
        </View>
      </Content>
      <Footer>
        <Button
          type={'default'}
          variant={'primary'}
          onPress={handleCreateNewPost}
          disabled={isCardTitleEmpty || isCardContentEmpty}
        >
          Create
        </Button>
      </Footer>
    </CreateNewPostContainer>
  )
}
