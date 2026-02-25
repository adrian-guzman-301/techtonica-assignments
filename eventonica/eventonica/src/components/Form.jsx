function Form() {
  return (
    <>
      <form action={`http://localhost:3000`}>
        <label></label>
        <input id="name"/>
        <input id="date" />
        <input id="description" />
        <input id="category" />
      </form>
    </>
  )
}

export default Form