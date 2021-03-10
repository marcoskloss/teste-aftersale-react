import { useEffect, useState } from 'react'
import styles from '../styles/components/BuildingWindow.module.css'

export function BuildingWindow({ globalState, clickCounter }) {
  const [ lightIsOn, setLightIsOn ] = useState(globalState)

  useEffect(() => {
    setLightIsOn(globalState)
  }, [globalState, clickCounter])

  return (
    <div 
      className={`${styles.container} ${lightIsOn ? styles.on : styles.off}`}
      onClick={() => setLightIsOn(prevState => !prevState)}
    />
  )
}