export function convertTimeTo24(time12h) {
  const [time, modifier] = time12h.split(' ')

  let [hours, minutes] = time.split(':')

  if (hours === '12') {
    hours = '00'
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12
  }

  return `${hours}:${minutes}`
}

export function getCurrentTime() {
  const date = new Date()
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (hours.length === 1) {
		hours = `0${hours}`
  }
    
  if (minutes.length === 1) {
    minutes = `0${minutes}`
	}

  return `${hours}:${minutes}`
}

export function toSeconds(...times) {
  const seconds = times.map(time => {
    const hourSeconds = time.split(':')[0] * 3600
    const minutesSeconds = time.split(':')[1] * 60
    const seconds = hourSeconds + minutesSeconds
    return seconds
  })
  return seconds
}