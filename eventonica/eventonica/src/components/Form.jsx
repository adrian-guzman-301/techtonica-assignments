import { useState } from 'react'

function Form() {
  const [eventName, setEventName] = useState('')
  const [date, setDate] = useState('') 
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)

  const handleNameChange = (event) => {
    setEventName(event.target.value)
  }
  const handleDateChange = (event) => {
    setDateChange(event.target.value)
  }

  function handleSubmit(event) {
    console.log('hello handle submit!')
    event.preventDefault();
    fetch(`http://localhost:3000/event`, {
      headers: {
        'Content-Type': `application/JSON`
      },
      method: 'POST',
      body: JSON.stringify({
        name: eventName,
        date: date,
        description: description,
        category: category,
        isFavorite: isFavorite
      })
    })
  }

  return (
    <>
      <form action={`http://localhost:3000`} onSubmit={handleSubmit}>
        <label for="name">event name:</label>
        <input id="name" value={eventName} onChange={handleNameChange}/>
        <label for="date">date:</label>
        <input id="date" type="date"value={date}/>
        <label for="description">description:</label>
        <input id="description" />
        <label for="category">category:</label>
        <input id="category" />
        <button type="submit">submit</button>
      </form>
    </>
  )
}

export default Form