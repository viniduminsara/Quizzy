import {useEffect, useState} from "react";
import QuizQuestion from "../components/QuizQuestion.jsx";
import AnswerOption from "../components/AnswerOption.jsx";
import QuizNavigationButton from "../components/QuizNavigationButton.jsx";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../utils/firebase.js";
import {useLoaderData} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {quizActions} from "../store/quiz.js";
import QuizResult from "../components/QuizResult.jsx";
import Timer from "../components/Timer.jsx";

const Quiz = () => {
    const quiz = useLoaderData();
    const dispatch = useDispatch();
    const {currentQuestionIndex, selectedAnswers} = useSelector((state) => state.quiz);
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);

    console.log('quiz component rendered')

    useEffect(() => {
        dispatch(quizActions.setQuizData(quiz));
    }, [dispatch, quiz]);


    useEffect(() => {
        const handleBeforeUnload = (e) => {
            e.preventDefault();
            return (e.returnValue = '');
        };

        if (!showResults){
            window.addEventListener("beforeunload", handleBeforeUnload);

            return () => {
                window.removeEventListener('beforeunload', handleBeforeUnload);
            }
        }
    }, [showResults]);


    const handleAnswerSelect = (index) => {
        dispatch(quizActions.answerSelect({index}));
    };

    const handleQuestionClick = (index) => {
        dispatch(quizActions.selectQuestion({index}));
    };

    const handleSubmit = () => {
        let totalScore = 0;

        selectedAnswers.forEach((answer, index) => {
            if (quiz.quizData[index].options[answer] === quiz.quizData[index].correctAnswer) {
                totalScore += 1;
            }
        });

        setScore(totalScore);
        setShowResults(true);
    };

    const restartQuiz = () => {
        setShowResults(false);
        setScore(0);
        dispatch(quizActions.restartQuiz());
    };

    if (showResults) {
        return <QuizResult quiz={quiz} restartQuiz={restartQuiz} score={score}/>
    }

    return (
        <div className='flex flex-col justify-between px-4'>
            <div className='flex justify-between items-center my-3'>
                <Timer onTimeUp={handleSubmit}/>
                <button
                    onClick={handleSubmit}
                    className='bg-gradient text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-200'>
                    Submit Answers
                </button>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <QuizQuestion question={quiz.quizData[currentQuestionIndex].question}/>
                <div className='flex flex-col justify-center items-center mb-12'>
                    {quiz.quizData[currentQuestionIndex].options.map((option, index) => (
                        <AnswerOption
                            key={index}
                            index={index}
                            option={option}
                            handleAnswerSelect={handleAnswerSelect}
                        />
                    ))}
                </div>
            </div>

            <div className='flex flex-wrap justify-center items-center space-x-2 px-4 mb-4'>
                {quiz.quizData.map((_, index) => (
                    <QuizNavigationButton
                        key={index}
                        index={index}
                        handleClick={handleQuestionClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Quiz;

export const loader = async ({ params }) => {
    const docRef = doc(db, "quiz", params.quizId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {id: docSnap.id, ...docSnap.data()};
    } else {
        throw new Error("Quiz not found");
    }
}
