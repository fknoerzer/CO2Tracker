import {useParams} from "react-router-dom";
import {TripUpdateShoppingEmissionsDto} from "../model/updateDtos/TripUpdateShoppingEmissionsDto";
import AddShoppingUpdate from "../components/AddUpdate/AddShoppingUpdate";

type UpdateShoppingPageProps = {
    updateShoppingEmissions: (id:string, tripUpdateShoppingEmissionsDto: TripUpdateShoppingEmissionsDto) => void
}

export default function UpdateShoppingPage({updateShoppingEmissions}:UpdateShoppingPageProps) {
    const {id} = useParams()

    return(
        <div className={"update-Shopping"}>
            {id&& <AddShoppingUpdate updateShoppingEmissions={updateShoppingEmissions} tripId={id}/>}
        </div>
    )
}