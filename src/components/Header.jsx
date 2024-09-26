import {useState} from "react";
import {RiMenu3Line} from "react-icons/ri";
import {FaXmark} from "react-icons/fa6";
import Logo from "../assets/Logo.png"
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {authActions} from "../store/auth.js";

const Header = () => {

    const {isOngoingQuiz} = useSelector(state => state.quiz);
    const {isAuthenticated} = useSelector(state => state.auth);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDisabledClick = (e) => {
        e.preventDefault();
    };

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            toast.success('Logged out successfully.');
            dispatch(authActions.logout());
            navigate('/');
        }).catch((error) => {
            toast.error(error.message);
        });
    }

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

                    <div className="hidden md:flex items-center md:space-x-6">
                        <NavLink
                            to="/"
                            className={`text-secondary ${isOngoingQuiz ? 'opacity-50 pointer-events-none' : ''}`}
                            onClick={isOngoingQuiz ? handleDisabledClick : undefined}
                        >
                            Home
                        </NavLink>
                        {isAuthenticated ?
                            <>
                                <NavLink
                                    to="/quizzes"
                                    className={`text-secondary poppins-regular ${isOngoingQuiz ? 'opacity-50 pointer-events-none' : ''}`}
                                    onClick={isOngoingQuiz ? handleDisabledClick : undefined}
                                >
                                    Quizzes
                                </NavLink>
                                {!isOngoingQuiz ?
                                    <button
                                        onClick={handleLogout}
                                        className='text-red-400 w-fit poppins-regular border-red-400 border-2 px-2 py-1 rounded-lg'>
                                        Logout
                                    </button> : ''
                                }
                            </>

                            :

                            <>
                                <NavLink
                                    to='/login'
                                    className='text-primary poppins-regular border-primary border-2 px-2 py-1 rounded-lg'
                                >
                                    Login
                                </NavLink>
                                <NavLink
                                    to='/signup'
                                    className='text-accent poppins-regular border-accent border-2 px-2 py-1 rounded-lg'
                                >
                                    Create Account
                                </NavLink>
                            </>
                        }
                    </div>
                </div>

                <div
                    className={`flex-col md:hidden space-y-4 mt-4 ${isOpen ? 'flex' : 'hidden'}`}
                >
                    <NavLink
                        to="/"
                        className={`text-secondary poppins-regular ${isOngoingQuiz ? 'opacity-50 pointer-events-none' : ''}`}
                        onClick={isOngoingQuiz ? handleDisabledClick : undefined}
                    >
                        Home
                    </NavLink>
                    {isAuthenticated ?
                        <>
                            <NavLink
                                to="/quizzes"
                                className={`text-secondary poppins-regular ${isOngoingQuiz ? 'opacity-50 pointer-events-none' : ''}`}
                                onClick={isOngoingQuiz ? handleDisabledClick : undefined}
                            >
                                Quizzes
                            </NavLink>
                            {!isOngoingQuiz ?
                                <button
                                    onClick={handleLogout}
                                    className='text-red-400 w-fit poppins-regular border-red-400 border-2 px-2 py-1 rounded-lg'>
                                    Logout
                                </button> : ''
                            }
                        </>

                        :

                        <>
                            <NavLink
                                to='/login'
                                className='text-primary w-fit poppins-regular border-primary border-2 px-2 py-1 rounded-lg'
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to='/signup'
                                className='text-accent w-fit poppins-regular border-accent border-2 px-2 py-1 rounded-lg'
                            >
                                Create Account
                            </NavLink>
                        </>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header;
