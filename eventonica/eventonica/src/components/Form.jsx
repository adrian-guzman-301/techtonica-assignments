import { useState } from 'react'

function Form() {
  const [eventName, setEventName] = useState('')

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