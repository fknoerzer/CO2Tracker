import {Trip} from "../model/Trip";

type tripDetailsProps = {
    trip : Trip;
}

export default function tripDetails({trip} : tripDetailsProps) {
    return (
        <div className="trip-detail-card">
            <p>{trip.title} {trip.year}</p>
            <p>Total Emissions: {trip.calculatedEmissions.totalEmissions} kg CO2e</p>
            <p>Total Emissions: {trip.personalBudget} kg CO2e</p>
            <p>Transportation Emissions: {trip.calculatedEmissions.transportationEmissions} kg CO2e</p>
            <p>Accommodation Emissions: {trip.calculatedEmissions.accommodationEmissions} kg CO2e</p>
            <p>Food Emissions: {trip.calculatedEmissions.foodEmissions} kg CO2e</p>
            <p>Shopping Emissions: {trip.calculatedEmissions.shoppingEmissions} kg CO2e</p>
            <p>Activities Emissions: {trip.calculatedEmissions.activitiesEmissions} kg CO2e</p>
            <br/>
        </div>
    )
}