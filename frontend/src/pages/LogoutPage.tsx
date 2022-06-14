import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";
import {useNavigate} from "react-router-dom";

export  default function LogoutPage() {

    const {logout} = useContext(AuthContext)
    const navigate = useNavigate()
    const onClickBack = () => {
        navigate('/')
    }

    const onClickLogout = () => {
        logout()
            localStorage.clear();
            window.location.href = '/';
    }

    return <div className={"logout-page"}>
        <p>Are you sure you want to log out?</p>
        <button onClick={onClickLogout}>Logout</button>
        <button onClick={onClickBack}>Return</button>
    </div>
}
