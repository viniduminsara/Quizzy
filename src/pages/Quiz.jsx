import {useEffect, useState} from "react";
import QuizQuestion from "../components/QuizQuestion.jsx";
import AnswerOption from "../components/AnswerOption.jsx";
import QuizNavigationButton from "../components/QuizNavigationButton.jsx";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {quizActions} from "../store/quiz.js";
import QuizResult from "../components/QuizResult.jsx";
import Timer from "../components/Timer.jsx";
import {quizService} from "../service/quizService.js";
import Loading from "../components/Loading.jsx";

const Quiz = () => {
    const { quizId } = useParams();
    const dispatch = useDispatch();
    const [quiz, setQuiz] = useState({});
    const [loading, setLoading] = useState(true);
    const {currentQuestionIndex, selectedAnswers} = useSelector((state) => state.quiz);
    const [showResults, setShowResults] = useState(false);
    const [score, setScore] = useState(0);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    useEffect(() => {
        const fetchQuizData = async () => {
            const quizData = await quizService.getQuizById(quizId);
            if (quizData !== null){
                setQuiz(quizData);
                dispatch(quizActions.setQuizData(quizData));
                setLoading(false);
            }
        }
        fetchQuizData();
    }, [quizId]);


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

    const handleConfirmSubmit = () => {
        setShowConfirmModal(false)
        let totalScore = 0;

        selectedAnswers.forEach((answer, index) => {
            if (answer === quiz.questions[index].correctAnswer) {
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

    if (loading) {
        return <Loading/>
    }

    if (showResults) {
        return <QuizResult quiz={quiz} restartQuiz={restartQuiz} score={score}/>
    }

    return (
        <div className='flex flex-col justify-between px-4'>
            <div className='flex justify-between items-center my-3'>
                <Timer onTimeUp={handleConfirmSubmit}/>
                <button
                    onClick={() => setShowConfirmModal(true)}
                    className='bg-gradient text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-200'>
                    Submit Answers
                </button>

                {showConfirmModal && (
                    <div className='fixed top-0 left-0 w-full h-full px-4 bg-gray-500 bg-opacity-50 flex justify-center items-center'>
                        <div className='bg-white rounded-lg p-4'>
                            <h2 className='text-lg poppins-semibold mb-2'>Confirm Submission</h2>
                            <p className='mb-4 poppins-regular'>Are you sure you want to submit your answers?</p>
                            <div className='flex justify-end space-x-2'>
                                <button
                                    onClick={() => setShowConfirmModal(false)}
                                    className='bg-gray-500 poppins-regular text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-200'>
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmSubmit}
                                    className='bg-gradient poppins-regular text-white px-4 py-2 rounded-xl hover:scale-105 transition duration-200'>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className='flex flex-col justify-center items-center'>
                <QuizQuestion question={quiz.questions[currentQuestionIndex].questionText}/>
                <div className='flex flex-col justify-center items-center mb-12'>
                    {quiz.questions[currentQuestionIndex].answers.map((option, index) => (
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
                {quiz.questions.map((_, index) => (
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
