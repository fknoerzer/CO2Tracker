import {Trip} from "../../model/Trip";
import {Doughnut} from 'react-chartjs-2';
import {Chart, registerables} from 'chart.js'
import React from "react";

Chart.register(...registerables);

type AllTripsDoughnutChartProps = {
    trips: Trip[]
}

export default function AllTripsDoughnutChart({trips}: AllTripsDoughnutChartProps) {

    const getTitles: string[] = trips.map(elem => (elem.title))
    const getCalculatedEmissions: number[] = trips.map(val => (val.calculatedEmissions.totalEmissions))

    const data = {
        labels: getTitles,
        datasets:
            [{
                label: "CO2-Emissions: ",
                data: getCalculatedEmissions,
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
            <h3>Overview trips</h3>
            <Doughnut data={data} options={options}/>
        </div>
    )
}