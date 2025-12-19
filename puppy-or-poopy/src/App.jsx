import {useState} from 'react'
import './App.css'

function App() {
  const [flipCount, setFlipCount] = useState(0)
  const [currentImage, setCurrentImage] = useState('')
  return (
    <>
      <h1>puppy or poopy?</h1>
      <CoinFlipControls />
      <DogImageRender />
    </>
  )
}

export default App