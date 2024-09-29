import Hero from '../assets/hero.png'
import HomeCard from "../components/HomeCard.jsx";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {homeCards} from "../utils/homeCardData.js";

const Home = () => {

    const {isAuthenticated} = useSelector(state => state.auth);

    return (
        <>
            <section className='flex flex-col-reverse md:flex-row justify-center items-center lg:space-x-32'>
                <div className='px-6'>
                    <div className='space-y-3 mb-4'>
                        <h1 className='poppins-semibold text-3xl lg:text-5xl'>Learn</h1>
                        <h1 className='poppins-semibold text-3xl lg:text-5xl'>new concepts</h1>
                        <h1 className='poppins-semibold text-3xl lg:text-5xl'>each minute</h1>
                    </div>
                    <div
                        className='p-4 text-secondary text-sm lg:text-md border-l-2 border-l-primary poppins-light mb-6 lg:mb-12'>
                        We help you prepare for exams with quizzes
                    </div>
                    {isAuthenticated ?
                        <Link
                            to='/quizzes'
                            className='bg-gradient w-fit py-2 px-4 text-sm lg:text-lg text-white rounded poppins-regular'>
                            Start Solving
                        </Link>

                        :

                        <Link
                            to='/login'
                            className='bg-gradient w-fit py-2 px-4 text-sm lg:text-lg text-white rounded poppins-regular'>
                            Get Started
                        </Link>
                    }
                </div>
                <img src={Hero} alt='hero image' className='w-96 md:w-5/12'/>
            </section>

            <section className='py-28 px-6 md:px-12'>
                <h2 className='text-2xl md:text-4xl poppins-medium text-center mb-16'>
                    Let{"'"}s checkout<br/> your <span className='text-primary'>learning</span> journey
                </h2>
                <div className="flex flex-col space-y-4 justify-center items-center md:flex-row md:space-y-0 md:space-x-4 lg:space-x-32">
                    {homeCards.map((card, index) => (
                        <HomeCard
                            key={index}
                            icon={card.icon}
                            iconColor={card.iconColor}
                            title={card.title}
                            description={card.description}
                            bgColor={card.bgColor}
                        />
                    ))}
                </div>
            </section>
        </>
)
}

export default Home;
