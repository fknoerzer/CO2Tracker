import AllTripsDoughnutChart from "../components/Statistics/AllTripsDoughnutChart";

import useTrips from "../hooks/UseTrips";
import {useState} from "react";

export default function AllTripsPage() {
    const {trips} = useTrips();
const [selectedYear, setSelectedYear]  = useState<number>()

    const years = trips.map(allYears => allYears.year)

    const uniqueYears = years.filter((c, index) => {
        return years.indexOf(c) === index;
    });

    return (

            <div>
                <div className="select-box">
            <select onChange={event => setSelectedYear(parseInt(event.target.value))} name="year"  id="year-input" value={selectedYear}>
                {uniqueYears.map((year) => (
                    <option value={year}>{year.toString()}</option>
                ))}<option value="">All Trips</option>
            </select>
            </div>
                {selectedYear ?  <AllTripsDoughnutChart trips={trips.filter(trip=> trip.year===selectedYear)}/> :  <AllTripsDoughnutChart trips={trips}/>  }
        <div className="statistics">

        </div>
            </div>
    )
}