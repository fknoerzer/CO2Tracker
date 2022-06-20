import AddFoodUpdate from "../components/AddUpdate/AddFoodUpdate";
import {Trip} from "../model/Trip";

type UpdateFoodPageProps = {
    trip:Trip
}

export default function UpdateFoodPage({trip}:UpdateFoodPageProps) {

    return(
        <div className={"update-div"}>
            {trip&& <AddFoodUpdate trip={trip}/>}
        </div>
    )
}