import {Link, useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    const is404 = error?.status === 404;

    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <h1 className="text-7xl poppins-black bg-gradient bg-clip-text text-transparent mb-4">{is404 ? "404" : error.status}</h1>
            <h2 className="text-2xl poppins-semibold text-gray-700 mb-2">
                {is404 ? "Page Not Found" : error.statusText || "Something went wrong."}
            </h2>
            <p className="text-lg text-secondary mb-6">
                {is404 ? "The page you're looking for does not exist." : error.message || "An unexpected error occurred."}
            </p>
            <Link to="/" className="bg-gradient text-white px-6 py-3 rounded-lg text-lg hover:scale-105 transition duration-200">
                Go Back to Home
            </Link>
        </div>
    );
};


export default Error;
