const AnswerOption = ({ currentQuestionIndex, selectedAnswers, handleAnswerSelect, option, index }) => {

    const isSelected = selectedAnswers[currentQuestionIndex] === index;

    return (
        <label
            className={`block poppins-regular text-md cursor-pointer w-80 md:w-96 text-center p-2 mb-2 rounded-xl border border-gray-300 ${
                isSelected ? 'bg-gradient text-white' : 'bg-white text-gray-700 hover:border-accent'
            } hover:scale-105 transition duration-200`}
            onClick={() => handleAnswerSelect(index)}
        >
            {option}
        </label>
    );
};

export default AnswerOption;
