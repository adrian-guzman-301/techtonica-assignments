import './App.jsx'

function EventCard(event) {
  return (
    <>
      <p>{event.name}</p>
      <p>{event.date}</p>
      <p>{event.description}</p>
      <p>{event.category}</p>
    </>
  )
}

export default EventCard