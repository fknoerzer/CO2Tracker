package de.neuefische.backend.calculations;

import de.neuefische.backend.model.*;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class EditEmissionsCalculationService {

    private EditEmissionsCalculationService() {
    }

    public static long getNumberOfNights(Trip editedTrip) {
        LocalDate departureDate = editedTrip.getDateOfDeparture();
        LocalDate returningDate = editedTrip.getDateOfReturning();

        return ChronoUnit.DAYS.between(departureDate, returningDate);
    }

    public static long getYearOfTrip(Trip editedTrip) {
        LocalDate departureDate = editedTrip.getDateOfDeparture();
        return departureDate.getYear();
    }


    public static double getTransportationEmissions(Trip editedTrip) {

        return switch (editedTrip.getTransportation().getTypeOfTransport()) {
            case "Airplane" -> editedTrip.getTransportation().getDistance() * 0.4;
            case "Car" -> (editedTrip.getTransportation().getDistance() * 0.12);
            case "Camper" -> (editedTrip.getTransportation().getDistance() * 0.2);
            case "Train" -> (editedTrip.getTransportation().getDistance() * 0.14);
            case "Bus" -> (editedTrip.getTransportation().getDistance() * 0.08);
            case "Motorbike" -> (editedTrip.getTransportation().getDistance() * 0.1);
            case "Ferry" -> (editedTrip.getTransportation().getDistance() * 0.35);
            default -> 0;
        };
    }

    public static double getAccommodationEmissions(Trip editedTrip) {

        return switch (editedTrip.getAccommodation().getTypeOfAccommodation()) {
            case "Hotel" -> (getNumberOfNights(editedTrip) * 114.0);
            case "House" -> (getNumberOfNights(editedTrip) * 150.0);
            case "Apartment" -> (getNumberOfNights(editedTrip) * 120.0);
            case "Youth Hostel" -> (getNumberOfNights(editedTrip) * 80.0);
            case "Camping Site" -> (getNumberOfNights(editedTrip) * 20.0);
            default -> (getNumberOfNights(editedTrip) * 490.0);
        };
    }

    public static double getFoodEmissions(Trip editedTrip) {

        return switch (editedTrip.getFood().getTypeOfDiet()) {
            case "Much Meat" -> (getNumberOfNights(editedTrip) * 9.0);
            case "Some Meat" -> (getNumberOfNights(editedTrip) * 6.0);
            case "Rarely Meat" -> (getNumberOfNights(editedTrip) * 5.0);
            case "Vegetarian" -> (getNumberOfNights(editedTrip) * 4.0);
            default -> (getNumberOfNights(editedTrip) * 3.0);
        };
    }

    public static double getShoppingEmissions(Trip editedTrip) {
        return (editedTrip.getShopping().getNumberOfClothingItems() * 3 +
                editedTrip.getShopping().getNumberOfElectronicItems() * 50 +
                editedTrip.getShopping().getNumberOfSouvenirItems() * 5 +
                editedTrip.getShopping().getCustomShoppingItemEmission() * editedTrip.getShopping().getAmountOfCustomShoppingItem());
    }

    public static double getActivitiesEmissions(Trip editedTrip) {

        return (editedTrip.getActivity().getAmountOfBeautyDays() * 16 +
                editedTrip.getActivity().getAmountOfSkiingDays() * 20.0 +
                editedTrip.getActivity().getAmountOfGolfRounds() * 10.0 +
                editedTrip.getActivity().getCustomActivityItemEmission() * editedTrip.getActivity().getAmountOfCustomActivityItem());
    }

    public static double getAllEmissions(Trip editedTrip) {
        return (getTransportationEmissions(editedTrip) +
                getAccommodationEmissions(editedTrip) +
                getFoodEmissions(editedTrip) +
                getShoppingEmissions(editedTrip) +
                getActivitiesEmissions(editedTrip));
    }

    public static Trip transferEditedTrip(Trip editedTrip) {

        Transportation transportation = new Transportation();
        transportation.setDistance(editedTrip.getTransportation().getDistance());
        transportation.setTypeOfTransport(editedTrip.getTransportation().getTypeOfTransport());

        Accommodation accommodation = new Accommodation();
        accommodation.setTypeOfAccommodation(editedTrip.getAccommodation().getTypeOfAccommodation());

        Food food = new Food();
        food.setTypeOfDiet(editedTrip.getFood().getTypeOfDiet());

        Shopping shopping = new Shopping();
        shopping.setNumberOfClothingItems(editedTrip.getShopping().getNumberOfClothingItems());
        shopping.setNumberOfElectronicItems(editedTrip.getShopping().getNumberOfElectronicItems());
        shopping.setNumberOfSouvenirItems(editedTrip.getShopping().getNumberOfSouvenirItems());
        shopping.setCustomShoppingItem(editedTrip.getShopping().getCustomShoppingItem());
        shopping.setCustomShoppingItemEmission(editedTrip.getShopping().getCustomShoppingItemEmission());
        shopping.setCustomShoppingItemEmission(editedTrip.getShopping().getCustomShoppingItemEmission());
        shopping.setAmountOfCustomShoppingItem(editedTrip.getShopping().getAmountOfCustomShoppingItem());

        Activity activity = new Activity();
        activity.setAmountOfGolfRounds(editedTrip.getActivity().getAmountOfGolfRounds());
        activity.setAmountOfSkiingDays(editedTrip.getActivity().getAmountOfSkiingDays());
        activity.setAmountOfBeautyDays(editedTrip.getActivity().getAmountOfBeautyDays());
        activity.setCustomActivityItem(editedTrip.getActivity().getCustomActivityItem());
        activity.setCustomActivityItemEmission(editedTrip.getActivity().getCustomActivityItemEmission());

        CalculatedEmissions calculatedEmissions = new CalculatedEmissions();
        calculatedEmissions.setTransportationEmissions(getTransportationEmissions(editedTrip));
        calculatedEmissions.setAccommodationEmissions(getAccommodationEmissions(editedTrip));
        calculatedEmissions.setFoodEmissions(getFoodEmissions(editedTrip));
        calculatedEmissions.setShoppingEmissions(getShoppingEmissions(editedTrip));
        calculatedEmissions.setActivityEmissions(getActivitiesEmissions(editedTrip));
        calculatedEmissions.setTotalEmissions(getAllEmissions(editedTrip));

        Trip newGeneratedTrip = new Trip();
        newGeneratedTrip.setTitle(editedTrip.getTitle());
        newGeneratedTrip.setYear(getYearOfTrip(editedTrip));
        newGeneratedTrip.setDestinationCountry(editedTrip.getDestinationCountry());
        newGeneratedTrip.setTravellerAmount(editedTrip.getTravellerAmount());
        newGeneratedTrip.setDateOfDeparture(editedTrip.getDateOfDeparture());
        newGeneratedTrip.setDateOfReturning(editedTrip.getDateOfReturning());
        newGeneratedTrip.setNumberOfNights(getNumberOfNights(editedTrip));
        newGeneratedTrip.setPersonalBudget(editedTrip.getPersonalBudget());

        newGeneratedTrip.setId(editedTrip.getId());

        newGeneratedTrip.setTransportation(transportation);
        newGeneratedTrip.setAccommodation(accommodation);
        newGeneratedTrip.setFood(food);
        newGeneratedTrip.setShopping(shopping);
        newGeneratedTrip.setActivity(activity);
        newGeneratedTrip.setCalculatedEmissions(calculatedEmissions);
        return newGeneratedTrip;
    }
}