import AddShoppingUpdate from "../components/AddUpdate/AddShoppingUpdate";
import {Trip} from "../model/Trip";

type UpdateShoppingPageProps = {
    trip:Trip
}

export default function UpdateShoppingPage({trip}:UpdateShoppingPageProps) {

    return(
        <div className={"update-Shopping"}>
            {trip&& <AddShoppingUpdate trip={trip}/>}
        </div>
    )
}