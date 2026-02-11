import { useState } from 'react';

const GameSetup = (props) => {
  //10 questions is the default
  const [questionCount, setQuestionCount] = useState(10)
  const [category, setCategory] = useState(9)
  const [difficulty, setDifficulty] = useState('easy')
  const [questionType, setQuestionType] = useState('boolean')

  return (
    <>
      <h2>pick your question preferences! or you can just hit start to jump right in</h2>
      <select value={questionCount} onChange={(event) => setQuestionCount(event.target.value)}>
        <option value={5}>5 questions</option>
        <option value={10}>10 questions</option>
        <option value={15}>15 questions</option>
      </select>
      
    </>
  )
}