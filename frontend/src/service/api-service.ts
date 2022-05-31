import {Trip} from "../model/Trip";
import axios from "axios";
import {TripDto} from "../model/TripDto";
import {TripUpdateTransportEmissionsDto} from "../model/updateDtos/TripUpdateTransportEmissionsDto";
import {TripUpdateFoodEmissionsDto} from "../model/updateDtos/TripUpdateFoodEmissionsDto";
import {TripUpdateAccommodationEmissionsDto} from "../model/updateDtos/TripUpdateAccommodationEmissionsDto";
import {TripUpdateShoppingEmissionsDto} from "../model/updateDtos/TripUpdateShoppingEmissionsDto";
import {TripUpdateActivityEmissionsDto} from "../model/updateDtos/TripUpdateActivityEmissionsDto";

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

export function updateTransportEmissions(id:string, tripUpdateTransportEmissionsDto: TripUpdateTransportEmissionsDto) {
    return axios.patch(`/api/trips/update/transport/${id}`, tripUpdateTransportEmissionsDto)
        .then(response => response.data)
}


export function updateFoodEmissions(id:string, tripUpdateFoodEmissionsDto: TripUpdateFoodEmissionsDto) {
    return axios.patch(`/api/trips/update/food/${id}`,tripUpdateFoodEmissionsDto)
        .then(response => response.data)
}

export function updateAccommodationEmissions(id:string, tripUpdateAccommodationEmissionsDto: TripUpdateAccommodationEmissionsDto) {
    return axios.patch(`/api/trips/update/accommodation/${id}`,tripUpdateAccommodationEmissionsDto)
        .then(response => response.data)
}

export function updateShoppingEmissions(id:string, tripUpdateShoppingEmissionsDto: TripUpdateShoppingEmissionsDto) {
    return axios.patch(`/api/trips/update/shopping/${id}`,tripUpdateShoppingEmissionsDto)
        .then(response => response.data)
}

export function updateActivityEmissions(id:string, tripUpdateActivityEmissionsDto: TripUpdateActivityEmissionsDto) {
    return axios.patch(`/api/trips/update/activity/${id}`, tripUpdateActivityEmissionsDto)
        .then(response => response.data)
}