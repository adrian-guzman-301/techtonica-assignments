import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

// For testing my API I saving one response in a .js file 
import fakedata  from './fakedata.js';

const app = express();
const PORT = 5000;

// Configuring cors middleware
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

// Make the GET request for the GAME Api for grabbing all the questions 


  // //hardcode the game response for testing reasons to don't saturate my API call. 
app.get('/api/game', (req, res) => {
  //res.json(fakedata);
  const amount = req.query.amount || 10
  const category = req.query.category || 9
  const difficulty = req.query.difficulty || 'easy'
  const type = req.query.type || 'boolean'

  let triviaApiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=${type}`

  fetch(triviaApiUrl)
    .then(response => response.json())
    .then(data => {
      res.json(data)
    })

})



app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));