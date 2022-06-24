import TripOverviewCard from "./TripOverviewCard";
import {Trip} from "../../model/Trip";
import "../../styles/TripsOverview.css"
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useState} from "react";
import {BiMessageSquareAdd} from "react-icons/bi";

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
            <div className={"button-wrapper"}>
                <button className={"statistics-button"} onClick={()=> navigate("/alltrips")}> Statistics</button>
                <button className={"add-new-trip-button"} onClick={() => navigate(`/addtrip`)}>Add Trip <BiMessageSquareAdd/></button>
            </div>
        </div>
    )
}