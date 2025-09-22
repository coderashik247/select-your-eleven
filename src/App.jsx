
import { Suspense } from 'react'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Navbar from './components/Navbar/Navbar'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'

function App() {

  const fetchPlayers = async() =>{
    const res = await fetch('/players.json')
    return res.json();
  }

  const promisePlayers = fetchPlayers();

  return (
  <>
    <Navbar></Navbar>
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
      <AvailablePlayers promisePlayers={promisePlayers}></AvailablePlayers>
    </Suspense>
    <SelectedPlayers></SelectedPlayers>
  </>
  )
}

export default App
