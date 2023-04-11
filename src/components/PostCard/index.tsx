import {
  PostCardContainer,
  Header,
  Content,
  Title,
  IconsContainer,
  ContentBody,
  ContentHeader,
  User,
  TimePassed,
  Paragraph
} from './styles'
import { useEffect, useState } from 'react'
import { Icon } from '../Icon'
import { DeletePostModal } from '../DeletePostModal'
import { EditPostModal } from '../EditIPostModal'
import { TimesPassed } from '../../utils/TimesPassed'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ParamListBase, useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

type PostCardProps = {
  id: string
  title: string
  username: string
  created_datetime: string
  content: string
}

export const PostCard = ({
  id,
  title,
  username,
  created_datetime,
  content
}: PostCardProps) => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>()

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  const [usernameAsyncStorage, setUsernameAsyncStorage] = useState('')

  async function getUsernameFromStorage() {
    const usernameFromAsyncStorage = await AsyncStorage.getItem(
      '@codeleap-react-native-takkuya-username'
    )
    if (!usernameFromAsyncStorage) {
      navigation.navigate('SignUp')
    } else {
      setUsernameAsyncStorage(usernameFromAsyncStorage)
    }
  }

  const isUserTheAuthor = usernameAsyncStorage === username

  function handleIsDeleteOpenModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen)
  }

  function handleIsEditOpenModal() {
    setIsEditModalOpen(!isEditModalOpen)
  }

  useEffect(() => {
    getUsernameFromStorage()
  }, [])

  return (
    <>
      <PostCardContainer>
        <Header>
          <Title>{title}</Title>
          {isUserTheAuthor && (
            <IconsContainer>
              <Icon
                name="trash-2"
                size={20}
                color={'white'}
                onPress={handleIsDeleteOpenModal}
              />
              <Icon
                name="edit"
                size={20}
                color={'white'}
                onPress={handleIsEditOpenModal}
              />
            </IconsContainer>
          )}
        </Header>

        <Content>
          <ContentHeader>
            <User>@{username}</User>
            <TimePassed>{TimesPassed(created_datetime)}</TimePassed>
          </ContentHeader>
          <ContentBody>
            <Paragraph>{content}</Paragraph>
          </ContentBody>
        </Content>
      </PostCardContainer>

      <DeletePostModal
        postId={id}
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        toggleIsModalOpen={handleIsDeleteOpenModal}
      />

      <EditPostModal
        postId={id}
        postTitle={title}
        postContent={content}
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        toggleIsModalOpen={handleIsEditOpenModal}
      />
    </>
  )
}
