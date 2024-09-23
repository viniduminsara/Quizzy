const QuizNavigationButton = ({ index, handleClick, currentIndex }) => {

    return (
        <button
            onClick={() => handleClick(index)}
            className={`px-4 py-2 border-2 rounded-xl mb-2 ${currentIndex === index ? 'bg-secondary text-white' : ''}`}
            // style={{
            //     margin: '0 5px',
            //     backgroundColor: currentIndex === index ? 'lightblue' : 'white'
            // }}
        >
            {index + 1}
        </button>
    )
}

export default QuizNavigationButton;
