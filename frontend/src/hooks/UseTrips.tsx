import {useContext, useEffect, useState} from "react";
import {Trip} from "../model/Trip";
import {deleteTripById, getAllTrips, postTrip, putTrip} from "../service/api-service";
import {toast} from "react-toastify";
import {TripDto} from "../model/TripDto";
import {AuthContext} from "../context/AuthProvider";

export default function useTrips() {
    const [trips, setTrips] = useState<Trip[]>([]);
    const {token} = useContext(AuthContext);

    useEffect(() => {
        getAllTrips(token)
            .then((allTrips) => setTrips(allTrips))
            .catch(() => toast.error("Connection failed. Please try again."));
    }, []);

    const addNewTrip = (newTrip: TripDto) => {
        postTrip(newTrip, token)
            .then(addedTrip => setTrips([...trips, addedTrip]))
            .then(() => {
                toast.success("Trip was added")
            })
            .catch((exception) => toast.error(exception + "Connection failed! Please try again later."))
    }

    const deleteTrip = (id: string) => {
        deleteTripById(id, token)
            .then(() => setTrips(trips.filter(trip => trip.id !== id)))
            .then(() => toast.success("Trip was successfully deleted."))
            .catch(() => toast.error("Error while deleting Trip."))
    }

    const editTrip = (tripToEdited: Trip) => {
        return putTrip(tripToEdited, token)
            .then(editedTrip => {
                setTrips(trips.map(trip => trip.id === editedTrip.id ? editedTrip : trip))
                toast.success("Trip: " + editedTrip.title + "edited")
                return editedTrip
            })
            .catch(() => {
                toast.error("Connection failed! Please try again later.")
            })
    }
    return {trips, addNewTrip, deleteTrip, editTrip}
}