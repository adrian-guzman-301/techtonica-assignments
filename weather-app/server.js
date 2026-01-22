const express = require('express');
const app = express();
const port = 8080;

//define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('hello techtonica from express!')
});