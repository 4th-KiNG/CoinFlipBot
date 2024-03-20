
export const formatTimeAgo = (time: number) => {

  console.log(time)

  const seconds = Math.trunc(Date.now() / 1000) - time
  const minutes = Math.trunc(seconds / 60)
  const hours = Math.trunc(minutes / 60)
  const days = Math.trunc(hours / 24)
  const month = Math.trunc(days / 30)

  if (minutes < 1) return ` ${seconds} seconds ago`
  if (hours < 1) return ` ${minutes} minutes ago`
  if (days < 1) return ` ${hours} hours ago`
  if (month < 1) return ` ${days} days ago`

  return ` ${month} month ago`
}