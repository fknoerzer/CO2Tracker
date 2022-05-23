package de.neuefische.backend.calculations;

import de.neuefische.backend.dto.TripDto;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;


public class EmissionCalculationService {

    private EmissionCalculationService() {
    }

    public static long getNumberOfNights(TripDto tripDto) {
        LocalDate departureDate = tripDto.getDateOfDeparture();
        LocalDate returningDate = tripDto.getDateOfReturning();

        return ChronoUnit.DAYS.between(departureDate, returningDate);
    }

    public static long getYearOfTrip(TripDto tripDto) {
        LocalDate departureDate = tripDto.getDateOfDeparture();
        return departureDate.getYear();
    }


    public static double getTransportationEmissions(TripDto tripDto) {

        return switch (tripDto.getTypeOfTransport()) {
            case "Airplane" -> tripDto.getDistance() * 0.4;
            case "Car" -> (tripDto.getDistance() * 0.12);
            case "Camper" -> (tripDto.getDistance() * 0.2);
            case "Train" -> (tripDto.getDistance() * 0.14);
            case "Bus" -> (tripDto.getDistance() * 0.08);
            case "Motorbike" -> (tripDto.getDistance() * 0.1);
            default -> 0;
        };
    }

    public static double getAccommodationEmissions(TripDto tripDto) {

        return switch (tripDto.getTypeOfAccommodation()) {
            case "Hotel" -> (getNumberOfNights(tripDto) * 114.0);
            case "House" -> (getNumberOfNights(tripDto) * 150.0);
            case "Appartment" -> (getNumberOfNights(tripDto) * 120.0);
            case "Youth Hostel" -> (getNumberOfNights(tripDto) * 80.0);
            case "Camping Site" -> (getNumberOfNights(tripDto) * 20.0);
            default -> (getNumberOfNights(tripDto) * 490.0);
        };
    }

    public static double getFoodEmissions(TripDto tripDto) {

        return switch (tripDto.getTypeOfAccommodation()) {
            case "MuchMeat" -> (getNumberOfNights(tripDto) * 9.04);
            case "SomeMeat" -> (getNumberOfNights(tripDto) * 6.85);
            case "RarelyMeat" -> (getNumberOfNights(tripDto) * 5.21);
            case "Vegetarian" -> (getNumberOfNights(tripDto) * 4.66);
            default -> (getNumberOfNights(tripDto) * 4.11);
        };
    }

    public static double getShoppingEmissions(TripDto tripDto) {
        return (tripDto.getNumberOfClothingItems() * 3 + tripDto.getNumberOfElectronicItems() * 50 + tripDto.getNumberOfSouvenirItems() * 5 + tripDto.getCustomShoppingItemEmission());
    }

    public static double getActivitiesEmissions(TripDto tripDto) {

        return (tripDto.getAmountOfBeautyDays() * 16.16 + tripDto.getAmountOfSkiingDays() * 20.0 + tripDto.getAmountOfGolfRounds() * 10.0 + tripDto.getCustomActivityEmission());
    }

    public static double getAllEmissions(TripDto tripDto) {
        return (getTransportationEmissions(tripDto) + getAccommodationEmissions(tripDto) + getFoodEmissions(tripDto) + getShoppingEmissions(tripDto) + getActivitiesEmissions(tripDto));
    }
}

