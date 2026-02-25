import { useState } from 'react'

function Form() {
  const [eventName, setEventName] = useState('')
  const [date, setDate] = useState('') 
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <>
      <form action={`http://localhost:3000`}>
        <label for="name">event name:</label>
        <input id="name"/>
        <label for="date">date:</label>
        <input id="date" type="date"/>
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