const QuestionCard = (props) => {
    
    //multiple choice
    let allAnswers = []
    if(props.question.type === 'multiple') {
      allAnswers = [props.question.correct_answer, ...props.question.incorrect_answers]
    }
    

    return (
      <div className={"question-section"}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
          {props.question.type === 'boolean' ? (
            <>
              <button onClick={() => props.onAnswerSelect(props.questionIndex, "True")}>True</button>
              <button onClick={() => props.onAnswerSelect(props.questionIndex, "False")}>False</button>
            </>
          ) : (
              allAnswers.map((answer, index) => {
                return <button onClick={() => props.onAnswerSelect(props.questionIndex, answer)} key={index}>{answer}</button>
              })
          )}
        </div>
      </div>
    );
};

export default QuestionCard;