import { useState, useEffect } from 'react'
import './App.css'
import EventCard from './components/EventCard'

function App() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    const localData = `http://localhost:3000/`
    fetch(localData)
    .then(res => res.json())
    .then(data => setEvents(data))
    .catch(error => console.log(error))
  }, [])

  return (
    <>
      {events.map(event => {
       return <EventCard event={event}/>
      })}
    </>
  )
}

export default App
