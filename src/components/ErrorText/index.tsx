import { Content, ErrorTextContainer } from './styles'

type IErrorMessageProps = React.PropsWithChildren<{}>

export const ErrorText = ({ children }: IErrorMessageProps) => {
  return (
    <ErrorTextContainer>
      <Content>{children}</Content>
    </ErrorTextContainer>
  )
}
