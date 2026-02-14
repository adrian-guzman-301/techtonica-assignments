import { useState, useEffect } from "react";
import QuestionCard from "./questioncard";

const Game = (props) => {

    const [questions, setQuestions] = useState([]);
    const [userAnswers, setUserAnswers] = useState([])
    const [gameFinished, setGameFinished] = useState(false)
    const [score, setScore] = useState(0)

    const handleAnswerSelect = (questionIndex, selectedAnswer) => {
      //copy current answers
      const updatedAnswers = [...userAnswers]
      //add new answer to copy
      updatedAnswers[questionIndex] = selectedAnswer
      //update state
      setUserAnswers(updatedAnswers)
    }
    const handleSubmit = () => {
    let correctCount = 0;
    
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correct_answer) {
            correctCount++;
        }
    }
    setScore(correctCount)
    setGameFinished(true)
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
        {gameFinished === false && (
            <>
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
                <button onClick={handleSubmit}>Submit Answers</button>
            </>
        )}
        
        {gameFinished === true && (
            <div>
                <h2>game over!</h2>
                <p>you got {score} out of {questions.length} correct!</p>
                {score >= questions.length / 2 ? (
                    <p>you win!</p>
                ) : (
                    <p>oh no you lost! try again!</p>
                )}
            </div>
        )}
    </div>
)

}

export default Game;
