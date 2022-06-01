import {useParams} from "react-router-dom";
import {TripUpdateActivityEmissionsDto} from "../model/updateDtos/TripUpdateActivityEmissionsDto";
import AddActivityUpdate from "../components/AddUpdate/AddActivityUpdate";

type UpdateActivityPageProps = {
    updateActivityEmissions: (id:string, tripUpdateActivityEmissionsDto: TripUpdateActivityEmissionsDto) => void

}

export default function UpdateActivityPage({updateActivityEmissions}:UpdateActivityPageProps) {
    const {id} = useParams()

    return(
        <div className={"update-Activity"}>
            {id&& <AddActivityUpdate updateActivityEmissions={updateActivityEmissions} tripId={id}/>}
        </div>
    )
}