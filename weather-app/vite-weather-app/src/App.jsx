import { useState } from 'react'
import './App.css'
import SubmitButton from './SubmitButton.jsx'
import WeatherDisplay from './WeatherDisplay.jsx'

function App() {
  //store weather data via state
  const [weatherData, setWeatherData] = useState(null)
  //store city from user input
  const [city, setCity] = useState('')

  //fetch weather from server
  function getWeather() {
    console.log('who clicked that?')
    fetch(`http://localhost:8080/weather?cityName=${city}`)
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
    weather: [{ description: "hellfire" }],
    clouds: { all: 100 }
  }

  return (
    <>
      <input
        type="text"
        //show whats stored in city state
        value={city}

        onChange={(event) => setCity(event.target.value)}
        placeholder="enter a city name"
        />
      <SubmitButton handleClick={getWeather}/>
      <WeatherDisplay weatherData={weatherData || test} />
    </>
  )
}

export default App
