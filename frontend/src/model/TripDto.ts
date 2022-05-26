import {Accommodation, Activity, Food, Shopping, Transportation} from "./Trip";

export type TripDto = {

    title: string;
    destiniationCountry: string;
    travellerAmount: number;
    dateOfDeparture: string;
    dateOfReturning: string;
    personalBudget: number;
    transportation: Transportation;
    accommodation: Accommodation;
    food: Food;
    shopping: Shopping;
    activity: Activity
}