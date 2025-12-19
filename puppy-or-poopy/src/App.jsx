//hook that manages data
import {useState} from 'react'
import './App.css'

function App() {
  const [flipCount, setFlipCount] = useState(0)
  const [currentImage, setCurrentImage] = useState('')
  const [flipResult, setFlipResult] = useState('')
  //coin flip funciton
  const coinFlip = () => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails'
  }
  //state update for coin flip
  setFlipCount(flipCount + 1)
  setFlipResult(result)
  return (
    <>
      <h1>puppy or poopy?</h1>
      <CoinFlipControls />
      <DogImageRender />
    </>
  )
}

export default App