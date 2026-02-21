import express from 'express'
import cors from 'cors'
import pg from 'pg'
const { Pool, Client } = pg

const app = express()
const port = 3000
app.use(cors())

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

app.get('/', (req, res) => {
  res.json(events)
})

app.listen(port, () => {
  console.log(`listening real good on port ${port}`)
})