package de.neuefische.backend.calculations;

import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.*;
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

        return switch (tripDto.getTransportation().getTypeOfTransport()) {
            case "Airplane" -> tripDto.getTransportation().getDistance() * 0.4;
            case "Car" -> (tripDto.getTransportation().getDistance() * 0.12);
            case "Camper" -> (tripDto.getTransportation().getDistance() * 0.2);
            case "Train" -> (tripDto.getTransportation().getDistance() * 0.14);
            case "Bus" -> (tripDto.getTransportation().getDistance() * 0.08);
            case "Motorbike" -> (tripDto.getTransportation().getDistance() * 0.1);
            case "Ferry" -> (tripDto.getTransportation().getDistance() * 0.35);
            default -> 0;
        };
    }

    public static double getAccommodationEmissions(TripDto tripDto) {

        return switch (tripDto.getAccommodation().getTypeOfAccommodation()) {
            case "Hotel" -> (getNumberOfNights(tripDto) * 114.0);
            case "House" -> (getNumberOfNights(tripDto) * 150.0);
            case "Apartment" -> (getNumberOfNights(tripDto) * 120.0);
            case "Youth Hostel" -> (getNumberOfNights(tripDto) * 80.0);
            case "Camping Site" -> (getNumberOfNights(tripDto) * 20.0);
            default -> (getNumberOfNights(tripDto) * 490.0);
        };
    }

    public static double getFoodEmissions(TripDto tripDto) {

        return switch (tripDto.getFood().getTypeOfDiet()) {
            case "Much Meat" -> (getNumberOfNights(tripDto) * 9.0);
            case "Some Meat" -> (getNumberOfNights(tripDto) * 6.0);
            case "Rarely Meat" -> (getNumberOfNights(tripDto) * 5.0);
            case "Vegetarian" -> (getNumberOfNights(tripDto) * 4.0);
            default -> (getNumberOfNights(tripDto) * 3.0);
        };
    }

    public static double getShoppingEmissions(TripDto tripDto) {
        return (tripDto.getShopping().getNumberOfClothingItems() * 3 + tripDto.getShopping().getNumberOfElectronicItems() * 50 + tripDto.getShopping().getNumberOfSouvenirItems() * 5 + tripDto.getShopping().getCustomShoppingItemEmission() * tripDto.getShopping().getAmountOfCustomShoppingItem());
    }

    public static double getActivitiesEmissions(TripDto tripDto) {

        return (tripDto.getActivity().getAmountOfBeautyDays() * 16 + tripDto.getActivity().getAmountOfSkiingDays() * 20.0 + tripDto.getActivity().getAmountOfGolfRounds() * 10.0 + tripDto.getActivity().getCustomActivityItemEmission() * tripDto.getActivity().getAmountOfCustomActivityItem());
    }

    public static double getAllEmissions(TripDto tripDto) {
        return (getTransportationEmissions(tripDto) + getAccommodationEmissions(tripDto) + getFoodEmissions(tripDto) + getShoppingEmissions(tripDto) + getActivitiesEmissions(tripDto));
    }

    public static Trip transferDto(TripDto tripDto) {

        Transportation transportation = new Transportation();
        transportation.setDistance(tripDto.getTransportation().getDistance());
        transportation.setTypeOfTransport(tripDto.getTransportation().getTypeOfTransport());

        Accommodation accommodation = new Accommodation();
        accommodation.setTypeOfAccommodation(tripDto.getAccommodation().getTypeOfAccommodation());

        Food food = new Food();
        food.setTypeOfDiet(tripDto.getFood().getTypeOfDiet());

        Shopping shopping = new Shopping();
        shopping.setNumberOfClothingItems(tripDto.getShopping().getNumberOfClothingItems());
        shopping.setNumberOfElectronicItems(tripDto.getShopping().getNumberOfElectronicItems());
        shopping.setNumberOfSouvenirItems(tripDto.getShopping().getNumberOfSouvenirItems());
        shopping.setCustomShoppingItem(tripDto.getShopping().getCustomShoppingItem());
        shopping.setCustomShoppingItemEmission(tripDto.getShopping().getCustomShoppingItemEmission());
        shopping.setCustomShoppingItemEmission(tripDto.getShopping().getCustomShoppingItemEmission());
        shopping.setAmountOfCustomShoppingItem(tripDto.getShopping().getAmountOfCustomShoppingItem());

        Activity activity = new Activity();
        activity.setAmountOfGolfRounds(tripDto.getActivity().getAmountOfGolfRounds());
        activity.setAmountOfSkiingDays(tripDto.getActivity().getAmountOfSkiingDays());
        activity.setAmountOfBeautyDays(tripDto.getActivity().getAmountOfBeautyDays());
        activity.setCustomActivityItem(tripDto.getActivity().getCustomActivityItem());
        activity.setCustomActivityItemEmission(tripDto.getActivity().getCustomActivityItemEmission());

        CalculatedEmissions calculatedEmissions = new CalculatedEmissions();
        calculatedEmissions.setTransportationEmissions(getTransportationEmissions(tripDto));
        calculatedEmissions.setAccommodationEmissions(getAccommodationEmissions(tripDto));
        calculatedEmissions.setFoodEmissions(getFoodEmissions(tripDto));
        calculatedEmissions.setShoppingEmissions(getShoppingEmissions(tripDto));
        calculatedEmissions.setActivityEmissions(getActivitiesEmissions(tripDto));
        calculatedEmissions.setTotalEmissions(getAllEmissions(tripDto));

        Trip trip = new Trip();
        trip.setTitle(tripDto.getTitle());
        trip.setYear(getYearOfTrip(tripDto));
        trip.setDestinationCountry(tripDto.getDestinationCountry());
        trip.setTravellerAmount(tripDto.getTravellerAmount());
        trip.setDateOfDeparture(tripDto.getDateOfDeparture());
        trip.setDateOfReturning(tripDto.getDateOfReturning());
        trip.setNumberOfNights(getNumberOfNights(tripDto));
        trip.setPersonalBudget(tripDto.getPersonalBudget());

        trip.setTransportation(transportation);
        trip.setAccommodation(accommodation);
        trip.setFood(food);
        trip.setShopping(shopping);
        trip.setActivity(activity);
        trip.setCalculatedEmissions(calculatedEmissions);
        return trip;
    }
}