import {RiArrowRightLine} from "react-icons/ri";
import {Link} from "react-router-dom";

const QuizCard = ({ quizId, number, title, description, imageUrl }) => {

    return (
        <div
            className='w-64 h-72 p-4 rounded-2xl border-2 shadow-xl m-4 md:m-8 transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:border-accent relative'
            style={{
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>
            <div className="relative z-10">
                <h3 className='bg-gradient bg-clip-text text-transparent poppins-extrabold text-5xl w-fit mt-16'>
                    {number < 10 ? `0${number}` : number}
                </h3>
                <h3 className='text-white poppins-semibold text-2xl mb-2'>
                    {title.length >= 15 ? title.slice(0, 15) + '..' : title}
                </h3>
                <p className='text-sm poppins-extralight text-white mb-2'>{description}</p>
                <Link
                    to={`/quiz/${quizId}`}
                    className='bg-gradient w-fit px-3 py-1 flex flex-row items-center space-x-2 rounded'
                >
                    <div className='text-white text-sm poppins-regular'>Start Quiz</div>
                    <RiArrowRightLine color='white' size={18} />
                </Link>
            </div>
        </div>
    );
};

export default QuizCard;
