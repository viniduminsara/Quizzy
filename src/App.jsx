import {BrowserRouter, Route, Routes} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import Quiz from "./pages/Quiz.jsx";
import {useDispatch} from "react-redux";
import Error from "./pages/Error.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {authActions} from "./store/auth.js";
import {useEffect, useState} from "react";
import {ToastContainer} from "react-toastify";
import ProtectedRoutes from "./layouts/ProtectedRoutes.jsx";
import Loading from "./components/Loading.jsx";

function App() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true); // Added loading state

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                };
                dispatch(authActions.setUser(userData));
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [dispatch]);

    if (loading) {
        return <Loading/>
    }

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RootLayout/>} errorElement={<Error/>}>
                        <Route index={true} element={<Home/>}/>
                        <Route path='signup' element={<Signup/>}/>
                        <Route path='login' element={<Login/>}/>
                        <Route element={<ProtectedRoutes/>}>
                            <Route path='quizzes' element={<Quizzes/>}/>
                            <Route path='quiz/:quizId' element={<Quiz/>}/>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer position='bottom-right' />
        </>
    );
}

export default App;
