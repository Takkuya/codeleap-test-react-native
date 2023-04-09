import { TextInputProps } from 'react-native'
import { CustomTextInput, Label, TextInputStyleProps } from './styles'

export type ITextInputProps = TextInputProps &
  TextInputStyleProps & {
    label?: string
  }

export const TextInput = ({
  type = 'default',
  error,
  label,
  ...props
}: ITextInputProps) => {
  const labelExists = label !== undefined

  return (
    <>
      {labelExists && <Label>{label}</Label>}
      <CustomTextInput error={error} type={type} {...props} />
    </>
  )
}
