function WeatherDisplay({ weatherData }) {
  return (
    <div>
      <h2>Weather Info</h2>
      <p>Temp: {weatherData.main.temp}</p>
    </div>
  )
}

export default WeatherDisplay