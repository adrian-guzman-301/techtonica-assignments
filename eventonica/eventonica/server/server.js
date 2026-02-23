import express from 'express'
import cors from 'cors'
import pg from 'pg'
const { Pool, Client } = pg

const app = express()
const port = 3000
//tell my browser it's okay
app.use(cors())
//enable express to use req.body
app.use(express.json())

const events = [
  { id: 1, name: 'cat rave', date: '12-31-26' , description: 'cat costumes and loud music', category: 'music' , isFavorite: true },
  { id: 2, name: 'javascript night', date: '05/05/26' , description: 'tackle JS coding challenges alongside the techtonica community', category: 'coding' , isFavorite: true },
  { id: 3, name: 'graduation', date: '06-25-26', description: `look back at how far you've come and look forward to exciting opportunities`, category: 'celebration' , isFavorite: false },
]

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

app.listen(port, () => {
  console.log(`listening real good on port ${port}`)
})