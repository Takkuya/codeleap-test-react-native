import { Pressable } from 'react-native'
import styled from 'styled-components/native'

export const PostCardContainer = styled.View`
  padding: 20px 20px 0 20px;
`

export const Header = styled.View`
  background: ${(props) => props.theme.colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  border-top-right-radius: 16px;
  border-top-left-radius: 16px;

  padding: 12px 16px;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.white};
  font-size: 20px;
  flex-shrink: 1;
`

export const IconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`

export const Content = styled.View`
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.gray300};
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border: 1px solid ${(props) => props.theme.colors.gray300};

  gap: 12px;
  align-items: flex-start;

  padding: 16px;
`

export const ContentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const User = styled.Text`
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.gray600};
  font-size: 16px;
`
export const TimePassed = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.gray600};
  font-size: 16px;
`

export const ContentBody = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
`

export const Paragraph = styled.Text`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.regular};
`
