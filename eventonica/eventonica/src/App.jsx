import { useState, useEffect } from 'react'
import './App.css'
import EventCard from './components/EventCard'

function App() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/')
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
