import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Quizzes from "./pages/Quizzes.jsx";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout/>}>
                    <Route index={true} element={<Home/>}/>
                    <Route path='quizzes' element={<Quizzes/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
