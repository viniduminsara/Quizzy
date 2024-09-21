import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";

function App() {

    // const router = createBrowserRouter([
    //   {
    //     path: '/',
    //     element: <RootLayout/>,
    //     children: [
    //         {
    //           index: true,
    //         }
    //     ]
    //   }
    // ]);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<RootLayout/>}>
                    <Route path='/' element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
