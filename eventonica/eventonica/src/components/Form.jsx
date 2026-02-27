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
    setDate(event.target.value)
  }
  const handleDescriptonChange = (event) => {
    setDescription(event.target.value)
  }
  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
  }
  const handleFavoriteChange = (event) => {
    setFavorite(event.target.value)
  }

  function handleDelete(event) {
    console.log('hello handle delete!')
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
      <form action={`http://localhost:3000`}>
        <label for="name">event name:</label>
        <input id="name" value={eventName} onChange={handleNameChange}/>
        <label for="date">date:</label>
        <input id="date" type="date" value={date} onChange={handleDateChange}/>
        <label for="description">description:</label>
        <input id="description" value={description} onChange={handleDescriptonChange}/>
        <label for="category">category:</label>
        <input id="category" value={category} onChange={handleCategoryChange}/>
        <button type="submit" onClick={handleAdd}>add event!</button>
        <button type="submit" onClick={handleDelete}>delete event!</button>
        <button type="submit" onClick={handleEdit}>edit event!</button>
      </form>
    </>
  )
}

export default Form