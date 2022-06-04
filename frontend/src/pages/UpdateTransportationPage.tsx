import {TripUpdateTransportEmissionsDto} from "../model/updateDtos/TripUpdateTransportEmissionsDto";
import AddTransportationUpdate from "../components/AddUpdate/AddTransportationUpdate";
import {Trip} from "../model/Trip";

type UpdateTransportationPageProps = {
    updateTransportEmissions: (id:string, tripUpdateTransportEmissionsDto: TripUpdateTransportEmissionsDto) => void
    trip?:Trip
}

export default function UpdateTransportationPage({updateTransportEmissions, trip}:UpdateTransportationPageProps) {

    return(
        <div className={"update-transport"}>
            {trip&& <AddTransportationUpdate updateTransportEmissions={updateTransportEmissions} trip={trip}/>}
        </div>
    )
}