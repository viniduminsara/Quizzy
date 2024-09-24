import { useState, useEffect } from "react";
import { quizData } from "../../quizData.js";
import QuizQuestion from "../components/QuizQuestion.jsx";
import AnswerOption from "../components/AnswerOption.jsx";
import QuizNavigationButton from "../components/QuizNavigationButton.jsx";
import { VscDebugRestart } from "react-icons/vsc";

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill(null));
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds

    // Timer logic
    useEffect(() => {
        if (timeLeft > 0) {
            const timerId = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearInterval(timerId); // Cleanup on unmount
        } else {
            handleSubmit(); // Auto submit when time runs out
        }
    }, [timeLeft]);

    const handleAnswerSelect = (index) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestionIndex] = index;
        setSelectedAnswers(updatedAnswers);
    };

    const handleQuestionClick = (index) => {
        setCurrentQuestionIndex(index);
    };

    const handleSubmit = () => {
        let totalScore = 0;

        selectedAnswers.forEach((answer, index) => {
            if (quizData[index].options[answer] === quizData[index].correctAnswer) {
                totalScore += 1;
            }
        });

        setScore(totalScore);
        setShowResults(true);
    };

    const restartQuiz = () => {
        setShowResults(false);
        setCurrentQuestionIndex(0);
        setSelectedAnswers(Array(quizData.length).fill(null));
        setScore(0);
        setTimeLeft(10 * 60); // Reset timer to 10 minutes
    };

    // Convert timeLeft in seconds to minutes and seconds
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    if (showResults) {
        return (
            <div className='flex flex-col justify-center items-center px-4'>
                <h2 className='text-xl poppins-semibold mb-8'>You answered <span
                    className='bg-gradient bg-clip-text text-transparent'>{score}</span> out of <span
                    className='bg-gradient bg-clip-text text-transparent'>{quizData.length}</span> questions correctly.</h2>
                <div className='mb-4'>
                    {quizData.map((question, index) => {
                        const isCorrect = quizData[index].correctAnswer === quizData[index].options[selectedAnswers[index]];

                        return (
                            <div key={index} className='mb-4 flex space-x-4'>
                                <div
                                    className={`w-10 h-10 ${isCorrect ? 'bg-green-300' : 'bg-red-300'} flex items-center justify-center rounded-full mb-4`}>
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className='text-xs md:text-sm poppins-semibold'>{question.question}</h3>
                                    <p className='text-gray-500 poppins-light text-xs md:text-sm'>Your
                                        Answer: {selectedAnswers[index] !== null ? question.options[selectedAnswers[index]] : "No answer"}</p>
                                    <p className='text-green-600 poppins-light text-xs md:text-sm'>Correct Answer: {question.correctAnswer}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div
                    onClick={restartQuiz}
                    className='bg-gradient flex justify-around items-center space-x-1 text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-200 mb-6'
                >
                    <VscDebugRestart color='white' size={20} />
                    <div className='poppins-regular'>Restart Quiz</div>
                </div>
            </div>
        );
    }

    return (
        <div className='flex flex-col justify-between px-4'>
            <div className='flex justify-between items-center my-3'>
                <div className='text-sm font-semibold'>{`Time Left: ${formatTime(timeLeft)}`}</div>
                <button
                    onClick={handleSubmit}
                    className='bg-gradient text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-200'
                >
                    Submit Answers
                </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
            <QuizQuestion question={quizData[currentQuestionIndex].question} questionNumber={currentQuestionIndex} />
                <div className='flex flex-col justify-center items-center mb-12'>
                    {quizData[currentQuestionIndex].options.map((option, index) => (
                        <AnswerOption
                            key={index}
                            index={index}
                            option={option}
                            currentQuestionIndex={currentQuestionIndex}
                            selectedAnswers={selectedAnswers}
                            handleAnswerSelect={handleAnswerSelect}
                        />
                    ))}
                </div>
            </div>

            <div className='flex flex-wrap justify-center items-center space-x-2 px-4 mb-4'>
                {quizData.map((_, index) => (
                    <QuizNavigationButton
                        key={index}
                        index={index}
                        currentIndex={currentQuestionIndex}
                        handleClick={handleQuestionClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Quiz;
