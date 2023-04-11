import { useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { editPost } from '../../actions/PostsActions/edit'
import { getPostData } from '../../redux/postsSlice'
import { useAppDispatch } from '../../redux/store'
import { Button } from '../Button'
import { CustomModal } from '../Modal'
import { TextInput } from '../TextInput'
import { BodyModal, FooterModal } from './styles'

type EditPostModalProps = {
  postId: string
  postTitle: string
  postContent: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleIsModalOpen: () => void
}

export const EditPostModal = ({
  postId,
  postTitle,
  postContent,
  isOpen,
  setIsOpen,
  toggleIsModalOpen
}: EditPostModalProps) => {
  const dispatch = useAppDispatch()

  const [cardTitle, setCardTitle] = useState(postTitle)
  const [cardContent, setCardContent] = useState(postContent)

  const isCardTitleEmpty = cardTitle.trim().length < 1
  const isCardContentEmpty = cardContent.trim().length < 1

  async function handleEditPost() {
    await editPost({
      postId,
      postTitle: cardTitle.trim(),
      postContent: cardContent.trim()
    })
    await dispatch(getPostData())
    setIsOpen(false)
  }

  return (
    <CustomModal
      title="Edit item"
      isModalOpen={isOpen}
      setIsModalOpen={setIsOpen}
    >
      <ScrollView keyboardShouldPersistTaps={'handled'}>
        <BodyModal>
          <View>
            <TextInput
              placeholder="John doe"
              label="Title"
              value={cardTitle}
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
              value={cardContent}
              multiline={true}
              maxLength={255}
              onChangeText={(value) => setCardContent(value)}
            />
          </View>
        </BodyModal>
      </ScrollView>

      <FooterModal>
        <Button
          type={'outline'}
          variant={'primary'}
          onPress={toggleIsModalOpen}
        >
          Cancel
        </Button>
        <Button
          type={'default'}
          variant={'success'}
          onPress={handleEditPost}
          disabled={isCardTitleEmpty || isCardContentEmpty}
        >
          Save
        </Button>
      </FooterModal>
    </CustomModal>
  )
}
