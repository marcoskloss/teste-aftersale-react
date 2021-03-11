export default function isNight(sunset, sunrise, current) {
  if (current >= sunrise && current <= sunset) {
    return false
  } else {
    return true
  }
} 