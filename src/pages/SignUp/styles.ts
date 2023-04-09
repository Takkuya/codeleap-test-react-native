import styled from 'styled-components/native'

export const SignUpContainer = styled.View`
  height: 100%;
  background: ${(props) => props.theme.colors.gray100};
  justify-content: center;
  align-items: center;
`

export const Content = styled.View`
  background: ${(props) => props.theme.colors.white};
  padding: 24px;
  border-radius: 16px;
  gap: 16px;
`

export const Header = styled.View``

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 22px;
  color: ${(props) => props.theme.colors['text-base']};
`

export const Wrapper = styled.View`
  gap: 16px;
`

export const Body = styled.View`
  gap: 2px;
  color: ${(props) => props.theme.colors['text-base']};
  font-size: 16px;
`

export const Footer = styled.View``
