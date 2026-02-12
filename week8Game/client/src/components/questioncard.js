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
              <button>True</button>
              <button>False</button>
            </>
          ) : (
              allAnswers.map((answer, index) => {
                return <button key={index}>{answer}</button>
              })
          )}
        </div>
      </div>
    );
};

export default QuestionCard;