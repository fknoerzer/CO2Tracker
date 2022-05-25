import {TripDto} from "../model/TripDto";
import AddNewTrip from "../components/AddNewTrip";

type AddTripPageProps = {
    addNewTrip : (newTrip: TripDto) => void
}
export default function AddTripPage({addNewTrip}: AddTripPageProps){
    return (
        <div>
            <AddNewTrip addNewTrip={addNewTrip}/>
        </div>
    )
}