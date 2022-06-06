import TripOverviewCard from "./TripOverviewCard";
import {Trip} from "../model/Trip";
import "../components/styles/TripsOverview.css"
import {useNavigate} from "react-router-dom";

type TripsOverviewProps = {
    trips: Trip[]
}

export default function TripsOverview({trips}: TripsOverviewProps) {
    const navigate = useNavigate()
    return (
        <div className={"trip-overview"}>
            <div className={"trip-cards"}>
                {trips.map(list => <TripOverviewCard key={list.title} trip={list}/>).reverse()}
            </div>
            <div className={"add-button-wrapper"}>
                <button className={"add-new-trip-button"} onClick={() => navigate(`/addtrip`)}>Add new Trip</button>
            </div>
        </div>
    )
}