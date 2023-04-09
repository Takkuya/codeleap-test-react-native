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
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { useState } from 'react'
import { postCardItems } from '../../redux/itemsSlice'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

export const CreateNewPost = () => {
  const [cardTitle, setCardTitle] = useState('')
  const [cardContent, setCardContent] = useState('')

  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()
  const dispatch = useAppDispatch()
  const userState = useAppSelector((store) => store.user)

  function handleCreateNewItem() {
    dispatch(
      postCardItems({
        itemUsername: userState.value,
        itemTitle: cardTitle,
        itemContent: cardContent
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
        >
          Create
        </Button>
      </Footer>
    </CreateNewPostContainer>
  )
}
