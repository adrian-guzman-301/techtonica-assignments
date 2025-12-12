import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [coinsFlipped, setCoinsFlipped] = useState(0);
  const [dogsAdopted, setDogsAdopted] = useState(0);
  const [poopsCollected, setPoopsCollected] = useState(0);
  const [currentImage, setCurrentImage] = useState(null)
  return (
    <>
      <h1>puppy or poopy?</h1>
      {currentImage ? <img src = {currentImage} /> : <span>click the button to see some dogs! or some poop</span>}
      <button>flip coin</button>
    </>
  )
}

export default App
