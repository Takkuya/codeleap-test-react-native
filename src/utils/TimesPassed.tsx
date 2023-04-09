import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Text } from 'react-native'
import 'dayjs/locale/pt-br'

dayjs.extend(relativeTime)

export const TimesPassed = (date: string) => {
  dayjs.locale('pt-br')

  const timePassed = dayjs(date).fromNow()

  return (
    <>
      <Text>{timePassed}</Text>
    </>
  )
}
