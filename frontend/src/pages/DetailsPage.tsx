import {useNavigate, useParams} from "react-router-dom";
import useDetailedTrip from "../hooks/useDetailedTrip";
import {useEffect, useState} from "react";
import {Trip} from "../model/Trip";
import EditTripDetails from "../components/DetailsComponents/EditTripDetails";
import ShowTripDetails from "../components/DetailsComponents/ShowTripDetails";

type DetailsPageProps = {
    deleteTripById: (id: string) => void
    editTrip: (editedTrip: Trip) => Promise<Trip>

}

export default function DetailsPage({deleteTripById, editTrip}: DetailsPageProps) {
    const navigate = useNavigate()
    const {id} = useParams()
    const {detailedTrip, getTripById, setDetailedTrip} = useDetailedTrip()
    const [editingEnabled, setEditingEnabled] = useState<boolean>(false);

    useEffect(() => {
        if (id) {
            getTripById(id)
        }
        // eslint-disable-next-line
    }, [id])

    const toggleEditing = () => {
        setEditingEnabled(!editingEnabled);
    }

    const editDetailedTrip: (editedTrip: Trip) => void = (editedTrip) => {
        editTrip(editedTrip)
            .then(() => {
                setDetailedTrip(editedTrip)
                toggleEditing()
            })

    }
    return (
        <div className={"trip-details-page"}>
            {detailedTrip &&
                <div>
                    {editingEnabled
                        ? <EditTripDetails tripItem={detailedTrip} editTrip={editDetailedTrip}/>
                        : <ShowTripDetails
                            item={detailedTrip}
                            toggleEditing={toggleEditing}/>
                    }
                </div>}
            <button onClick={() => navigate(`/`)}>Back</button>
            {detailedTrip &&
                <button onClick={() => {
                    deleteTripById(detailedTrip.id)
                    navigate('/')
                }}>Delete</button>
            }
        </div>
    )
}
