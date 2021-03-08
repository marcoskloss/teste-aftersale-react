import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import styles from '../styles/components/BuildingWindow.module.css'

export function BuildingWindow() {
  const { windowLightIsOn } = useContext(GlobalContext)

  const [ localWindowState, setLocalWindowState ] = useState(windowLightIsOn)

  return (
    <div 
      className={`${styles.container} ${localWindowState ? styles.on : styles}`}
      onClick={() => setLocalWindowState(prevState => !prevState)}
    />
  )
}