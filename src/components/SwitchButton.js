import styles from '../styles/components/SwitchButton.module.css'

export function SwitchButton({ setGlobalState, setClickCounter }) {
  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          setClickCounter(prevState => prevState += 1)
          setGlobalState(true)
        }}  
      >
        On
      </button>
      <button
        onClick={() => {
          setClickCounter(prevState => prevState += 1)
          setGlobalState(false)
        }}   
      >
         Off
      </button>
    </div>
  )
}