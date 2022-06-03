import {Routes,Route, useNavigate, useParams} from "react-router-dom";
import useDetailedTrip from "../hooks/useDetailedTrip";
import React, {useEffect, useState} from "react";
import {Trip} from "../model/Trip";
import EditTripDetails from "../components/DetailsComponents/EditTripDetails";
import ShowTripDetails from "../components/DetailsComponents/ShowTripDetails";
import UpdateTransportationPage from "./UpdateTransportationPage";
import {
    updateAccommodationEmissions, updateActivityEmissions,
    updateFoodEmissions,
    updateShoppingEmissions,
    updateTransportEmissions
} from "../service/api-service";
import UpdateAccommodationPage from "./UpdateAccommodationPage";
import UpdateFoodPage from "./UpdateFoodPage";
import UpdateShoppingPage from "./UpdateShoppingPage";
import UpdateActivityPage from "./UpdateActivityPage";

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
        <Routes>
            <Route path="/update/transportation/"
                   element={<UpdateTransportationPage trip={detailedTrip} updateTransportEmissions={updateTransportEmissions}/>}/>
            <Route path="/update/accommodation/"
                   element={<UpdateAccommodationPage updateAccommodationEmissions={updateAccommodationEmissions}/>}/>
            <Route path="/update/food/"
                   element={<UpdateFoodPage updateFoodEmissions={updateFoodEmissions}/>}/>
            <Route path="/update/shopping/"
                   element={<UpdateShoppingPage updateShoppingEmissions={updateShoppingEmissions}/>}/>
            <Route path="/update/activity/"
                   element={<UpdateActivityPage updateActivityEmissions={updateActivityEmissions}/>}/>
            <Route index element={<div className={"trip-details-page"}>
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
                </div>}/>
        </Routes>

    )
}
