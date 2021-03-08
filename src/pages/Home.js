import { Building } from '../components/Building'
import { Star } from '../components/Star';
import { SwitchButton } from '../components/SwitchButton';
import { GlobalContextProvider } from '../context/GlobalContext';
import '../styles/global.css'

function Home() {
  return (
    <div className="App">
      <GlobalContextProvider>
        <Star />
        <SwitchButton />
        <Building />
      </GlobalContextProvider>
    </div>
  );
}

export default Home;
