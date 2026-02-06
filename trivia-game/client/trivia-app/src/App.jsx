import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GameResult from './GameResult'
import GamePlay from './GamePlay'

function App() {
  //const [count, setCount] = useState(0)
  const [isWinner, setIsWinner] = useState(null)
  const [questions, setQuestions] = useState([])
  //setIsWinner(true)
  return (
    <div>
      <div>this is the game setup</div>
      <GamePlay resultHandler={setIsWinner}/>
      <GameResult winOrLoss={isWinner}/>
    </div>
    )
}

export default App
