import {Trip} from "../../model/Trip";
import TripDetails from "./TripDetails"
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {deleteTripById} from "../../service/api-service";
import {AuthContext} from "../../context/AuthProvider";

type ShowTripDetailsProps = {
    trip: Trip
}

export default function ShowTripDetails({trip}: ShowTripDetailsProps) {
    const navigate = useNavigate()
    const {token} = useContext(AuthContext)

    return (
        <div className={"show-trip-details"}>
            <TripDetails trip={trip}/>
            <div className={"edit-delete-buttons"}>
                {trip &&
                    <div>
                        <button onClick={() => {
                            deleteTripById(trip.id, token);
                            navigate('/');
                        }}> Delete
                        </button>
                        <button onClick={() => {
                            navigate('../edit');
                        }}> Edit
                        </button>
                    </div>}
            </div>
        </div>)
}