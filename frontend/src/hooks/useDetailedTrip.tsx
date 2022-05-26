import {useState} from "react";
import {Trip} from "../model/Trip";
import {toast} from "react-toastify";
import {getTripById} from "../service/api-service";


export default function useDetailedTrip() {
    const [detailedTrip, setDetailedTrip] = useState<Trip>()

    const getDetailedTripById = (id: string) => {
        getTripById(id)
            .then(data => setDetailedTrip(data))
            .catch((error) => toast.error(error))
    }

    return {detailedTrip, setDetailedTrip, getTripById}
}