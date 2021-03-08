import { createContext, useState } from "react";

export const GlobalContext = createContext({})

export function GlobalContextProvider({ children }) {
  /*Estados:
    isDay,
    funcao para funcionalidade do switcher
  */
  const [ windowLightIsOn, setWindowLightIsOn ] = useState(false)
  // O estado inicial da luz deve ser o informado pela API

  function toggleLight() {
    setWindowLightIsOn(prevState => !prevState)
  }

  function globalSwitch(state) {
    setWindowLightIsOn(state)
  }

  return (
    <GlobalContext.Provider
      value={{
        toggleLight,
        windowLightIsOn,
        globalSwitch
      }}
    >
      {children}
    </GlobalContext.Provider>

  )
}