import {Trip} from "../../model/Trip";
import {formatDepartureDate, formatReturningDate, getDateDiff} from "../Util/Calculations";
import {useNavigate} from "react-router-dom";
import "../styles/TripDetails.css"
import React from "react";
import TripDoughnutChart from "./TripDoughnutChart";

type TripDetailsProps = {
    trip: Trip;
}

export default function TripDetails({trip}: TripDetailsProps) {
    const navigate = useNavigate()
    const getFlagEmoji = (countryCode: any)=>String.fromCodePoint(...[...countryCode.toUpperCase()].map(x=>0x1f1a5+x.charCodeAt()))

    return (

        <div className="trip-detail-card">
            <h1>{trip.title} {trip.year} {getFlagEmoji(trip.destinationCountry)}</h1>
            <div className={"total-emissions"}>
                <TripDoughnutChart trip={trip}/>

            </div>
            <div className={"general-info"}>
                <p>Your total travel impact: {Math.round(trip.calculatedEmissions.totalEmissions)} kg CO<sub>2</sub>-eq.</p>
                <p>Average CO<sub>2</sub>Footprint per trip day: {Math.round(trip.calculatedEmissions.totalEmissions/getDateDiff(trip.dateOfDeparture,trip.dateOfReturning))} kg
                    CO<sub>2</sub>-eq
                      </p>
                <p>Personal Budget: {trip.personalBudget} kg CO<sub>2</sub>-eq.</p>
                <p>Utilization of personal budget: {Math.round(trip.calculatedEmissions.totalEmissions)/Math.round(trip.personalBudget)*100} %</p>
                <p>Dates: From {formatDepartureDate(trip.dateOfDeparture)} to {formatReturningDate(trip.dateOfReturning)}</p>
                <p>Number of travellers: {trip.travellerAmount}</p>
            </div>
            <div className={"emissions-grid"}>
                <div className={"emissions-info-box"}>
                    <p>Transportation:<br/> {Math.round(trip.calculatedEmissions.transportationEmissions)} kg
                        CO<sub>2</sub>-eq.</p>
                    <button className={"update-button"} onClick={() => navigate(`update/transportation`)}>Update
                    </button>
                </div>
                <div className={"emissions-info-box"}>
                    <p>Accommodation:<br/>{Math.round(trip.calculatedEmissions.accommodationEmissions)} kg
                        CO<sub>2</sub>-eq.</p>
                </div>
                <div className={"emissions-info-box"}>
                    <p>Food:<br/>{Math.round(trip.calculatedEmissions.foodEmissions)} kg CO<sub>2</sub>-eq.</p>
                </div>
                <div className={"emissions-info-box"}>
                    <p>Shopping:<br/>{Math.round(trip.calculatedEmissions.shoppingEmissions)} kg CO<sub>2</sub>-eq.</p>
                    <button className={"update-button"} onClick={() => navigate(`update/shopping`)}>Update</button>
                </div>
                <div className={"emissions-info-box"}>
                    <p>Activity:<br/>{Math.round(trip.calculatedEmissions.activityEmissions)} kg CO<sub>2</sub>-eq.</p>
                    <button className={"update-button"} onClick={() => navigate(`update/activity`)}>Update</button>
                </div>
            </div>
        </div>
    )
}