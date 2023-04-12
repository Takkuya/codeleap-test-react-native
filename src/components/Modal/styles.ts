import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
const screenHeight = Dimensions.get('screen').height
const screeHeightCalc = screenHeight < 800 ? 120 : 280
const maxHeight = screenHeight - screeHeightCalc

console.log('screenHeight', screeHeightCalc)

export const ModalContainer = styled.View`
  border-radius: 16px;
  max-height: ${maxHeight}px;
  background: ${(props) => props.theme.colors.white};
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding: 12px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${(props) => props.theme.fonts.bold};
  flex-shrink: 1;
`

export const IconWrapper = styled.Pressable`
  justify-content: flex-end;
  align-items: flex-end;
`
