import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Quizzes, { loader as quizzesLoader } from "./pages/Quizzes.jsx";
import Quiz, { loader as quizLoader } from "./pages/Quiz.jsx";
import {Provider} from "react-redux";
import store from "./store/index.js";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'quizzes', element: <Quizzes />, loader: quizzesLoader },
            { path: 'quiz/:quizId', element: <Quiz />, loader: quizLoader },
        ]
    }
]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App;
