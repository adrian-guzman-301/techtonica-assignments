import { useState } from 'react';

const GameSetup = (props) => {
  //10 questions is the default
  const [questionCount, setQuestionCount] = useState(10)
  const [category, setCategory] = useState(9)
  const [difficulty, setDifficulty] = useState('easy')
  const [questionType, setQuestionType] = useState('boolean')
}