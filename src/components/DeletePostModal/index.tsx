import { deletePost } from '../../actions/PostsActions/delete'
import { getPostData } from '../../redux/postsSlice'
import { useAppDispatch } from '../../redux/store'
import { Button } from '../Button'
import { CustomModal } from '../Modal'
import { FooterModal } from './styles'

type DeletePostModalProps = {
  postId: string
  isOpen: boolean
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleIsDeleteModalOpen: () => void
}

export const DeletePostModal = ({
  postId,
  isOpen,
  setIsDeleteModalOpen,
  toggleIsDeleteModalOpen
}: DeletePostModalProps) => {
  const dispatch = useAppDispatch()

  function handleIsDeleteModalOpen() {
    toggleIsDeleteModalOpen()
  }

  async function handleDeleteItem() {
    await deletePost({ postId })
    await dispatch(getPostData())
  }

  return (
    <CustomModal
      title="Are you sure you want to delete this item?"
      isModalOpen={isOpen}
      setIsModalOpen={setIsDeleteModalOpen}
    >
      <FooterModal>
        <Button
          type={'outline'}
          variant={'primary'}
          onPress={handleIsDeleteModalOpen}
        >
          Cancel
        </Button>
        <Button type={'default'} variant={'error'} onPress={handleDeleteItem}>
          Delete
        </Button>
      </FooterModal>
    </CustomModal>
  )
}
