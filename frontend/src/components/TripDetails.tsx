import {Trip} from "../model/Trip";
import {formatDepartureDate, formatReturningDate} from "./Util/FormatedDate";
import {useNavigate} from "react-router-dom";
import "../components/styles/TripDetails.css"
import React from "react";

type TripDetailsProps = {
    trip: Trip;
}

export default function TripDetails({trip}: TripDetailsProps) {
    const navigate = useNavigate()

    return (
        <div className="trip-detail-card">
            <h1>{trip.title} {trip.year}</h1>
            <div className={"total-emissions"}>
                <p>Total Emissions: {Math.round(trip.calculatedEmissions.totalEmissions)} kg CO<sub>2</sub>-eq.</p>
                <p>Personal Budget: {trip.personalBudget} kg CO<sub>2</sub>-eq.</p>
            </div>
                <div className={"general-info"}>
                    <p>Destiniation Country: {trip.destiniationCountry}</p>
                    <p>Dates: From {formatDepartureDate(trip.dateOfDeparture)} to {formatReturningDate(trip.dateOfReturning)}</p>
                    <p>Number of travellers: {trip.travellerAmount}</p>
            </div>
            <div className={"emissions-grid"}>
            <div className={"emissions-info-box"}>
                <p>Transportation:<br/> {Math.round(trip.calculatedEmissions.transportationEmissions)} kg CO<sub>2</sub>-eq.</p>
                <button className={"update-button"} onClick={()=>navigate(`update/transportation`)}>Update</button>
            </div>
            <div className={"emissions-info-box"}>
                <p>Accommodation:<br/>{Math.round(trip.calculatedEmissions.accommodationEmissions)} kg CO<sub>2</sub>-eq.</p>
            </div>
            <div className={"emissions-info-box"}>
                <p>Food:<br/>{Math.round(trip.calculatedEmissions.foodEmissions)} kg CO<sub>2</sub>-eq.</p>
            </div>
            <div className={"emissions-info-box"}>
                <p>Shopping:<br/>{Math.round(trip.calculatedEmissions.shoppingEmissions)} kg CO<sub>2</sub>-eq.</p>
                <button className={"update-button"} onClick={()=>navigate(`update/shopping`)}>Update</button>
            </div>
            <div className={"emissions-info-box"}>
                <p>Activity:<br/>{Math.round(trip.calculatedEmissions.activityEmissions)} kg CO<sub>2</sub>-eq.</p>
                <button className={"update-button"} onClick={()=>navigate(`update/activity`)}>Update</button>
            </div>
            </div>
        </div>
    )
}