import { Pressable, PressableProps, Text } from 'react-native'
import styled from 'styled-components/native'

type ButtonTypes = 'default' | 'outline'

type ButtonVariants = 'primary' | 'success' | 'error'

export type VariantProps = PressableProps & {
  type: ButtonTypes
  variant: ButtonVariants
}

export const ButtonContainer = styled.View`
  border-radius: 8px;
`

export const ButtonWrapper = styled(Pressable).attrs(
  (props) =>
    ({
      android_ripple: {
        color: props.theme.colors.ripple,
        borderless: true
      }
    } as PressableProps)
)<VariantProps>`
  background: ${(props) =>
    props.type === 'outline'
      ? 'transparent'
      : props.theme.colors[props.variant]};

  border: 1px solid
    ${(props) =>
      props.type === 'outline'
        ? props.theme.colors.gray300
        : props.theme.colors[props.variant]};

  border-radius: 8px;

  align-items: center;

  padding: 8px 24px;
`
export const ButtonText = styled(Text)<VariantProps>`
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 14px;

  color: ${(props) =>
    props.type === 'default'
      ? props.theme.colors.white
      : props.theme.colors['text-base']};
`
