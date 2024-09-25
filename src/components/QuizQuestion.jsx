import {useSelector} from "react-redux";

const QuizQuestion = ({question}) => {
    const {currentQuestionIndex} = useSelector(state => state.quiz);

    return (
        <>
            <h3 className='text-sm text-center poppins-regular mb-4'>Question {currentQuestionIndex + 1}</h3>
            <h3 className='text-xl text-center poppins-medium mb-8'>{question}</h3>
        </>
    )
}

export default QuizQuestion;
