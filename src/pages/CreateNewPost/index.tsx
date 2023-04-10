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
import { postCardItems } from '../../redux/itemsSlice'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const CreateNewPost = () => {
  const [cardTitle, setCardTitle] = useState('')
  const [cardContent, setCardContent] = useState('')

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()
  const dispatch = useAppDispatch()

  async function handleCreateNewItem() {
    const username = await AsyncStorage.getItem('username')

    if (!username) {
      return navigation.navigate('SignUp')
    }

    dispatch(
      postCardItems({
        itemUsername: username,
        itemTitle: cardTitle.trim(),
        itemContent: cardContent.trim()
      })
    )
    setCardTitle('')
    setCardContent('')
    navigation.navigate('Home')
  }

  return (
    <CreateNewPostContainer>
      <Header>
        <Title>What’s on your mind?</Title>
      </Header>
      <Content>
        <View>
          <TextInput
            placeholder="John doe"
            label="Title"
            onChangeText={(value) => setCardTitle(value)}
          />
        </View>
        <View>
          <TextInput
            type="textarea"
            placeholder="Content Here"
            label="Content"
            multiline={true}
            onChangeText={(value) => setCardContent(value)}
          />
        </View>
      </Content>
      <Footer>
        <Button
          type={'default'}
          variant={'primary'}
          onPress={handleCreateNewItem}
          disabled={
            cardTitle.trim().length < 1 || cardContent.trim().length < 1
          }
        >
          Create
        </Button>
      </Footer>
    </CreateNewPostContainer>
  )
}
