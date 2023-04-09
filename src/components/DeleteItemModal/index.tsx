import { Button } from '../Button'
import { CustomModal } from '../Modal'
import { FooterModal } from './styles'

type DeleteItemModalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleIsModalOpen: () => void
}

export const DeleteItemModal = ({
  isOpen,
  setIsOpen,
  toggleIsModalOpen
}: DeleteItemModalProps) => {
  function handleIsModalOpen() {
    toggleIsModalOpen()
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
        <Button type={'default'} variant={'error'}>
          Delete
        </Button>
      </FooterModal>
    </CustomModal>
  )
}
