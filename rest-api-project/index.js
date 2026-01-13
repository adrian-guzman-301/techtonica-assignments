import express from 'express';
import CARDS from './cards.js';

const app = express();
const PORT = 3000;

//retrieve card data and format it into json
app.get('/cards', (req, res) => {
  res.json(CARDS);
});

/* i need 3 more routes: POST, PUT, and DELETE */
app.post('/cards', (req, res) => {
  res.send(CARDS)
})


//display message if port connection successful
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
