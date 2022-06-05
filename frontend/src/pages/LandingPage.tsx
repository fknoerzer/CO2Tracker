import TripsOverview from "../components/TripsOverview";
import useTrips from "../hooks/UseTrips";
import "../pages/styles/LandingPage.css"
import {useNavigate} from "react-router-dom";

export default function LandingPage() {
const navigate = useNavigate()
    const {trips} = useTrips();
    return (
        <div className={"landing-page"} >
            <TripsOverview trips={trips}/>
            <div className={"add-button-wrapper"}>
            <button className={"add-new-trip-button"} onClick={()=> navigate(`/addtrip`)}>Add new Trip</button>
            </div>
            </div>
    )
}