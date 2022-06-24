import {Trip} from "../../model/Trip";
import TripDetails from "./TripDetails"
import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {deleteTripById} from "../../service/api-service";
import {AuthContext} from "../../context/AuthProvider";
import {RiChatDeleteLine} from "react-icons/ri";
import {BiMessageEdit} from "react-icons/bi";

type ShowTripDetailsProps = {
    trip: Trip
}

export default function ShowTripDetails({trip}: ShowTripDetailsProps) {
    const navigate = useNavigate()
    const {token} = useContext(AuthContext)

    return (
        <div className={"show-trip-details"}>
            <TripDetails trip={trip}/>
            <div className={"button-wrapper"}>
                {trip &&
                    <div>
                        <button className={"delete-button"} onClick={() => {
                            deleteTripById(trip.id, token);
                            navigate('/');
                        }}> Delete <RiChatDeleteLine/>
                        </button>

                        <button className={"edit-button"} onClick={() => {
                            navigate('../edit');
                        }}> Edit <BiMessageEdit/>
                        </button>
                    </div>}
            </div>
        </div>)
}