import {TripDto} from "../model/TripDto";
import AddNewTrip from "../components/AddNewTripComponents/AddNewTrip";

type AddTripPageProps = {
    addNewTrip : (newTrip: TripDto) => void
}
export default function AddTripPage({addNewTrip}: AddTripPageProps){
    return (
            <AddNewTrip addNewTrip={addNewTrip}/>
    )
}