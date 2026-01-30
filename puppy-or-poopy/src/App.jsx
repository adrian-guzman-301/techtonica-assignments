//hook that manages data
import {useState} from 'react'
import './App.css'
import CoinFlipControls from './assets/CoinFlipControls'
import DogImageRender from './assets/DogImageRender'


function App() {
  //store number from 0 and update
  const [flipCount, setFlipCount] = useState(0)
  //store url and show current image
  const [currentImage, setCurrentImage] = useState('')
  //heads or tails result and update what resulted
  const [flipResult, setFlipResult] = useState('')
  //coin flip funciton
  const coinFlip = () => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails'
    //state update for coin flip
    setFlipCount(flipCount + 1)
    setFlipResult(result)
    setCurrentImage(result) //heads will fetch a dog picture from dog ceo website
  }
  return (
    <>
      <h1>puppy or poopy?</h1>
      {/* pass flip function for button */}
      <CoinFlipControls onFlip={coinFlip} flipCount={flipCount}/>
        {/* pass dog img url and coin flip result */}
      <DogImageRender image={currentImage} result={flipResult}/>
    </>
  )
}

export default App