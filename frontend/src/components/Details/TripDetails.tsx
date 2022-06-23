import {Trip} from "../../model/Trip";
import {formatDepartureDate, formatReturningDate, getDateDiff, getSum} from "../Util/Calculations";
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
            <h1 className={"trip-title"}>{trip.title} {trip.year}  {getFlagEmoji(trip.destinationCountry)}</h1>
            <p>From {formatDepartureDate(trip.dateOfDeparture)} to {formatReturningDate(trip.dateOfReturning)}</p>
            <div className={"total-emissions"}>
                <p className={"all-impact-info"}>Your total travel impact:</p>
                    <div className={"impact-field"}>{Math.round(trip.calculatedEmissions.totalEmissions)} kg CO<sub>2</sub>-eq.</div>
                <TripDoughnutChart trip={trip}/>

            </div>
            <div className={"general-info"}>
                <p className={"general-info"}>Average CO<sub>2</sub>Footprint per trip day:</p>
                <div className={"value-field"}>{Math.round(trip.calculatedEmissions.totalEmissions/getDateDiff(trip.dateOfDeparture,trip.dateOfReturning))} kg
                    CO<sub>2</sub>-eq</div>
                <p className={"general-info"}>Personal Budget:</p>
                    <div className={"value-field"}>{trip.personalBudget} kg CO<sub>2</sub>-eq.</div>
                <p className={"general-info"}>Utilization of personal budget:</p>
                    <div className={"value-field"}> {Math.round((trip.calculatedEmissions.totalEmissions)/(trip.personalBudget)*100)} % </div>
                <p className={"general-info"}>Number of travellers:</p>
                    <div className={"value-field"}>{trip.travellerAmount} person(s)</div>
                <p className={"general-info"}>Travel distance:</p>
                    <div className={"value-field"}>{getSum(trip.transportations.map(distances => distances.distance))} km</div>
            </div>

            <div className={"emissions-grid"}>
                <div className={"emissions-info-box"}>
                    <p>Transportation:<br/> {Math.round(trip.calculatedEmissions.transportationEmissions)} kg
                        CO<sub>2</sub>-eq.</p>
                    <button className={"update-button"} onClick={() => navigate(`update/transportation`)}>Add +
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
                    <button className={"update-button"} onClick={() => navigate(`update/shopping`)}>Add +</button>
                </div>
                <div className={"emissions-info-box"}>
                    <p>Activity:<br/>{Math.round(trip.calculatedEmissions.activityEmissions)} kg CO<sub>2</sub>-eq.</p>
                    <button className={"update-button"} onClick={() => navigate(`update/activity`)}>Add +</button>
                </div>
            </div>
        </div>
    )
}