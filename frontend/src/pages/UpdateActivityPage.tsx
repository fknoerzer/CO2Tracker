import {useParams} from "react-router-dom";
import {TripUpdateActivityEmissionsDto} from "../model/updateDtos/TripUpdateActivityEmissionsDto";
import AddActivityUpdate from "../components/AddUpdate/AddActivityUpdate";
import {Trip} from "../model/Trip";

type UpdateActivityPageProps = {
    updateActivityEmissions: (id:string, tripUpdateActivityEmissionsDto: TripUpdateActivityEmissionsDto) => void
    trip?:Trip
}

export default function UpdateActivityPage({updateActivityEmissions,trip}:UpdateActivityPageProps) {

    return(
        <div className={"update-Activity"}>
            {trip&& <AddActivityUpdate updateActivityEmissions={updateActivityEmissions} trip={trip}/>}
        </div>
    )
}