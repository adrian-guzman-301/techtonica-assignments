function WeatherDisplay({ weatherData }) {
  const icon = weatherData.weather[0].icon
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  
  return (
    <div>
      <h2>Weather Info</h2>
      <p>Temp: {weatherData.main.temp}°F</p>
      <p>Wind speed: {weatherData.wind.speed} mph</p>
      <p>Vibe: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Clouds: {weatherData.clouds.all}%</p>
    </div>
  )
}

export default WeatherDisplay