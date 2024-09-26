import Hero from '../assets/hero.png'
import HomeCard from "../components/HomeCard.jsx";
import {GrSelect} from "react-icons/gr";
import {IoBookOutline} from "react-icons/io5";
import {TbListDetails} from "react-icons/tb";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

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
                    <HomeCard
                        icon={<GrSelect color='#FF75B7' size={18}/>}
                        title='Select a Quiz'
                        description='Choose from a variety of quizzes that match your interests and test your knowledge across different subjects.'
                        bgColor='bg-pink-100'
                    />
                    <HomeCard
                        icon={<IoBookOutline color='#63A1FF' size={18}/>}
                        title='Complete the Quiz'
                        description='Answer each question by selecting the correct option. Take your time and do your best to complete the quiz'
                        bgColor='bg-blue-100'
                    />
                    <HomeCard
                        icon={<TbListDetails color='#2EFF9C' size={18}/>}
                        title='View Your Score'
                        description='Once the quiz is finished, see your results instantly. Review your performance and understand where you excelled or need improvement'
                        bgColor='bg-green-100'
                    />
                </div>
            </section>
        </>
)
}

export default Home;
