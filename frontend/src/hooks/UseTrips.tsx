import {useEffect, useState} from "react";
import {Trip} from "../model/Trip";
import {getAllTrips, postTrip} from "../service/api-service";
import {toast} from "react-toastify";

export default function useTrips() {
    const [trips, setTrips] = useState<Trip[]>([]);

    useEffect(() => {
        getAllTrips()
            .then((trips) => setTrips(trips))
            .catch(() => toast.error("Connection failed. Please try again."));
    }, []);

    const addNewTrip = (newTrip: Omit<Trip,"id">) => {
        postTrip(newTrip)
            .then(addedTrip => setTrips([...trips, addedTrip]))
            .then(() => {toast.success("Trip was added")})
            .catch((exception) => toast.error(exception + "Connection failed! Please try again later."))
    }

    return {trips,addNewTrip}
}