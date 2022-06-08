import {Trip} from "../model/Trip";
import axios from "axios";
import {TripDto} from "../model/TripDto";

export const getAllTrips: () => Promise<Trip[]> = () => {
    return axios.get(`/api/trips`)
        .then(response => response.data);
}

export const postTrip: (newTrip: TripDto) => Promise<Trip> = (newTrip) => {
    return axios.post(`/api/trips`, newTrip)
        .then(response => response.data);
}

export const getTripBy: (id: string) => Promise<Trip> = (id) => {
    return axios.get(`/api/trips/${id}`)
        .then(response => response.data)
}

export function deleteTripById (id:string) {
    return axios.delete(`/api/trips/${id}`)
}

export const putTrip: (editedTrip: Trip) => Promise<Trip> = (editedTrip)=> {
    return axios.put(`/api/trips/` + editedTrip.id, editedTrip)
        .then(response => response.data)
}
