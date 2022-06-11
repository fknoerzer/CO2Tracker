import {useContext, useState} from "react";
import {Trip} from "../model/Trip";
import {getTripBy} from "../service/api-service";
import {toast} from "react-toastify";
import {AuthContext} from "../context/AuthProvider";

export default function useDetailedTrip() {
    const [detailedTrip, setDetailedTrip] = useState<Trip>()
    const {token} = useContext(AuthContext)

    const getTripById = (id: string) => {
        getTripBy(id, token)
            .then(data => setDetailedTrip(data))
            .catch((error) => toast.error(error))
    }

    return {detailedTrip, getTripById}
}