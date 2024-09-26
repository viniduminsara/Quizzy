import {useState} from "react";
import Logo from "../assets/Logo.png";
import StyledInput from "../components/StyledInput.jsx";
import Image from "../assets/Login.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            toast.error('Email is required');
            return;
        }

        if (!emailRegex.test(email)) {
            toast.error('Invalid email format');
            return;
        }

        if (password.length < 6) {
            toast.error('Password is required');
            return;
        }

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <>
            <section className='flex flex-col-reverse md:flex-row justify-center items-center lg:space-x-32'>
                <img src={Image} alt='hero image' className='w-96 md:w-5/12'/>
                <div className='px-6'>
                    <form onSubmit={handleSubmit} className='w-96 flex flex-col px-8 md:px-0 space-y-4'>
                        <div className='flex flex-col justify-center items-center mb-4'>
                            <img src={Logo} alt="logo" className='w-40'/>
                            <h3 className='text-2xl poppins-semibold'>Welcome Back</h3>
                        </div>
                        <StyledInput
                            type='text'
                            placeholder='Enter your email'
                            value={email}
                            onChangeHandler={(e) => setEmail(e.target.value)}
                        />
                        <StyledInput
                            type='password'
                            placeholder='Enter your password'
                            value={password}
                            onChangeHandler={(e) => setPassword(e.target.value)}
                        />
                        <button type='submit' className='bg-gradient poppins-regular text-white p-2 rounded-md'>
                            Login
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Login;
