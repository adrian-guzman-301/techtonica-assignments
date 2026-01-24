const express = require('express');
const app = express();
const PORT = 8080;
requre('dotenv').config();

//define a route for GET requests to the root URL
app.get('/', (req, res) => {
  res.send('hello techtonica from express!')
});

//start server
app.listen(PORT, () => {
  console.log(`example app listening at port ${PORT}`);
})
