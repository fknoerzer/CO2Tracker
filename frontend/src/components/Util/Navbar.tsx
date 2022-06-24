import "../../styles/Navbar.css"
import {AiFillHome, AiOutlineLogout,} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate()
    return (
        <div className={"navbar"}>
            <button className={"ai-button-home"} onClick={() => navigate(`/`)}><AiFillHome/></button>
            <img className={"logo"} src='https://i.postimg.cc/sDVjbkck/Logo-NEW2.jpg' alt='Logo-NEW2'/>
            <button className={"ai-button-logout"} onClick={() => navigate(`/logout`)}><AiOutlineLogout/></button>
        </div>)
}