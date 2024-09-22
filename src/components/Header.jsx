import {useState} from "react";
import {RiMenu3Line} from "react-icons/ri";
import {FaXmark} from "react-icons/fa6";
import Logo from  "../assets/Logo.png"
import {NavLink} from "react-router-dom";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="py-4 px-8 md:px-12 lg:px-16">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    {/* Logo on the left */}
                    <img src={Logo} alt="" className='w-36'/>

                    {/* Hamburger Icon (visible on small screens) */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`text-white focus:outline-none block`}
                        >
                            {isOpen ? <FaXmark size={24} color='#828282'/> : <RiMenu3Line size={24} color='#828282'/>}
                        </button>
                    </div>

                    {/* Links for large screens (right-aligned) */}
                    <div className="hidden md:flex md:space-x-12">
                        <NavLink to='/' className="text-secondary">Home</NavLink>
                        <NavLink to='/quizzes' className="text-secondary">Quizzes</NavLink>
                    </div>
                </div>

                {/* Links for small screens (below logo) */}
                <div
                    className={`flex-col md:hidden space-y-4 mt-4 ${isOpen ? 'flex' : 'hidden'}`}
                >
                    <NavLink to='/' className="text-secondary">Home</NavLink>
                    <NavLink to='/quizzes' className="text-secondary">Quizzes</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Header;
