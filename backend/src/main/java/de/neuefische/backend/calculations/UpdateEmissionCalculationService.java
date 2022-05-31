package de.neuefische.backend.calculations;

import de.neuefische.backend.dto.*;
import de.neuefische.backend.model.Trip;

public class UpdateEmissionCalculationService {

    private UpdateEmissionCalculationService() {
    }

    public static Trip updateTransportEmissions(Trip trip, TripUpdateTransportEmissionsDto tripUpdateTransportEmissionsDto) {
        double newTransportEmissions =
                switch (tripUpdateTransportEmissionsDto.getTypeOfTransport()) {
                    case "Airplane" -> tripUpdateTransportEmissionsDto.getDistance() * 0.4;
                    case "Car" -> (tripUpdateTransportEmissionsDto.getDistance() * 0.12);
                    case "Camper" -> (tripUpdateTransportEmissionsDto.getDistance() * 0.2);
                    case "Train" -> (tripUpdateTransportEmissionsDto.getDistance() * 0.14);
                    case "Bus" -> (tripUpdateTransportEmissionsDto.getDistance() * 0.08);
                    case "Motorbike" -> (tripUpdateTransportEmissionsDto.getDistance() * 0.1);
                    case "Ferry" -> (tripUpdateTransportEmissionsDto.getDistance() * 0.35);
                    default -> 0;
                };
        trip.getCalculatedEmissions().setTransportationEmissions(trip.getCalculatedEmissions().getTransportationEmissions()
                + newTransportEmissions);
        updateAllCalculatedEmissions(trip);
        return trip;
    }

    public static Trip updateAccommodationEmissions(Trip trip, TripUpdateAccommodationEmissionsDto tripUpdateAccommodationEmissionsDto) {
        double newAccommodationEmissions =
                switch (tripUpdateAccommodationEmissionsDto.getTypeOfAccommodation()) {
                    case "Hotel" -> (tripUpdateAccommodationEmissionsDto.getAdditionalNights() * 114.0);
                    case "House" -> (tripUpdateAccommodationEmissionsDto.getAdditionalNights() * 150.0);
                    case "Apartment" -> (tripUpdateAccommodationEmissionsDto.getAdditionalNights() * 120.0);
                    case "Youth Hostel" -> (tripUpdateAccommodationEmissionsDto.getAdditionalNights() * 80.0);
                    case "Camping Site" -> (tripUpdateAccommodationEmissionsDto.getAdditionalNights() * 20.0);
                    default -> (tripUpdateAccommodationEmissionsDto.getAdditionalNights() * 490.0);
                };
        trip.getCalculatedEmissions().setAccommodationEmissions(trip.getCalculatedEmissions().getAccommodationEmissions()
                + newAccommodationEmissions);
        updateAllCalculatedEmissions(trip);
        return trip;
    }

    public static Trip updateFoodEmissions(Trip trip, TripUpdateFoodEmissionsDto tripUpdateFoodEmissionsDto) {
        double newFoodEmissions =
                switch (tripUpdateFoodEmissionsDto.getTypeOfDiet()) {
                    case "Much Meat" -> (tripUpdateFoodEmissionsDto.getAdditionalDays() * 3.3);
                    case "Some Meat" -> (tripUpdateFoodEmissionsDto.getAdditionalDays() * 2.5);
                    case "Rarely Meat" -> (tripUpdateFoodEmissionsDto.getAdditionalDays() * 2.0);
                    case "Vegetarian" -> (tripUpdateFoodEmissionsDto.getAdditionalDays() * 1.9);
                    default -> (tripUpdateFoodEmissionsDto.getAdditionalDays() * 1.5);
                };
        trip.getCalculatedEmissions().setFoodEmissions(trip.getCalculatedEmissions().getFoodEmissions()
                + newFoodEmissions);
        updateAllCalculatedEmissions(trip);
        return trip;
    }

    public static Trip updateActivityEmissions(Trip trip, TripUpdateActivityEmissionsDto tripUpdateActivityEmissionsDto) {
        double newActivityEmissions =
                (tripUpdateActivityEmissionsDto.getAmountOfBeautyDays() * 16 +
                        tripUpdateActivityEmissionsDto.getAmountOfSkiingDays() * 20.0 +
                        tripUpdateActivityEmissionsDto.getAmountOfGolfRounds() * 10.0 +
                        tripUpdateActivityEmissionsDto.getCustomActivityItemEmission() * tripUpdateActivityEmissionsDto.getAmountOfCustomActivityItem());
        trip.getCalculatedEmissions().setActivityEmissions(trip.getCalculatedEmissions().getActivityEmissions()
                + newActivityEmissions);
        updateAllCalculatedEmissions(trip);
        return trip;
    }

    public static Trip updateShoppingEmissions(Trip trip, TripUpdateShoppingEmissionsDto tripUpdateShoppingEmissionsDto) {
        double newShoppingEmissions =
                (tripUpdateShoppingEmissionsDto.getNumberOfClothingItems() * 3 +
                        tripUpdateShoppingEmissionsDto.getNumberOfElectronicItems() * 50 +
                        tripUpdateShoppingEmissionsDto.getNumberOfSouvenirItems() * 5 +
                        tripUpdateShoppingEmissionsDto.getCustomShoppingItemEmission() * tripUpdateShoppingEmissionsDto.getAmountOfCustomShoppingItem());
        trip.getCalculatedEmissions()
                .setShoppingEmissions(trip.getCalculatedEmissions().getShoppingEmissions()
                        + newShoppingEmissions);
        updateAllCalculatedEmissions(trip);
        return trip;
    }

    public static void updateAllCalculatedEmissions(Trip trip) {
        trip.getCalculatedEmissions().setTotalEmissions(
                trip.getCalculatedEmissions().getFoodEmissions() +
                        trip.getCalculatedEmissions().getAccommodationEmissions() +
                        trip.getCalculatedEmissions().getActivityEmissions() +
                        trip.getCalculatedEmissions().getTransportationEmissions() +
                        trip.getCalculatedEmissions().getShoppingEmissions());
    }
}