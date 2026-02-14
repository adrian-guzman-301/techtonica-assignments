const GameSetup = (props) => {

  return (
    <>
      <h2>pick your question preferences! or you can just hit start to jump right in</h2>
      <button onClick={props.onStartGame}>start!</button>
      <select value={props.questionCount} onChange={(event) => props.setQuestionCount(event.target.value)}>
        <option value={5}>5 questions</option>
        <option value={10}>10 questions</option>
        <option value={15}>15 questions</option>
        <option value={20}>20 questions</option>
      </select>
      <select value={props.category} onChange={(event) => props.setCategory(event.target.value)}>
        <option value={9}>general knowledge</option>
        <option value={10}>books</option>
        <option value={11}>film</option>
        <option value={12}>music</option>
        <option value={13}>musicals & theatres</option>
        <option value={14}>television</option>
        <option value={15}>video games</option>
        <option value={16}>board games</option>
        <option value={17}>science & nature</option>
        <option value={18}>computers</option>
        <option value={19}>math</option>
        <option value={20}>mythology</option>
        <option value={21}>sports</option>
        <option value={22}>geography</option>
        <option value={23}>history</option>
        <option value={24}>politics</option>
      </select>
      <select value={props.difficulty} onChange={(event) => props.setDifficulty(event.target.value)}>
        <option value={1}>easy</option>
        <option value={2}>medium</option>
        <option value={3}>hard</option>
      </select>
      <select value={props.questionType} onChange={(event) => props.setQuestionType(event.target.value)}>
        <option value={'boolean'}>true/false</option>
        <option value={'multiple'}>multiple choice</option>
      </select>
    </>
  )
}

export default GameSetup