import {useState} from 'react' //hook for managing data changes
import './App.css'

function App() {
  const [flipCount, setFlipCount] = useState(0)
  const [currentImage, setCurrentImage] = useState('')
  const [flipResult, setFlipResult] = useState('')
  return (
    <>
      <h1>puppy or poopy?</h1>
      <CoinFlipControls />
      <DogImageRender />
    </>
  )
}

export default App