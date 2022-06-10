import AddActivityUpdate from "../components/AddUpdate/AddActivityUpdate";
import {Trip} from "../model/Trip";

type UpdateActivityPageProps = {
    trip:Trip
}

export default function UpdateActivityPage({trip}:UpdateActivityPageProps) {

    return(
        <div className={"update-Activity"}>
            {trip&& <AddActivityUpdate trip={trip}/>}
        </div>
    )
}