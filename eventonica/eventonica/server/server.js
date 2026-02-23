import express, { json } from 'express'
import cors from 'cors'
import pg from 'pg'
const { Pool, Client } = pg

const app = express()
const port = 3000
//tell my browser it's okay
app.use(cors())
//enable express to use req.body
app.use(json())

const client = new Client({
  user: 'tpl925_3',
  host: 'localhost',
  database: 'events',
  port: 5432,
})

client.connect()
  .then(() => 
  console.log(`connected to a goated database`)
)

/* 
db schema
 - i think i only need one table, since i am only dealing with events. the table would be able to get added to, deleted from, and edited on. 

 - as for the columns of the table, i'd say a column for each: id, name, date, description, category, and isFavorite

for each column:

id=serial, name=varchar, date=date, description=varchar, category=varchar, isFavorite=boolean
*/


//get all current events from db
app.get('/', (req, res) => {
  client.query('SELECT * FROM events')
  .then(data => res.json(data.rows))
  console.log('GET successful')
})

//delete events by their id
app.delete('/event/:id', (req, res) => {
  client.query('DELETE FROM events WHERE id=$1', [req.params.id])
  .then(result => res.send('event deleted'))
  console.log('DELETE successful')
})

//add events
app.post('/event', (req, res) => {
  client.query('INSERT INTO events (name, date, description, category, isfavorite) VALUES ($1, $2, $3, $4, $5)', [req.body.name, req.body.date, req.body.description, req.body.category, req.body.isfavorite])
  .then(result => res.send('event added'))
  console.log('POST successful')
})

//update events
app.put('/event/:id', (req, res) => {
  client.query('UPDATE events SET name=$1, date=$2, description=$3, category=$4, isfavorite=$5 WHERE id=$6', [req.body.name, req.body.date, req.body.description, req.body.category, req.body.isfavorite, req.params.id])
  .then(result => res.send('event updated'))
  console.log('PUT successful!')
})

app.listen(port, () => {
  console.log(`listening real good on port ${port}`)
})