import express from 'express'
import cors from 'cors'

app.use(cors())
const app = express()
const port = 3000

const events = [
  { id: 1, name: 'cat rave', date: '12-31-26' , description: 'cat costumes and loud music', category: 'music' , isFavorite: true },
  { id: 2, name: 'javascript night', date: '05/05/26' , description: 'tackle JS coding challenges alongside the techtonica community', category: 'coding' , isFavorite: true },
  { id: 3, name: 'graduation', date: '06-25-26', description: `look back at how far you've come and look forward to exciting opportunities`, category: 'celebration' , isFavorite: false },
]

app.get('/', (req, res) => {
  res.json(events)
})

app.listen(port, () => {
  console.log(`listening real good on port ${port}`)
})