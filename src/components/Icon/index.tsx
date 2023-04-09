import { IconButton, IconWrapper } from './styles'
import { Feather } from '@expo/vector-icons'
import theme from '../../global/styles/theme'
import { PressableProps } from 'react-native'

type IconNames = keyof typeof Feather.glyphMap

type IconProps = PressableProps & {
  name: IconNames
  size: number
  rounded?: boolean
  color: keyof typeof theme.colors
}

export const Icon = ({
  name,
  size,
  color,
  rounded = false,
  ...rest
}: IconProps) => {
  return (
    <IconWrapper rounded={rounded}>
      <IconButton {...rest}>
        <Feather name={name} size={size} color={theme.colors[color]} />
      </IconButton>
    </IconWrapper>
  )
}
