import QuizCard from "../components/QuizCard.jsx";

const Quizzes = () => {

    return (
        <>
            <h1 className='text-center poppins-medium text-2xl md:text-4xl mb-8'>
                Select a quiz to<br/> begin your <span className='text-primary'>learning</span> journey
            </h1>
            <div className='flex flex-wrap justify-center'>
                <QuizCard
                    quizId='q0001'
                    number={1}
                    title='React Basics'
                    description='This quiz is about basics you need to know when using React. such as state, props etc.'
                />
                <QuizCard
                    quizId='q0001'
                    number={2}
                    title='React Basics'
                    description='This quiz is about basics you need to know when using React. such as state, props etc.'
                />
                <QuizCard
                    quizId='q0001'
                    number={3}
                    title='React Basics'
                    description='This quiz is about basics you need to know when using React. such as state, props etc.'
                />
                <QuizCard
                    quizId='q0001'
                    number={4}
                    title='React Basics'
                    description='This quiz is about basics you need to know when using React. such as state, props etc.'
                />
            </div>
        </>
    )
}

export default Quizzes;
