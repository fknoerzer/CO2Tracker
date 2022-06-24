import AllTripsDoughnutChart from "../components/Statistics/AllTripsDoughnutChart";
import useTrips from "../hooks/UseTrips";
import {useState} from "react";
import StatisticsCard from "../components/Statistics/StatisticsCard";
import AllEmissionsDoughnutChart from "../components/Statistics/AllEmissionsDoughnutChart";
import "../styles/StatisticsPage.css"

export default function StatisticsPage() {
    const {trips} = useTrips();
    const [selectedYear, setSelectedYear] = useState<number>()

    const years = trips.map(allYears => allYears.year).sort((a, b) => (a - b))

    const uniqueYears = years.filter((c, index) => {
        return (years.indexOf(c) === index)
    });

    return (
        <div className={"statistics-page"}>
            <div className={"year-input"}>
                Please select an analysis period:
                <select className="select-box" onChange={event => setSelectedYear(parseInt(event.target.value))}
                        name="year" id="year-input" value={selectedYear}>
                    {uniqueYears.map((year) => (
                        <option value={year}>{year.toString()}</option>
                    ))}
                    <option value="">All Trips</option>
                </select>
            </div>
            {selectedYear ? <AllTripsDoughnutChart trips={trips.filter(trip => trip.year === selectedYear)}/> :
                <AllTripsDoughnutChart trips={trips}/>}
            {selectedYear ? <StatisticsCard trips={trips.filter(trip => trip.year === selectedYear)}/> :
                < StatisticsCard trips={trips}/>}
            {selectedYear ? <AllEmissionsDoughnutChart trips={trips.filter(trip => trip.year === selectedYear)}/> :
                <AllEmissionsDoughnutChart trips={trips}/>}
        </div>
    )
}