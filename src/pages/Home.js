import { useState } from 'react';
import { Building } from '../components/Building'
import { Star } from '../components/Star';
import { SwitchButton } from '../components/SwitchButton';
import '../styles/global.css'

function Home() {
  const [globalState, setGlobalState] = useState(true)
  //o valor padrao deve ser o retornado pela api
  const [clickCounter, setClickCounter] = useState(0)
  
  return (
    <div className="App">
        <Star />
        <SwitchButton setGlobalState={setGlobalState} setClickCounter={setClickCounter}/>
        <Building globalState={globalState} clickCounter={clickCounter}/>
    </div>
  );
}

export default Home;
