import {useSelector} from "react-redux";

const QuizNavigationButton = ({ index, handleClick }) => {

    const {currentQuestionIndex} = useSelector(state => state.quiz);

    return (
        <button
            onClick={() => handleClick(index)}
            className={`px-4 py-2 border-2 rounded-xl poppins-medium mb-2 ${currentQuestionIndex === index ? 'bg-secondary text-white' : ''}`}
        >
            {index + 1}
        </button>
    )
}

export default QuizNavigationButton;
