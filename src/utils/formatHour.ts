export const formatHour = (time: string): string => {
  const splitTime = time.split(' ')
  if (splitTime.length === 2) {
    const amPm = splitTime[1].toUpperCase()
    const [hourStr] = splitTime[0].split(':')
    const hour = parseInt(hourStr)

    if (amPm === 'AM') {
      if (hour >= 7 && hour <= 11) return 'day'
      if (hour === 12 || (hour >= 1 && hour <= 6)) return 'night'
    } else {
      if (hour === 12 || (hour >= 1 && hour <= 6)) return 'day'
      return 'night'
    }
  }
  return 'day'
}
