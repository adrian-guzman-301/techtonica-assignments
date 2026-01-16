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

//PUT: replace entire card collection with new cards
app.put('/cards', (req, res) => {
  //find card
  const findCard = CARDS.find((card) => {
    return card.id === req.params.id
  })
  //update found card's properties
  findCard.id = req.body.id
  findCard.name = req.body.name
  findCard.type = req.body.type
  //send response
})

// DELETE a card
app.delete('/cards/:id', (req, res) => {
  // CARDS.filter((card) => {
  //   return card.id !== req.params.id
  // })
  const foundIndex = CARDS.findIndex(card => card.id === req.params.id)
  console.log(req)
  CARDS.splice(foundIndex, 1)
  res.send(`card successfully deleted`)
  //user inputs card id
  //match card id to a card in cards array
  //delete matched card from
})



//display message if port connection successful
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

//complete by end of day today:
//put and delete operations using hardcoded card data
//test update and delete operations using hardcoded card data
//set up a local database e.g. PostgreSQL
//transfer hardcoded JSON data into the local database table
//do the 4 CRUD operations for the local database
//test both hardcoded JSON and local database operations via postman

//complete by friday 2 pm:
//complete the transition of all CRUD opeations to use the local database only
//refine and optimize database queries
//ensure all API endpoints now interact with the local database
//thoroughly test via postman