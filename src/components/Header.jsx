import {useState} from "react";
import {RiMenu3Line} from "react-icons/ri";
import {FaXmark} from "react-icons/fa6";
import Logo from "../assets/Logo.png"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import quizSlice from "../store/quiz.js";

const Header = () => {

    const {isOngoingQuiz} = useSelector(state => state.quiz, [quizSlice]);
    const [isOpen, setIsOpen] = useState(false);

    const handleDisabledClick = (e) => {
        e.preventDefault();
    };

    return (
        <nav className="py-4 px-8 md:px-12 lg:px-16">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <img src={Logo} alt="" className='w-36'/>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`text-white focus:outline-none block`}
                        >
                            {isOpen ? <FaXmark size={24} color='#828282'/> : <RiMenu3Line size={24} color='#828282'/>}
                        </button>
                    </div>

                    <div className="hidden md:flex md:space-x-12">
                        <NavLink
                            to="/"
                            className={`text-secondary ${isOngoingQuiz ? 'opacity-50 pointer-events-none' : ''}`}
                            onClick={isOngoingQuiz ? handleDisabledClick : undefined}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/quizzes"
                            className={`text-secondary ${isOngoingQuiz ? 'opacity-50 pointer-events-none' : ''}`}
                            onClick={isOngoingQuiz ? handleDisabledClick : undefined}
                        >
                            Quizzes
                        </NavLink>
                    </div>
                </div>

                <div
                    className={`flex-col md:hidden space-y-4 mt-4 ${isOpen ? 'flex' : 'hidden'}`}
                >
                    <NavLink
                        to="/"
                        className={`text-secondary ${isOngoingQuiz ? 'opacity-50 pointer-events-none' : ''}`}
                        onClick={isOngoingQuiz ? handleDisabledClick : undefined}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/quizzes"
                        className={`text-secondary ${isOngoingQuiz ? 'opacity-50 pointer-events-none' : ''}`}
                        onClick={isOngoingQuiz ? handleDisabledClick : undefined}
                    >
                        Quizzes
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;
