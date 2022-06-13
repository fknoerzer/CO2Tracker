import TripOverviewCard from "./TripOverviewCard";
import {Trip} from "../model/Trip";
import "../components/styles/TripsOverview.css"
import {useNavigate} from "react-router-dom";
import AllTripsDoughnutChart from "./AllTripsDoughnutChart";

type TripsOverviewProps = {
    trips: Trip[]
}

export default function TripsOverview({trips}: TripsOverviewProps) {
    const navigate = useNavigate()

    return (

        <div className={"trip-overview"}>
            <h1>Welcome back,<br/> here are your trips. </h1>
            <div className={"trip-cards"}>
                <AllTripsDoughnutChart trips={trips}/>
                {trips.map(listTripDetail => <TripOverviewCard key={listTripDetail.title}
                                                               trip={listTripDetail}/>).reverse()}
            </div>
            <div className={"add-button-wrapper"}>
                <button className={"add-new-trip-button"} onClick={() => navigate(`/addtrip`)}>Add new Trip</button>
            </div>
        </div>
    )
}