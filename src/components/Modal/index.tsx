import { View } from 'react-native'
import Modal from 'react-native-modal'
import { Header, IconWrapper, ModalContainer, Title } from './styles'
import { Icon } from '../Icon'

type CustomModalProps = React.PropsWithChildren<{}> & {
  title: string
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomModal = ({
  title,
  isModalOpen,
  setIsModalOpen,
  children
}: CustomModalProps) => {
  function handleIsModalOpen() {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <View>
      <Modal isVisible={isModalOpen}>
        <ModalContainer>
          <Header>
            <Title>{title}</Title>
            <IconWrapper onPress={handleIsModalOpen}>
              <Icon
                name="x"
                size={24}
                color="text-base"
                onPress={handleIsModalOpen}
              />
            </IconWrapper>
          </Header>

          {children}
        </ModalContainer>
      </Modal>
    </View>
  )
}
