import {TripDto} from "../model/TripDto";
import AddNewTrip from "../components/AddNewTripComponents/AddNewTrip";
import "./styles/AddTripPage.css"

type AddTripPageProps = {
    addNewTrip : (newTrip: TripDto) => void
}
export default function AddTripPage({addNewTrip}: AddTripPageProps){
    return (
        <div className={"add-trip"}>
            <AddNewTrip addNewTrip={addNewTrip}/>
        </div>
    )
}