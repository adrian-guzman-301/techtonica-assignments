import { useState } from 'react'
import './App.css'
import EventCard from './components/EventCard'

const [events, setEvents] = useState([])

function App() {

  return (
    <>
      {events.map(event => {
       return <EventCard event={event}/>
      })}
    </>
  )
}

export default App
