import express from 'express';
import CARDS from './cards.js';
import pool from './db.js';

const app = express();
app.use(express.json())
const PORT = 3001;

//retrieve card data and format it into json
app.get('/cards', (req, res) => {
  const result = CARDS
  res.json(result);
});

//get all cards from database
app.get('/db/cards', async (req, res) => {
  const result = await pool.query('SELECT * FROM cards');
  res.json(result.rows)
})

//adds a card
app.post('/cards', (req, res) => {
  CARDS.push(req.body)
  res.json(CARDS)
})

//adds a card to database
app.post('/db/cards', async (req, res) => {
  const result = await pool.query(
    'INSERT INTO cards (id, name, type, mana_cost, rarity, set) VALUES ($1, $2, $3, $4, $5, $6)',
    [req.body.id, req.body.name, req.body.type, req.body.manaCost, req.body.rarity, req.body.set]
  )
  res.send('card added to database')
})

//PUT: replace entire card collection with new cards
app.put('/cards/:id', (req, res) => {
  //find card
  const findCard = CARDS.find((card) => {
    return card.id === req.params.id
  })
  //update found card's properties
  findCard.id = req.body.id
  findCard.name = req.body.name
  findCard.type = req.body.type
  findCard.manaCost = req.body.manaCost
  findCard.rarity = req.body.rarity
  findCard.set = req.body.set
  //send response
  res.send('card updated')
})

//update existing database card
app.put('/db/cards/:id', async (req, res) => {
  const result = await pool.query(
    'UPDATE cards SET id=$1, name=$2, type=$3, mana_cost=$4, rarity=$5, set=$6 WHERE id=$7',
    [req.body.id, req.body.name, req.body.type, req.body.manaCost, req.body.rarity, req.body.set, req.params.id]
  )
  res.send('card successfully updated')
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

//delete a card in database
app.delete('/db/cards/:id', async (req, res) => {
  
})


//display message if port connection successful
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

//complete by end of day today:
//set up a local database e.g. PostgreSQL
//transfer hardcoded JSON data into the local database table
//do the 4 CRUD operations for the local database
//test both hardcoded JSON and local database operations via postman

//complete by friday 2 pm:
//complete the transition of all CRUD operations to use the local database only
//refine and optimize database queries
//ensure all API endpoints now interact with the local database
//thoroughly test via postman