import {Trip} from "../model/Trip";
import "../components/styles/TripOverviewCard.css"
import {formatDepartureDate, formatReturningDate} from "./Util/FormatedDate";
import {useNavigate} from "react-router-dom";

type TripOverviewCardProps = {
    trip: Trip;
}


export default function TripOverviewCard({trip}: TripOverviewCardProps) {

    const navigate = useNavigate();

    return (
        <div className="trip-overview-card">
            <p className={"title"}>{trip.title} {trip.year}</p>
            <p className={"date"}>From {formatDepartureDate(trip.dateOfDeparture)} to {formatReturningDate(trip.dateOfReturning)}</p>
            <p className={"total emissions"}>Total Emissions: {trip.calculatedEmissions.totalEmissions} kg CO2e</p>
            <button className={"details-button"} onClick={()=> navigate(`/trips/${trip.id}`)}>Details</button>
            <button className={"offset-button"} onClick={()=> navigate(`trips/offset/${trip.id}`)}>Offset</button>
            <br/>
        </div>)
}