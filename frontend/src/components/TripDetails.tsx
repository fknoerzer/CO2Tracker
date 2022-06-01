import {Trip} from "../model/Trip";
import {formatDepartureDate, formatReturningDate} from "./Util/FormatedDate";

type tripDetailsProps = {
    trip: Trip;
}

export default function tripDetails({trip}: tripDetailsProps) {
    return (
        <div className="trip-detail-card">
            <h2>{trip.title} {trip.year}</h2>
            <div className={"general-info"}>
                <p>From {formatDepartureDate(trip.dateOfDeparture)} to {formatReturningDate(trip.dateOfReturning)}</p>
                <p>Total Emissions: {trip.calculatedEmissions.totalEmissions} kg CO2e</p>
                <p>Your Personal CO<sub>2</sub>: {trip.personalBudget} kg CO2e</p>
            </div>
            <div className={"transportation-emissions"}>
                <p>Transportation Emissions: {trip.calculatedEmissions.transportationEmissions} kg CO<sub>2</sub>e</p>
            </div>
            <div className={"accommodation-emissions"}>
                <p>Accommodation Emissions: {trip.calculatedEmissions.accommodationEmissions} kg CO2<sub>2</sub>e</p>
            </div>
            <div className={"food-emissions"}>
                <p>Your Diet: {trip.food.typeOfDiet}</p>
                <p>Food Emissions: {trip.calculatedEmissions.foodEmissions} kg CO<sub>2</sub>e</p>
            </div>
            <div className={"shopping-emissions"}>
                <p>Shopping Emissions: {trip.calculatedEmissions.shoppingEmissions} kg CO<sub>2</sub>e</p>
            </div>
            <div className={"activity-emissions"}>
                <p>Activity Emissions: {trip.calculatedEmissions.activityEmissions} kg CO<sub>2</sub>e</p>
            </div>
            <br/>
        </div>
    )
}