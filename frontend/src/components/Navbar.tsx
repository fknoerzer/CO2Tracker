import "../components/styles/Navbar.css"
import {useNavigate} from "react-router-dom";
export function Navbar() {
    const navigate = useNavigate()
    return(
        <div className={"navbar"}>
            <button className={"home-button"} onClick={()=>navigate(`/`) }>Home</button>
            <div className={"app-title"}> Holiday Tracker </div>
            <div className={"menu-icon"}>
            <div className={"line"}/>
            <div className={"line"}/>
            <div className={"line"}/>
            </div>
        </div>)
}