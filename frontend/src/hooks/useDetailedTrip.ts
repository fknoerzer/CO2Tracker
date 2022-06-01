import {useState} from "react";
import {Trip} from "../model/Trip";
import {getTripBy} from "../service/api-service";
import {toast} from "react-toastify";

export default function useDetailedTrip() {
    const [detailedTrip, setDetailedTrip] = useState<Trip>()

    const getTripById = (id: string) => {
        getTripBy(id)
            .then(data => setDetailedTrip(data))
            .catch((error) => toast.error(error))
    }

    return {detailedTrip, getTripById, setDetailedTrip}

}