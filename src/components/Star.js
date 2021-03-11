import styles from '../styles/components/Star.module.css'

export function Star({isNight}) {
  return (
    <div className={`${styles.container} ${isNight ? styles.moon : styles.sun}`} />
  )
}