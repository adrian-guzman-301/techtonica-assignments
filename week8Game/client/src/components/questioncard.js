const QuestionCard = (props) => {
    
    //multiple choice
    let allAnswers = []
    if(props.question.type === 'multiple') {
      allanswers = [props.question.correct_answer, ...props.question.incorrect_answers]
    }
    

    return (
      <div className={"question-section"}>
        <div className='question-text'>{props.question.question}</div>
        <div className='answer-section'>
		<button>True</button>
		<button>False</button>
        </div>
      </div>
    );
  };

export default QuestionCard;