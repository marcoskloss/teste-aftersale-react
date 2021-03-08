import styles from '../styles/components/Building.module.css'

import { BuildingWindow } from './BuildingWindow'

export function Building() {
  let windowsList = []
  for (let i = 0; i < 12; i++) {
    windowsList.push(
      <BuildingWindow
        key={i}
      />
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.buildingContainer}>
        {windowsList.map(window => window)}
      </div>
      <div className={styles.door} />
    </div>
  )
}