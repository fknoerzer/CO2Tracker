export type tripUpdateDto = {

    title: string;
    year: number;
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

export type Transportation = {
    additionalDistance: number;
    additionalTypeOfTransport: string;

}

export type Accommodation = {
    additionalTypeOfAccommodation: string;
    additionalNights: number;

}

export type Food = {
    additionalTypeOfDiet: string;
    additionalDays: number;
}

export type Shopping = {
    additionalAmountOfClothingItems: number;
    additionalAmountOfElectronicItems: number;
    additionalAmountOfSouvenirItems: number;
    additionalCustomShoppingItem: string;
    additionalCustomShoppingItemEmission: number;
    additionalAmountOfCustomShoppingItem: number;
}

export type Activity = {
    additionalAmountOfGolfRounds: number;
    additionalAmountOfSkiingDays: number;
    additionalAmountOfBeautyDays: number;
    additionalCustomActivityItem: string;
    additionalCustomActivityItemEmission: number;
    additionalAmountOfCustomActivityItem: number;
}

