import {Trip} from "../model/Trip";

type tripDetailsProps = {
    trip : Trip;
}

export default function tripDetails({trip} : tripDetailsProps) {
    return (
        <div className="trip-detail-card">
            <p>{trip.title}</p>
            <p>{trip.year}</p>
            <p>Total Emissions: {trip.totalEmissions} kg CO2e</p>
            <p>Transportation Emissions: {trip.transportationEmissions} kg CO2e</p>
            <p>Accommodation Emissions: {trip.accommodationEmissions} kg CO2e</p>
            <p>Food Emissions: {trip.foodEmissions} kg CO2e</p>
            <p>Shopping Emissions: {trip.shoppingEmissions} kg CO2e</p>
            <p>Activities Emissions: {trip.activitiesEmissions} kg CO2e</p>
            <br/>
        </div>
    )
}