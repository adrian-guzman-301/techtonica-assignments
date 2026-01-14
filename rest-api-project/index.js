import express from 'express';
import CARDS from './cards.js';

const app = express();
app.use(express.json())
const PORT = 3001;

//retrieve card data and format it into json
app.get('/cards', (req, res) => {
  res.json(CARDS);
});

//adds a card
app.post('/cards', (req, res) => {
  CARDS.push(req.body)
  res.json(CARDS)
})

//i need 2 more routes: PUT, and DELETE
app.delete('/cards/:id', (req, res) => {
  
})


//display message if port connection successful
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
