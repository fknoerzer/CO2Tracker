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
            <div className="trip-infos">
                <p className={"title"}>{trip.title} {trip.year}</p>
                <p className={"date"}>From {formatDepartureDate(trip.dateOfDeparture)} to {formatReturningDate(trip.dateOfReturning)}</p>
                <p className={"total emissions"}>Total
                    Emissions: {Math.round(trip.calculatedEmissions.totalEmissions)} kg CO<sub>2</sub>-eq.</p>
            </div>
                <button className={"offset-button"} onClick={() => navigate(`trips/offset/${trip.id}`)}>Offset</button>
                <button className={"details-button"} onClick={() => navigate(`/trips/${trip.id}`)}>Details</button>
            </div>
    )}