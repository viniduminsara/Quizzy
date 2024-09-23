const QuizQuestion = ({questionNumber, question}) => {

    return (
        <>
            <h3 className='text-sm text-center poppins-regular mb-4'>Question {questionNumber + 1}</h3>
            <h3 className='text-xl text-center poppins-medium mb-8'>{question}</h3>
        </>
    )
}

export default QuizQuestion;
