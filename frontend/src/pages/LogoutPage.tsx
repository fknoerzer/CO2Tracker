import {useContext} from "react";
import {AuthContext} from "../context/AuthProvider";
import {useNavigate} from "react-router-dom";
import "../styles/LoginPage.css"

export default function LogoutPage() {

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
        <h1>Are you sure you want to log out?</h1>
        <div className={"logout-button-wrapper"}>
            <button className={"return-button"} onClick={onClickBack}>Return</button>
            <button className={"logout-button"} onClick={onClickLogout}>Logout</button>
        </div>
    </div>
}
