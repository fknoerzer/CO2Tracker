import {useEffect, useState} from "react";
import {Trip} from "../model/Trip";
import {deleteTripById, getAllTrips, postTrip, putTrip} from "../service/api-service";
import {toast} from "react-toastify";
import {TripDto} from "../model/TripDto";

export default function useTrips() {
    const [trips, setTrips] = useState<Trip[]>([]);

    useEffect(() => {
        getAllTrips()
            .then((trips) => setTrips(trips))
            .catch(() => toast.error("Connection failed. Please try again."));
    }, []);

    const addNewTrip = (newTrip: TripDto) => {
        postTrip(newTrip)
            .then(addedTrip => setTrips([...trips, addedTrip]))
            .then(() => {
                toast.success("Trip was added")
            })
            .catch((exception) => toast.error(exception + "Connection failed! Please try again later."))
    }

    const deleteTrip = (id: string) => {
        deleteTripById(id)
            .then(() => setTrips(trips.filter(trip => trip.id !== id)))
            .then(() => toast.success("Trip was successfully deleted."))
            .catch(() => toast.error("Error while deleting Trip."))
    }

    const editTrip = (tripToEdited: Trip) => {
        return putTrip(tripToEdited)
            .then(editedTrip => {
                setTrips(trips.map(trip => trip.id === editedTrip.id? editedTrip: trip))
                toast.success("Trip: " + editedTrip.title + "edited")
                return editedTrip })
            .catch(() => {toast.error("Connection failed! Please try again later.")
            })
    }
    return {trips, addNewTrip, deleteTrip, editTrip}
}
