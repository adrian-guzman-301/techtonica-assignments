//get route
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const url = `https://opentdb.com/api.php?amount=10`;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      res.send({ data });
    })
    .catch((err) => {
      console.log(err);
    });
})
//i want to edit the url to have template literals
//the template literals should correspond to frontend input

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})