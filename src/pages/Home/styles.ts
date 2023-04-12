import { FlatList, FlatListProps, Pressable } from 'react-native'
import styled from 'styled-components/native'

type PostType = {
  id: string
  username: string
  created_datetime: string
  title: string
  content: string
}

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
  border-radius: 6px;
`

export const Body = styled(
  FlatList as new (props: FlatListProps<PostType>) => FlatList<PostType>
).attrs({})`
  gap: 24px;
  height: 100%;
  flex: 1;
`

export const StickButton = styled.View`
  position: absolute;
  align-self: flex-end;
  right: 20px;
  bottom: 30px;
  background: ${(props) => props.theme.colors.primary};
  z-index: 999;

  border-radius: 50px;
  elevation: 3;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.23;
  shadow-radius: 2.62px;
`
