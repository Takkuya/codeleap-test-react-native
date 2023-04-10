import styled from 'styled-components/native'

export const CreateNewPostContainer = styled.ScrollView`
  padding: 16px;
  gap: 12px;
`

export const Header = styled.View``

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 20px;
`

export const Content = styled.View`
  gap: 16px;
`

export const Footer = styled.View`
  padding-top: 12px;
  margin-bottom: 25px;
`
