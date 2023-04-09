import { ColorValue, TextInput } from 'react-native'
import styled from 'styled-components/native'
import { TextInputProps } from 'react-native'

type TextInputTypes = 'textarea' | 'default'

export type TextInputStyleProps = {
  type?: TextInputTypes
  error?: boolean
}

export const Label = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
  padding-bottom: 6px;
`

export const CustomTextInput = styled(TextInput).attrs(
  (props) =>
    ({
      placeholderTextColor: props.theme.colors.gray200 as ColorValue
    } as TextInputProps)
)<TextInputStyleProps>`
  border-radius: 8px;
  border: 1px solid
    ${(props) =>
      props.error ? props.theme.colors.error : props.theme.colors.gray600};
  padding: ${(props) =>
    props.type === 'textarea' ? '4px 12px 30px 12px' : '2px 12px'};
  font-family: ${(props) => props.theme.fonts.regular};

  font-size: 14px;
`
