import {useParams} from "react-router-dom";
import {TripUpdateFoodEmissionsDto} from "../model/updateDtos/TripUpdateFoodEmissionsDto";
import AddFoodUpdate from "../components/AddUpdate/AddFoodUpdate";
import {Trip} from "../model/Trip";

type UpdateFoodPageProps = {
    updateFoodEmissions: (id:string, tripUpdateFoodEmissionsDto: TripUpdateFoodEmissionsDto) => void
    trip?:Trip
}

export default function UpdateFoodPage({updateFoodEmissions,trip}:UpdateFoodPageProps) {

    return(
        <div className={"update-food"}>
            {trip&& <AddFoodUpdate updateFoodEmissions={updateFoodEmissions} trip={trip}/>}
        </div>
    )
}