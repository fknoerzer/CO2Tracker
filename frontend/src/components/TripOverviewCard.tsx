import {Trip} from "../model/Trip";
import "../components/styles/TripOverviewCard.css"
import {formatDepartureDate} from "./Util/FormatedDate";
import {formatReturningDate} from "./Util/FormatedDate";

type tripOverviewCardProps = {
    trip: Trip;
}

export default function tripOverviewCard({trip}: tripOverviewCardProps) {

    return (

        <div className="trip-overview-card">
            <p className={"title"}>{trip.title} {trip.year}</p>
            <p className={"date"}>From {formatDepartureDate(trip.dateOfDeparture)} to {formatReturningDate(trip.dateOfReturning)}</p>
            <p className={"total emissions"}>Total Emissions: {trip.calculatedEmissions.totalEmissions} kg CO2e</p>
            <br/>
        </div>)
}