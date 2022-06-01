import {useParams} from "react-router-dom";
import {TripUpdateAccommodationEmissionsDto} from "../model/updateDtos/TripUpdateAccommodationEmissionsDto";
import AddAccommodationUpdate from "../components/AddUpdate/AddAccommodationUpdate";

type UpdateAccommodationPageProps = {
    updateAccommodationEmissions: (id:string, tripUpdateAccommodationEmissionsDto: TripUpdateAccommodationEmissionsDto) => void

}

export default function UpdateAccommodationPage({updateAccommodationEmissions}:UpdateAccommodationPageProps) {
    const {id} = useParams()

    return(
        <div className={"update-accommodation"}>
            {id&& <AddAccommodationUpdate updateAccommodationEmissions={updateAccommodationEmissions} tripId={id}/>}
        </div>
    )
}