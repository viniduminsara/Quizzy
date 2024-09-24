import QuizCard from "../components/QuizCard.jsx";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../utils/firebase.js";
import {useLoaderData} from "react-router-dom";

const Quizzes = () => {

    const quizzes = useLoaderData();

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
                        title={quiz.name}
                        description='This quiz is about basics you need to know when using React. such as state, props etc.'
                    />
                ))}
            </div>
        </>
    )
}

export default Quizzes;

export const loader = async () => {
    const querySnapshot = await getDocs(collection(db, "quiz"));

    const quizData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));

    return quizData;
};

