import {Trip} from "../../model/Trip";
import {getDateDiff, getSum} from "../Util/Calculations";
import React from "react";

type StatisticsCardProps = {
    trips: Trip[]
}

export default function StatisticsCard({trips}: StatisticsCardProps) {

    return (
        <div className={"statistics-details"}>
            <h3> Your total travel impact:{getSum(trips.map(trip => trip.calculatedEmissions.totalEmissions))} kg
                CO<sub>2</sub>-eq</h3>
            <p>Total number of holidays: {getSum((trips.map(trip => getDateDiff(trip.dateOfDeparture, trip.dateOfReturning))))}</p> days
            <p> Average CO<sub>2</sub>Footprint per trip day: {(getSum(trips.map(trip => trip.calculatedEmissions.totalEmissions)) /
                    getSum((trips.map(trip => getDateDiff(trip.dateOfDeparture, trip.dateOfReturning))))).toFixed(1)} kg CO<sub>2</sub>-eq.</p>
            <p>  Utilization of personal budget: {(getSum(trips.map(trip => trip.calculatedEmissions.totalEmissions))/
                (getSum(trips.map(trip => trip.personalBudget)))*100).toFixed(0)} % </p>
        </div>
    )
}