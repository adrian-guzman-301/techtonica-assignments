const express = require('express');
const app = express();
const PORT = 8080;
require('dotenv').config();

//define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('hello techtonica from express!')
});

//start server
app.listen(PORT, () => {
  console.log(`example app listening at port ${PORT}`);
})

//test hardcoded fetch request
async function testWeatherFetch() {
  const city = 'Anaheim'
  const apiKey = process.env.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  try {
    const response = await fetch(url);
    if(!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}

testWeatherFetch()