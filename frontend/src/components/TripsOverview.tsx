import useTrips from "../hooks/UseTrips";
import TripDetails from "./TripDetails";

export default function TripsOverview() {
    const {trips} = useTrips();

    return (
            <div className={"trip-overview"}>
                {trips.map(list => <TripDetails key={list.title} trip={list}/>).reverse()}
            </div>
    )
}