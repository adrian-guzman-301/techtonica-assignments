import { useState } from 'react';

const GameSetup = (props) => {
  //10 questions is the default
  const [questionCount, setQuestionCount] = useState(10)
  const [category, setCategory] = useState()
  const [difficulty, setDifficulty] = useState()
  const [questionType, setQuestionType] = useState()
}