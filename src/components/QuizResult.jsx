import {VscDebugRestart} from "react-icons/vsc";
import {useDispatch, useSelector} from "react-redux";
import {quizActions} from "../store/quiz.js";
import {useNavigate} from "react-router-dom";

const QuizResult = ({ quiz, score, restartQuiz }) => {

    const dispatch = useDispatch();
    const {selectedAnswers} = useSelector(state => state.quiz);
    const navigate = useNavigate();

    const handleBackBtn = () => {
        dispatch(quizActions.completeQuiz());
        navigate('/quizzes');
    }

    return (
        <div className='flex flex-col justify-center items-center px-4'>
            <h2 className='text-xl poppins-semibold mb-8'>You answered <span
                className='bg-gradient bg-clip-text text-transparent'>{score}</span> out of <span
                className='bg-gradient bg-clip-text text-transparent'>{quiz.questions.length}</span> questions correctly.
            </h2>
            <div className='mb-4'>
                {quiz.questions.map((question, index) => {
                    const isCorrect = quiz.questions[index].correctAnswer === selectedAnswers[index];

                    return (
                        <div key={index} className='mb-4 flex items-start space-x-4'>
                            <div
                                className={`w-10 h-10 flex-shrink-0 ${selectedAnswers[index] !== null ? (isCorrect ? 'bg-green-300' : 'bg-red-300') : 'bg-gray-300'} flex items-center justify-center rounded-full`}>
                                {index + 1}
                            </div>
                            <div>
                                <h3 className='text-xs md:text-sm poppins-semibold'>{question.questionText}</h3>
                                <p className='text-gray-500 poppins-light text-xs md:text-sm'>
                                    Your Answer: {selectedAnswers[index] !== null ? question.answers[selectedAnswers[index]] : "No answer"}
                                </p>
                                <p className='text-green-600 poppins-light text-xs md:text-sm'>
                                    Correct Answer: {question.answers[question.correctAnswer]}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='flex space-x-2 mb-6'>
                <div
                    onClick={restartQuiz}
                    className='bg-gradient flex justify-around items-center space-x-1 text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-200'>
                    <VscDebugRestart color='white' size={20}/>
                    <div className='poppins-regular'>Restart Quiz</div>
                </div>

                <button
                    onClick={handleBackBtn}
                    className='bg-secondary text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-200'>
                    <div className='poppins-regular'>Back to Quizzes</div>
                </button>
            </div>

        </div>
    )

}

export default QuizResult;
