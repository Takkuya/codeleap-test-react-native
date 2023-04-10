import styled from 'styled-components/native'

export const Container = styled.View`
  padding: 16px;
`

export const NoMorePostsContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 16px;
`

export const Paragraph = styled.Text`
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.gray300};
`
