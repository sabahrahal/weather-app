export const formatHour = (hour: string): string => {
  const AM = 'am'
  const DAY = 'day'
  const NIGHT = 'night'
  const split = hour.split(' ')
  if (split.length >= 2) {
    const amPm = split[split.length - 1].slice(-2).toLocaleLowerCase()
    if (amPm === AM) return NIGHT
  }
  return DAY
}
