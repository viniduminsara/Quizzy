import {Outlet, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {toast} from "react-toastify";
import {useEffect, useState} from "react";
import Loading from "../components/Loading.jsx";

const ProtectedRoutes = () => {
    const navigate = useNavigate();
    const {isAuthenticated} = useSelector(state => state.auth);
    const [checkingAuth, setCheckingAuth] = useState(true);

    useEffect(() => {
        if (isAuthenticated === false && checkingAuth === false) {
            toast.info('Please login first!');
            navigate('/login');
        } else {
            setCheckingAuth(false);
        }
    }, [isAuthenticated, checkingAuth, navigate]);

    if (checkingAuth) {
        return <Loading/>
    }

    return <Outlet/>;
}

export default ProtectedRoutes;
