export type Trip = {

    id: string;
    title: string;
    year: number;
    destinationCountry: string;
    travellerAmount: number;
    dateOfDeparture: string;
    dateOfReturning: string;
    personalBudget: number;
    transportations: Transportation[];
    accommodations: Accommodation[];
    foods: Food[];
    shoppings: Shopping[];
    activities: Activity[];
    calculatedEmissions: CalculatedEmissions
}

export type Transportation = {
    distance: number;
    typeOfTransport: string;
}

export type Accommodation = {
    typeOfAccommodation: string;
}

export type Food = {
    typeOfDiet: string;
}

export type Shopping = {
    amountOfClothingItems: number;
    amountOfElectronicItems: number;
    amountOfSouvenirItems: number;
    customShoppingItem: string;
    customShoppingItemEmission: number;
    amountOfCustomShoppingItem: number;
}

export type Activity = {
    amountOfGolfRounds: number;
    amountOfSkiingDays: number;
    amountOfBeautyDays: number;
    customActivityItem: string;
    customActivityItemEmission: number;
    amountOfCustomActivityItem: number;
}

export type CalculatedEmissions = {
    activityEmissions: number;
    shoppingEmissions: number;
    foodEmissions: number;
    accommodationEmissions: number;
    transportationEmissions: number;
    totalEmissions: number;
}

