import { deleteItems } from '../../actions/ItemsActions/delete'
import { getCardItems } from '../../redux/itemsSlice'
import { useAppDispatch } from '../../redux/store'
import { Button } from '../Button'
import { CustomModal } from '../Modal'
import { FooterModal } from './styles'

type DeleteItemModalProps = {
  itemId: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleIsModalOpen: () => void
}

export const DeleteItemModal = ({
  itemId,
  isOpen,
  setIsOpen,
  toggleIsModalOpen
}: DeleteItemModalProps) => {
  const dispatch = useAppDispatch()

  function handleIsModalOpen() {
    toggleIsModalOpen()
  }

  async function handleDeleteItem() {
    await deleteItems({ itemId })
    await dispatch(getCardItems())
  }

  return (
    <CustomModal
      title="Are you sure you want to delete this item?"
      isModalOpen={isOpen}
      setIsModalOpen={setIsOpen}
    >
      <FooterModal>
        <Button
          type={'outline'}
          variant={'primary'}
          onPress={handleIsModalOpen}
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
