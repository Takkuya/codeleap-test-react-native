import { PressableProps } from 'react-native'
import {
  ButtonWrapper,
  ButtonText,
  VariantProps,
  ButtonContainer
} from './styles'

type IButtonProps = React.PropsWithChildren<VariantProps & PressableProps>

export const Button = ({
  type = 'default',
  variant,
  children,
  ...rest
}: IButtonProps) => {
  return (
    <ButtonContainer>
      <ButtonWrapper type={type} variant={variant} {...rest}>
        <ButtonText type={type} variant={variant}>
          {children}
        </ButtonText>
      </ButtonWrapper>
    </ButtonContainer>
  )
}
