import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Text } from 'react-native'

dayjs.extend(relativeTime)

export const TimesPassed = (date: string) => {
  const timePassed = dayjs(date).fromNow()

  return (
    <>
      <Text>{timePassed}</Text>
    </>
  )
}
