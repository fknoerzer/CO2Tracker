import {Trip} from "../../model/Trip";
import {getDateDiff, getSum} from "../Util/Calculations";
import React from "react";

type StatisticsCardProps = {
    trips: Trip[]
}

export default function StatisticsCard({trips}: StatisticsCardProps) {

    return (
        <div className={"general-statistics"}>
            <p className={"general-info"}> Your total travel impact:</p>
            <div className={"value-field"}> {getSum(trips.map(trip => trip.calculatedEmissions.totalEmissions))} kg CO<sub>2</sub>-eq</div>
            <p className={"general-info"}> Average CO<sub>2</sub>Footprint per trip day:</p>
            <div className={"value-field"}> {(getSum(trips.map(trip => trip.calculatedEmissions.totalEmissions)) /
                    getSum((trips.map(trip => getDateDiff(trip.dateOfDeparture, trip.dateOfReturning))))).toFixed(1)} kg CO<sub>2</sub>-eq.</div>
            <p className={"general-info"}>  Utilisation of personal budget: </p>
            <div className={"value-field"}> {(getSum(trips.map(trip => trip.calculatedEmissions.totalEmissions))/
                (getSum(trips.map(trip => trip.personalBudget)))*100).toFixed(0)} % </div>
        </div>
    )
}