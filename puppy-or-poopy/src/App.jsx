import { useState } from 'react'
import './App.css'

function App() {
  const [coinsFlipped, setCoinsFlipped] = useState(0);
  const [dogsAdopted, setDogsAdopted] = useState(0);
  const [poopsCollected, setPoopsCollected] = useState(0);
  const [currentImage, setCurrentImage] = useState(null)
  return (
    <>
      <h1>puppy or poopy?</h1>
      <CoinFlipControls />
      <DogImage />
    </>
  )
}

export default App