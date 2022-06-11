import {Trip} from "../model/Trip";
import axios from "axios";
import {TripDto} from "../model/TripDto";

export const getAllTrips: (token?: string) => Promise<Trip[]> = (token) => {
    return axios.get(`/api/trips`, token
        ? {headers: {
                "Authorization": token,
            }}
        : {})
        .then(response => response.data);
}

export const postTrip: (newTrip: TripDto, token?: string) => Promise<Trip> = (newTrip, token) => {
    return axios.post(`/api/trips`, newTrip, token
        ? {headers: {
                "Authorization": token,
            }}
        : {})
        .then(response => response.data)
        .then(response => response.data);
}

export const getTripBy: (id: string, token?: string) => Promise<Trip> = (id, token) => {
    return axios.get(`/api/trips/${id}`, token
        ? {headers: {
                "Authorization": token,
            }}
        : {})
        .then(response => response.data)

}

export function deleteTripById(id: string, token?: string) {
    return axios.delete(`/api/trips/${id}`, token
        ? {headers: {
                "Authorization": token,
            }}
        : {})
}

export const putTrip: (editedTrip: Trip, token?: string) => Promise<Trip> = (editedTrip,token?: string) => {
    return axios.put(`/api/trips/` + editedTrip.id, editedTrip, token
        ? {headers: {
                "Authorization": token,
            }}
        : {})
        .then(response => response.data)
}
