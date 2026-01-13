import express from 'express';
import CARDS from './cards.js';

const app = express();
const PORT = 3000;

//retrieve card data and format it into json
app.get('/cards', (req, res) => {
  res.json(CARDS);
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
