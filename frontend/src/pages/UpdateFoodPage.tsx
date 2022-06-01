import {useParams} from "react-router-dom";
import {TripUpdateFoodEmissionsDto} from "../model/updateDtos/TripUpdateFoodEmissionsDto";
import AddFoodUpdate from "../components/AddUpdate/AddFoodUpdate";

type UpdateFoodPageProps = {
    updateFoodEmissions: (id:string, tripUpdateFoodEmissionsDto: TripUpdateFoodEmissionsDto) => void

}

export default function UpdateFoodPage({updateFoodEmissions}:UpdateFoodPageProps) {
    const {id} = useParams()

    return(
        <div className={"update-food"}>
            {id&& <AddFoodUpdate updateFoodEmissions={updateFoodEmissions} tripId={id}/>}
        </div>
    )
}