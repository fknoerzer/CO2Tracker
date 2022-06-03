import {useParams} from "react-router-dom";
import {TripUpdateShoppingEmissionsDto} from "../model/updateDtos/TripUpdateShoppingEmissionsDto";
import AddShoppingUpdate from "../components/AddUpdate/AddShoppingUpdate";
import {Trip} from "../model/Trip";

type UpdateShoppingPageProps = {
    updateShoppingEmissions: (id:string, tripUpdateShoppingEmissionsDto: TripUpdateShoppingEmissionsDto) => void
    trip?:Trip
}

export default function UpdateShoppingPage({updateShoppingEmissions,trip}:UpdateShoppingPageProps) {

    return(
        <div className={"update-Shopping"}>
            {trip&& <AddShoppingUpdate updateShoppingEmissions={updateShoppingEmissions} trip={trip}/>}
        </div>
    )
}