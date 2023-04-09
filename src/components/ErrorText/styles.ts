import styled from 'styled-components/native'

export const ErrorTextContainer = styled.View`
  align-items: flex-start;
`

export const Content = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 14px;
  color: ${(props) => props.theme.colors.error};
`
