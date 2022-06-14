import {Doughnut} from "react-chartjs-2";
import React from "react";
import {Chart, registerables} from "chart.js";
import {Trip} from "../../model/Trip";

Chart.register(...registerables);

type TripDoughnutChartProps = {
    trip: Trip
}

export default function TripDoughnutChart({trip}: TripDoughnutChartProps) {

    const data = {
        labels: ['Transportation', 'Accommodation', 'Food', 'Shopping', 'Activity'],
        datasets:
            [{
                label: "CO2-Emissions ",
                data: [trip.calculatedEmissions.transportationEmissions,
                    trip.calculatedEmissions.accommodationEmissions,
                    trip.calculatedEmissions.foodEmissions,
                    trip.calculatedEmissions.shoppingEmissions,
                    trip.calculatedEmissions.activityEmissions],
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
        <div className={"trip-doughnut"}>
            <Doughnut data={data} options={options}/>
        </div>)
}