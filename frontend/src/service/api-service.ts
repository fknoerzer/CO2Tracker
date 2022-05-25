import {Trip} from "../model/Trip";
import axios from "axios";
import {TripDto} from "../model/TripDto";

export const getAllTrips: () => Promise<Trip[]> = () => {
    return axios.get("/api/trips")
        .then(response => response.data);
}

export const postTrip: (newTrip: TripDto) => Promise<Trip> = (newTrip) => {
    return axios.post("/api/trips", newTrip)
        .then(response => response.data);
}
