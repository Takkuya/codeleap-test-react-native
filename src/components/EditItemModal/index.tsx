import { View } from 'react-native'
import { Button } from '../Button'
import { CustomModal } from '../Modal'
import { TextInput } from '../TextInput'
import { BodyModal, FooterModal } from './styles'

type EditModalProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleIsModalOpen: () => void
}

export const EditItemModal = ({
  isOpen,
  setIsOpen,
  toggleIsModalOpen
}: EditModalProps) => {
  function handleIsModalOpen() {
    toggleIsModalOpen()
  }

  return (
    <CustomModal
      title="Edit item"
      isModalOpen={isOpen}
      setIsModalOpen={setIsOpen}
    >
      <BodyModal>
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
      </BodyModal>

      <FooterModal>
        <Button
          type={'outline'}
          variant={'primary'}
          onPress={toggleIsModalOpen}
        >
          Cancel
        </Button>
        <Button type={'default'} variant={'success'}>
          Save
        </Button>
      </FooterModal>
    </CustomModal>
  )
}
