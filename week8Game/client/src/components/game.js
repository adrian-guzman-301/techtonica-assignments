import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([])
    const handleAnswerSelect = (questionIndex, selectedAnswer) => {
      //copy current answers
      const updatedAnswers = [...userAnswers]
      //add new answer to copy
      updatedAnswers[questionIndex] = selectedAnswer
      //update state
      setUserAnswers(updatedAnswers)
      console.log(`question ${questionIndex}: user selected "${selectedAnswer}"`)
    }
    const handleSubmit = () => {
      console.log("Submit button clicked!");
      console.log("User answers:", userAnswers);
    }

    const loadData = () => {

    const url = `http://localhost:5000/api/game?amount=${props.questionCount}&category=${props.category}&difficulty=${props.difficulty}&type=${props.questionType}`

    fetch(url)
        .then((response) => response.json())
        .then(data => {
            console.log("This is line 11", data.results);
            if (data.results) {
                setQuestions(data.results);
            }
        })
        .catch(error => {
            console.log("Fetch error:", error);
        })
}

    useEffect(() => {
        console.log('useEffect is running')
        loadData();
    }, [])

    return (
        <div className="Container">
            <div className='question-count'>
                <span>Question 1</span>/{questions ? questions.length : 0}
            </div>
            {questions && questions.map((question, index) => {
                return <QuestionCard 
                  key={index} 
                  question={question}
                  questionIndex={index}
                  onAnswerSelect={handleAnswerSelect}
                  />
            })}
            <button onClick={handleSubmit}>submit answers!</button>
        </div>
    )

}

export default Game;
