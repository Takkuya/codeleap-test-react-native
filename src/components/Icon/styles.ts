import { Pressable, PressableProps } from 'react-native'
import styled from 'styled-components/native'

type IconWrapperVariant = {
  rounded?: boolean
}

export const IconWrapper = styled.View<IconWrapperVariant>`
  border-radius: ${(props) => (props.rounded ? '50px' : '8px')};
`

export const IconButton = styled(Pressable).attrs(
  (props) =>
    ({
      android_ripple: {
        color: props.theme.colors.ripple,
        borderless: true
      } as PressableProps['android_ripple']
    } as PressableProps)
)`
  padding: 4px;
  border-radius: 6px;
`
