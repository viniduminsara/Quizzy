import {VscDebugRestart} from "react-icons/vsc";
import {useSelector} from "react-redux";

const QuizResult = ({ quiz, score, restartQuiz }) => {

    const {selectedAnswers} = useSelector(state => state.quiz);

    return (
        <div className='flex flex-col justify-center items-center px-4'>
            <h2 className='text-xl poppins-semibold mb-8'>You answered <span
                className='bg-gradient bg-clip-text text-transparent'>{score}</span> out of <span
                className='bg-gradient bg-clip-text text-transparent'>{quiz.quizData.length}</span> questions correctly.
            </h2>
            <div className='mb-4'>
                {quiz.quizData.map((question, index) => {
                    const isCorrect = quiz.quizData[index].correctAnswer === quiz.quizData[index].options[selectedAnswers[index]];

                    return (
                        <div key={index} className='mb-4 flex space-x-4'>
                            <div
                                className={`w-10 h-10 ${selectedAnswers[index] !== null ? (isCorrect ? 'bg-green-300' : 'bg-red-300') : 'bg-gray-300'} flex items-center justify-center rounded-full mb-4`}>
                                {index + 1}
                            </div>
                            <div>
                                <h3 className='text-xs md:text-sm poppins-semibold'>{question.question}</h3>
                                <p className='text-gray-500 poppins-light text-xs md:text-sm'>Your
                                    Answer: {selectedAnswers[index] !== null ? question.options[selectedAnswers[index]] : "No answer"}</p>
                                <p className='text-green-600 poppins-light text-xs md:text-sm'>Correct
                                    Answer: {question.correctAnswer}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div
                onClick={restartQuiz}
                className='bg-gradient flex justify-around items-center space-x-1 text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-200 mb-6'>
                <VscDebugRestart color='white' size={20}/>
                <div className='poppins-regular'>Restart Quiz</div>
            </div>
        </div>
    )

}

export default QuizResult;
