import { useState } from 'react';
import Learning from "../assets/Signup.png";
import Logo from "../assets/Logo.png";
import StyledInput from "../components/StyledInput.jsx";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return (
        <>
            <section className='flex flex-col md:flex-row justify-center items-center lg:space-x-32'>
                <div className='px-6'>
                    <form onSubmit={handleSubmit} className='w-96 flex flex-col px-8 md:px-0 space-y-4'>
                        <div className='flex flex-col justify-center items-center mb-4'>
                            <img src={Logo} alt="logo" className='w-40'/>
                            <h3 className='text-2xl poppins-semibold'>Welcome to Quizzy</h3>
                        </div>
                        <StyledInput
                            type='email'
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
                            Sign Up
                        </button>
                    </form>
                </div>
                <img src={Learning} alt='hero image' className='w-96 md:w-5/12'/>
            </section>
        </>
    );
}

export default Signup;
