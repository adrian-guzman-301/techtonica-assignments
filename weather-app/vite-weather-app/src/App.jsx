import { useState } from 'react'
import './App.css'
import SubmitButton from './SubmitButton.jsx'
import WeatherDisplay from './WeatherDisplay.jsx'

function App() {
  //store weather data via state
  const [weatherData, setWeatherData] = useState(null)

  //fetch weather from server
  function getWeather() {
    fetch('http://localhost:8080/weather?cityName=Anaheim')
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setWeatherData(result.data)
      })
  }

  //test data
  const test = {
    main: { temp: 5000, humidity: 999999 },
    wind: {speed: 777 },
    weather: [{ description: "hellfire" }]
  }

  return (
    <>
      <SubmitButton onClick={getWeather}/>
      <WeatherDisplay weatherData={test} />
    </>
  )
}

export default App
