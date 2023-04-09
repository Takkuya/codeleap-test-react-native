import { Pressable } from 'react-native'
import styled from 'styled-components/native'

export const HomeContainer = styled.View`
  background: ${(props) => props.theme.colors.white};
  height: 100%;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 22px;
  color: ${(props) => props.theme.colors.white};
`

export const Header = styled.View`
  padding: 20px;
  background: ${(props) => props.theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const IconWrapper = styled.View`
  border-radius: 8px;
`

export const LogoutButton = styled(Pressable).attrs((props) => ({
  android_ripple: {
    color: props.theme.colors.ripple,
    borderless: true
  }
}))`
  padding: 4px;
  border-radius: 6px;
`

export const Body = styled.FlatList`
  gap: 24px;
  height: 100%;

  flex: 1;
  padding-bottom: 32px;
`

export const StickButton = styled.View`
  position: absolute;
  align-self: flex-end;
  right: 30px;
  bottom: 30px;
  background: ${(props) => props.theme.colors.primary};
  z-index: 9999;

  border-radius: 50px;
`
