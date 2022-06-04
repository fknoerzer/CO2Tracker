import {useParams} from "react-router-dom";
import {TripUpdateAccommodationEmissionsDto} from "../model/updateDtos/TripUpdateAccommodationEmissionsDto";
import AddAccommodationUpdate from "../components/AddUpdate/AddAccommodationUpdate";
import {Trip} from "../model/Trip";

type UpdateAccommodationPageProps = {
    updateAccommodationEmissions: (id:string, tripUpdateAccommodationEmissionsDto: TripUpdateAccommodationEmissionsDto) => void
    trip?:Trip
}

export default function UpdateAccommodationPage({updateAccommodationEmissions,trip}:UpdateAccommodationPageProps) {

    return(
        <div className={"update-accommodation"}>
            {trip&& <AddAccommodationUpdate updateAccommodationEmissions={updateAccommodationEmissions} trip={trip}/>}
        </div>
    )
}