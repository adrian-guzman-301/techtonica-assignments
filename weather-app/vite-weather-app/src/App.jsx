import { useState } from 'react'
import './App.css'
import SubmitButton from './SubmitButton.jsx'
import WeatherDisplay from './WeatherDisplay.jsx'

function App() {
  const [count, setCount] = useState(0)
  //store user inputted city
  const [city, setCity] = useState('')
  //save weather api response
  const [weatherData, setWeatherData] = useState(null)
  //api test
  function handleSubmit(event) {
    event.preventDefault()
    console.log('form submitted')
    console.log('city:', city)
  }

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
