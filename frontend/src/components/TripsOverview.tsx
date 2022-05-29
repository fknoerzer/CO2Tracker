import TripDetails from "./TripDetails";
import {Trip} from "../model/Trip";

type TripsOverviewProps = {
    trips: Trip[]
}

export default function TripsOverview({trips}: TripsOverviewProps) {

    return (
        <div className={"trip-overview"}>
            {trips.map(list => <TripDetails key={list.title} trip={list}/>).reverse()}
        </div>
    )
}