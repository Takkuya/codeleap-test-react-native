import styled from 'styled-components/native'

export const ModalContainer = styled.View`
  background: ${(props) => props.theme.colors.white};
  border-radius: 16px;
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