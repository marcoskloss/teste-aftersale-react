import { useEffect, useState } from 'react';

import { Building } from '../components/Building'
import { SwitchButton } from '../components/SwitchButton';
import { Background } from '../components/Background'

import { convertTimeTo24, getCurrentTime, toSeconds } from '../utils/date'
import isNight from '../utils/isNight'

import '../styles/global.css'

function Home() {
  const [globalState, setGlobalState] = useState(undefined)
  const [clickCounter, setClickCounter] = useState(0)
  const [background, setBackground] = useState(undefined)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition( async (position) => {
        const { latitude, longitude } = position.coords
        const API_URL = `https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`
        
        const response = await fetch(API_URL)
        const data = await response.json()
        const { sunrise, sunset } = data.results

        const convertedSunrise = convertTimeTo24(sunrise)
        const convertedSunset = convertTimeTo24(sunset)
        const currentTime = getCurrentTime()

        const [
          sunsetSeconds, 
          sunriseSeconds, 
          currentSeconds
        ]  = toSeconds(convertedSunset, convertedSunrise, currentTime)
        
        const initialState = isNight(sunsetSeconds, sunriseSeconds, currentSeconds)
        setGlobalState(initialState)
        setBackground(initialState)
      })
    }
  }, [])

  
  return (
    <div className="App">
        <Background isNight={background}/>
        <SwitchButton setGlobalState={setGlobalState} setClickCounter={setClickCounter}/>
        <Building globalState={globalState} clickCounter={clickCounter}/>
    </div>
  );
}

export default Home;
