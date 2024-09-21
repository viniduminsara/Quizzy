import Hero from '../assets/hero.png'

const Home = () => {

    return (
        <div className='flex flex-col-reverse md:flex-row justify-center items-center lg:space-x-32'>
            <div className='px-6'>
                <div className='space-y-3 mb-4'>
                    <h1 className='poppins-semibold text-3xl lg:text-5xl'>Learn</h1>
                    <h1 className='poppins-semibold text-3xl lg:text-5xl'>new concepts</h1>
                    <h1 className='poppins-semibold text-3xl lg:text-5xl'>each minute</h1>
                </div>
                <div className='p-4 text-secondary text-sm lg:text-md border-l-2 border-l-primary poppins-light mb-6 lg:mb-12'>
                    We help you prepare for exams with quiz
                </div>
                <div className='bg-gradient w-fit py-2 px-4 text-sm lg:text-lg text-white rounded poppins-regular'>
                    Start Solving
                </div>
            </div>
            <img src={Hero} alt='hero image' className='w-96 md:w-5/12'/>
        </div>
    )
}

export default Home;
