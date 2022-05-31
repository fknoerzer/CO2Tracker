import {Trip} from "../../model/Trip";
import TripDetails from "../TripDetails"

type ShowTripDetailsProps = {
    item: Trip
    toggleEditing: () => void
}

export default function ShowTripDetails({item, toggleEditing}: ShowTripDetailsProps) {
    return(
    <div className={"show-trip-details"}>
        <TripDetails trip={item}/>
        <button onClick={toggleEditing}>Edit item</button>
    </div>)
}