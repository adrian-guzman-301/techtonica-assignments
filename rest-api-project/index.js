import express from 'express';
import CARDS from './cards.js';

const app = express();
const PORT = 3000;

//console.log(CARDS)

app.get('/cards', (req, res) => {
  res.json(CARDS);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})