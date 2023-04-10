import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { editItems } from '../../actions/ItemsActions/edit'
import { getCardItems } from '../../redux/itemsSlice'
import { useAppDispatch } from '../../redux/store'
import { Button } from '../Button'
import { CustomModal } from '../Modal'
import { TextInput } from '../TextInput'
import { BodyModal, FooterModal } from './styles'

type EditModalProps = {
  itemId: string
  itemTitle: string
  itemContent: string
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleIsModalOpen: () => void
}

export const EditItemModal = ({
  itemId,
  itemTitle,
  itemContent,
  isOpen,
  setIsOpen,
  toggleIsModalOpen
}: EditModalProps) => {
  const dispatch = useAppDispatch()

  const [cardTitle, setCardTitle] = useState(itemTitle)
  const [cardContent, setCardContent] = useState(itemContent)

  const isCardTitleEmpty = cardTitle.trim().length < 1
  const isCardContentEmpty = cardContent.trim().length < 1

  async function handleEditItem() {
    await editItems({
      itemId,
      itemTitle: cardTitle.trim(),
      itemContent: cardContent.trim()
    })
    await dispatch(getCardItems())
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
            onPress={handleEditItem}
            disabled={isCardTitleEmpty || isCardContentEmpty}
          >
            Save
          </Button>
        </FooterModal>
      </ScrollView>
    </CustomModal>
  )
}
