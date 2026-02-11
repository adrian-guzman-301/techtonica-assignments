import { useState } from 'react';

const GameSetup = (props) => {
  //question defaults
  const [questionCount, setQuestionCount] = useState(10)
  const [category, setCategory] = useState(9)
  const [difficulty, setDifficulty] = useState('easy')
  const [questionType, setQuestionType] = useState('boolean')

  //store category list from API
  const [categories, setCategories] = useState([])

  return (
    <>
      <h2>pick your question preferences! or you can just hit start to jump right in</h2>
      <select value={questionCount} onChange={(event) => setQuestionCount(event.target.value)}>
        <option value={5}>5 questions</option>
        <option value={10}>10 questions</option>
        <option value={15}>15 questions</option>
        <option value={20}>20 questions</option>
      </select>
      <select value={category} onChange={(event => setCategory(event.target.value))}>
        <option value={9}>general knowledge</option>
        <option value={23}>history</option>
        <option value={24}>politics</option>
        <option value={15}>video games</option>
      </select>

    </>
  )
}