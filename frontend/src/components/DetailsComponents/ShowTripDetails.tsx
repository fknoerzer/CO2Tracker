import {Trip} from "../../model/Trip";
import TripDetails from "../TripDetails"
import React from "react";
import {useNavigate} from "react-router-dom";
import {deleteTripById} from "../../service/api-service";

type ShowTripDetailsProps = {
    trip: Trip
}

export default function ShowTripDetails({trip}: ShowTripDetailsProps) {
    const navigate = useNavigate()

    return (
        <div className={"show-trip-details"}>
            <TripDetails trip={trip}/>
            <div className={"edit-delete-buttons"}>
                {trip &&
                    <div>
                        <button onClick={() => {
                            deleteTripById(trip.id);
                            navigate('/');
                        }}> Delete trip
                        </button>
                        <button onClick={() => {
                            navigate('../edit');
                        }}> Edit trip
                        </button>
                    </div>}
            </div>
        </div>)
}