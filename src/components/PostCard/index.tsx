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
import { useState } from 'react'
import { Icon } from '../Icon'
import { DeleteItemModal } from '../DeleteItemModal'
import { EditItemModal } from '../EditItemModal'

type PostCardProps = {
  title: string
  user: string
  content: string
}

export const PostCard = ({ title, user, content }: PostCardProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)

  function handleIsDeleteOpenModal() {
    setIsDeleteModalOpen(!isDeleteModalOpen)
  }

  function handleIsEditOpenModal() {
    setIsEditModalOpen(!isEditModalOpen)
  }

  return (
    <>
      <PostCardContainer>
        <Header>
          <Title>{title}</Title>
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
        </Header>

        <Content>
          <ContentHeader>
            <User>@{user}</User>
            <TimePassed>25 minutes ago</TimePassed>
          </ContentHeader>
          <ContentBody>
            <Paragraph>{content}</Paragraph>
          </ContentBody>
        </Content>
      </PostCardContainer>

      <DeleteItemModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        toggleIsModalOpen={handleIsDeleteOpenModal}
      />

      <EditItemModal
        isOpen={isEditModalOpen}
        setIsOpen={setIsEditModalOpen}
        toggleIsModalOpen={handleIsEditOpenModal}
      />
    </>
  )
}
