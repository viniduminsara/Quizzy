import { RiArrowRightLine } from "react-icons/ri";
import {Link} from "react-router-dom";

const QuizCard = ({ quizId, number, title, description }) => {

    return (
        <div className='w-64 h-fit p-4 rounded-2xl border-2 shadow-xl m-4 md:m-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-accent'>
            <h3 className='bg-gradient bg-clip-text text-transparent poppins-extrabold text-5xl w-fit mt-16'>
                {number < 10 ? `0${number}` : number}
            </h3>
            <h3 className='text-secondary poppins-semibold text-2xl mb-2'>{title.length >= 15 ? title.slice(0, 15) + '..' : title}</h3>
            <p className='text-sm poppins-extralight mb-4'>{description}</p>
            <Link
                to={`/quiz/${quizId}`}
                className='bg-gradient w-fit px-3 py-1 flex flex-row items-center space-x-2 rounded'
            >
                <div className='text-white text-sm poppins-regular'>Start Quiz</div>
                <RiArrowRightLine color='white' size={18} />
            </Link>
        </div>
    );
};

export default QuizCard;
