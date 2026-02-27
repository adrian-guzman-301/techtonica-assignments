import '../App.jsx'

function EventCard(props) {
  return (
    <>
      <p>id: {props.event.id}</p>
      <p>name: {props.event.name}</p>
      <p>date: {props.event.date}</p>
      <p>description: {props.event.description}</p>
      <p>category: {props.event.category}</p>
    </>
  )
}

export default EventCard