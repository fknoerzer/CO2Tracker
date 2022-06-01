import {TripUpdateTransportEmissionsDto} from "../model/updateDtos/TripUpdateTransportEmissionsDto";
import AddTransportationUpdate from "../components/AddUpdate/AddTransportationUpdate";
import {useParams} from "react-router-dom";

type UpdateTransportationPageProps = {
    updateTransportEmissions: (id:string, tripUpdateTransportEmissionsDto: TripUpdateTransportEmissionsDto) => void

}

export default function UpdateTransportationPage({updateTransportEmissions}:UpdateTransportationPageProps) {
    const {id} = useParams()

    return(
        <div className={"update-transport"}>
            {id&& <AddTransportationUpdate updateTransportEmissions={updateTransportEmissions} tripId={id}/>}
        </div>
    )
}