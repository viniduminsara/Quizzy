import QuizCard from "../components/QuizCard.jsx";
import {useEffect, useState} from "react";
import {quizService} from "../service/quizService.js";
import Loading from "../components/Loading.jsx";

const Quizzes = () => {

    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuizzes = async () => {
            const quizzes = await quizService.getAllQuizzes();
            if (quizzes !== null){
                setQuizzes(quizzes);
                setLoading(false);
            }
        }
        fetchQuizzes();
    }, []);

    if (loading) {
        return <Loading/>
    }

    return (
        <>
            <h1 className='text-center poppins-medium text-2xl md:text-4xl mb-8'>
                Select a quiz to<br/> begin your <span className='text-primary'>learning</span> journey
            </h1>
            <div className='flex flex-wrap justify-center'>
                {quizzes.map((quiz, index) => (
                    <QuizCard
                        key={index}
                        quizId={quiz.id}
                        number={index + 1}
                        title={quiz.quizName}
                        description={quiz.description}
                    />
                ))}
            </div>
        </>
    )
}

export default Quizzes;

