import { useState } from 'react'
import './App.css'
import SubmitButton from './SubmitButton.jsx'
import WeatherDisplay from './WeatherDisplay.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [city, setCity] = useState('')

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
