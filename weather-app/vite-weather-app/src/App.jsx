import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubmitButton from './SubmitButton.jsx'
import WeatherDisplay from './WeatherDisplay.jsx'

function App() {
  const [count, setCount] = useState(0)

  //test data
  const test = {
    main: { temp: 5000, humidity: 999999 },
    wind: {speed: 777 },
    weather: [{ description: "hellfire" }]
  }

  return (
    <>
      <SubmitButton />
      <WeatherDisplay weatherData={test} />
    </>
  )
}

export default App
