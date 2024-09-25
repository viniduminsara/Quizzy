import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Quizzes from "./pages/Quizzes.jsx";
import Quiz from "./pages/Quiz.jsx";
import {Provider} from "react-redux";
import store from "./store/index.js";
import Error from "./pages/Error.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error/>,
        children: [
            { index: true, element: <Home /> },
            { path: 'quizzes', element: <Quizzes /> },
            { path: 'quiz/:quizId', element: <Quiz /> },
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
