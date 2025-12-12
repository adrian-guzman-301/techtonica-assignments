import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [coinsFlipped, setCoinsFlipped] = useState(0);
  const [dogsAdopted, setDogsAdopted] = useState(0);
  const [poopCollected, setPoopCollected] = useState(0);
  const [currentImage, setCurrentImage] = useState(null)
  return (
    <>
      <h1>puppy or poopy?</h1>
      <button>flip coin</button>
    </>
  )
}

export default App
