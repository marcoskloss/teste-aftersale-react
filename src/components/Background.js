import { Star } from './Star'

import styles from '../styles/components/Background.module.css'

export function Background({isNight}) {

  return (
    <div className={`${styles.container} ${isNight ? styles.night : styles.day}`}>
      <Star isNight={isNight}/>
      <div className={styles.ground} />
    </div>
  )
}