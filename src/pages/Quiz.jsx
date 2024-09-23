import { useState } from "react";
import { quizData } from "../../quizData.js";
import QuizQuestion from "../components/QuizQuestion.jsx";
import AnswerOption from "../components/AnswerOption.jsx";
import QuizNavigationButton from "../components/QuizNavigationButton.jsx";

const Quiz = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(quizData.length).fill(null));

    const handleAnswerSelect = (index) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestionIndex] = index;
        setSelectedAnswers(updatedAnswers);
    };

    const handleQuestionClick = (index) => {
        setCurrentQuestionIndex(index);
    };

    return (
        <div className="flex flex-col justify-between">
            <div className="flex flex-col justify-center items-center">
                <QuizQuestion question={quizData[currentQuestionIndex].question} questionNumber={currentQuestionIndex}/>
                <div className='flex flex-col justify-center items-center mb-40'>
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

            <div className="flex flex-wrap justify-center items-center space-x-2 px-4 mb-4">
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

