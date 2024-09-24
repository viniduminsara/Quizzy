import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Quizzes, { loader as quizzesLoader } from "./pages/Quizzes.jsx";
import Quiz from "./pages/Quiz.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'quizzes', element: <Quizzes />, loader: quizzesLoader },
            { path: 'quiz/:quizId', element: <Quiz /> }
        ]
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
