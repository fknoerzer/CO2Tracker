import TripOverviewCard from "./TripOverviewCard";
import {Trip} from "../model/Trip";
import "../components/styles/TripsOverview.css"
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useState} from "react";

type TripsOverviewProps = {
    trips: Trip[]
}

export default function TripsOverview({trips}: TripsOverviewProps) {
    const navigate = useNavigate()
    const [search, setSearch] = useState<string>("")

    return (
        <div className={"trip-overview"}>
            <div className={"trip-cards"}>
                <input className={"searchbar"} type={"text"} value={search} placeholder={"Search your trips"}
                       onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}/>
                {trips.filter(trip => trip.title.toLowerCase().includes(search.toLowerCase()))
                    .sort((a, b) => a.dateOfDeparture.localeCompare(b.dateOfDeparture))
                    .map(trip => <TripOverviewCard key={trip.id} trip={trip}/>).reverse()}
            </div>
            <div className={"add-button-wrapper"}>
                <button className={"add-new-trip-button"} onClick={() => navigate(`/addtrip`)}>Add new Trip +</button>
            </div>
        </div>
    )
}