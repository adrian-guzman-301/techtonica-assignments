function Form() {
  return (
    <>
      <form action={`http://localhost:3000`}>
        <label for="name">event name:</label>
        <input id="name"/>
        <label for="date">date:</label>
        <input id="date"/>
        <label for="description">description:</label>
        <input id="description" />
        <label for="category">category:</label>
        <input id="category" />
      </form>
    </>
  )
}

export default Form