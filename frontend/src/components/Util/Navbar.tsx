import "../../styles/Navbar.css"
import {AiFillHome, AiOutlineLogout,} from "react-icons/ai";
import {useNavigate} from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate()
    return (
        <div className={"navbar"}>
            <button className={"ai-button-home"} onClick={() => navigate(`/`)}><AiFillHome/></button>
            <img className={"logo"} src='https://i.postimg.cc/Kct4ktHz/aa4743e4658b490aa98e3e8c1e07bd5b-removebg-preview.png' alt='Logo-NEW2'/>
            <button className={"ai-button-logout"} onClick={() => navigate(`/logout`)}><AiOutlineLogout/></button>
        </div>)
}
