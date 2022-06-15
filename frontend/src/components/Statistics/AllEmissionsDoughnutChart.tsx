import {Doughnut} from "react-chartjs-2";
import React from "react";
import {Chart, registerables} from "chart.js";
import {Trip} from "../../model/Trip";
import {getSum} from "../Util/Calculations";

Chart.register(...registerables);

type AllEmissionsDoughnutChartProps = {
    trips: Trip[]
}
export default function AllEmissionsDoughnutChart({trips}: AllEmissionsDoughnutChartProps)  {


    const data = {
        labels: ['Transportation', 'Accommodation', 'Food', 'Shopping', 'Activity'],
        datasets:
            [{
                label: "CO2-Emissions ",
                data: [getSum(trips.map(trip=>trip.calculatedEmissions.transportationEmissions)),
                    getSum(trips.map(trip=>trip.calculatedEmissions.accommodationEmissions)),
                        getSum(trips.map(trip=>trip.calculatedEmissions.foodEmissions)),
                            getSum(trips.map(trip=>trip.calculatedEmissions.shoppingEmissions)),
                                getSum(trips.map(trip=>trip.calculatedEmissions.activityEmissions))],
                backgroundColor: [
                    '#EF626C',
                    '#023C40',
                    '#A1E44D',
                    '#77FF94',
                    '#60993E',
                    '#E6AA68',
                    '#C44536',
                    '#FC9E4F',
                    '#23CE6B'
                ],
                hoverOffset: 4,
                borderWidth: 1
            }]
    }

    const options = {
        plugins: {

            legend: {

                labels: {
                    font: {
                        size: 16,
                        weight: 'bold',
                    }
                }
            }
        }
    }

    return (
        <div className={"AllEmissions-doughnut"}>
            <h3>Overview emissions</h3>
            <Doughnut data={data} options={options}/>
        </div>)
}