function WeatherDisplay({ weatherData }) {
  return (
    <div>
      <h2>Weather Info</h2>
      <p>Temp: {weatherData.main.temp}</p>
      <p>Wind speed: {weatherData.wind.speed} mph</p>
      <p>Vibe: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Clouds: {weatherData.clouds.all}%</p>
    </div>
  )
}

export default WeatherDisplay