import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [coinsFlipped, flipCounter] = useState(0);
  const [dogsAdopted, adoptedCounter] = useState(0);
  const [poopCollected, poopCounter] = useState(0);
  return (
    <>
      <h1>puppy or poopy?</h1>
      <button>flip coin</button>
    </>
  )
}

export default App
