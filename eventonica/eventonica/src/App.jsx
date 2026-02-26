import { useState, useEffect } from 'react'
import './App.css'
import EventCard from './components/EventCard'
import Form from './components/Form'

function App() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/`)
    .then(res => res.json())
    .then(data => setEvents(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      <h1>eventonica</h1>
      <h3>browse events and edit your own below</h3>
      {events.map(event => {
       return <EventCard event={event}/>
      })}
      <Form />
    </>
  )
}

export default App
