import {BrowserRouter, Route, Routes} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import Quiz from "./pages/Quiz.jsx";
import {useDispatch} from "react-redux";
import Error from "./pages/Error.jsx";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth";
import {authActions} from "./store/auth.js";
import {ToastContainer} from "react-toastify";

function App() {

    const dispatch = useDispatch();

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const userData = {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL
            };
            dispatch(authActions.setUser(userData));
        } else {
            console.log('user signed out');
        }
    });

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RootLayout/>} errorElement={<Error/>}>
                        <Route index={true} element={<Home/>}/>
                        <Route path='quizzes' element={<Quizzes/>}/>
                        <Route path='quiz/:quizId' element={<Quiz/>}/>
                        <Route path='signup' element={<Signup/>}/>
                        <Route path='login' element={<Login/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer position='bottom-right' />
        </>
    )
}

export default App;
