import {Accommodation, Activity, Food, Shopping, Transportation} from "./Trip";

export type TripDto = {

    title: string;
    destiniationCountry: string;
    travellerAmount: number;
    dateOfDeparture: string;
    dateOfReturning: string;
    personalBudget: number;
    transportations: Transportation[];
    accommodations: Accommodation[];
    foods: Food[];
    shoppings: Shopping[];
    activities: Activity[]
}