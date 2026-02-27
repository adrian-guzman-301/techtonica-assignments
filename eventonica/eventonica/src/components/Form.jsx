import { useState } from 'react'

function Form() {
  const [eventName, setEventName] = useState('')
  const [date, setDate] = useState('') 
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)
  const [id, setId] = useState('')

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
  const handleIdChange = (event) => {
    setId(event.target.value)
  }
  const handleFavoriteChange = (event) => {
    setFavorite(event.target.value)
  }

  function handleAdd(event) {
    console.log('hello add event!')
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

  function handleDelete(event) {
    console.log('hello delete event!')
    event.preventDefault();
    fetch(`http://localhost:3000/event/${id}`, {
      headers: {
        'Content-Type': `application/JSON`
      },
      method: 'DELETE',
      body: JSON.stringify({
        id: id,
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
        <label for="id">id:</label>
        <input id="id" value={id} onChange={handleIdChange}/>
        <button type="button" onClick={handleAdd}>add event!</button>
        <button type="button" onClick={handleDelete}>delete event!</button>
        {/* <button type="submit" onClick={handleEdit}>edit event!</button>
        <button type="submit" onClick={handleGet}>get events!</button> */}
      </form>
    </>
  )
}

export default Form