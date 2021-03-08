import { useContext, useState } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import styles from '../styles/components/SwitchButton.module.css'

export function SwitchButton() {
  const { globalSwitch } = useContext(GlobalContext)
  return (
    <div className={styles.container}>
      <button
        onClick={() => globalSwitch(true)}  
      >
        On
      </button>
      <button
        onClick={() => globalSwitch(false)}   
      >
         Off
      </button>
    </div>
  )
}