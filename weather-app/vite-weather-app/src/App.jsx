import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubmitButton from './submit-button.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SubmitButton />
    </>
  )
}

export default App
