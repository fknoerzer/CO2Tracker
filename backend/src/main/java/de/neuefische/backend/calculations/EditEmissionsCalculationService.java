package de.neuefische.backend.calculations;

import de.neuefische.backend.model.*;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

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

        return editedTrip.getTransportations().stream()
                .mapToDouble(transportation -> switch (transportation.getTypeOfTransport()) {
                    case "Airplane" -> (transportation.getDistance() * EmissionsData.airplane);
                    case "Car" -> (transportation.getDistance() * EmissionsData.car);
                    case "Camper" -> (transportation.getDistance() * EmissionsData.camper);
                    case "Train" -> (transportation.getDistance() * EmissionsData.train);
                    case "Bus" -> (transportation.getDistance() * EmissionsData.bus);
                    case "Motorbike" -> (transportation.getDistance() * EmissionsData.motorbike);
                    case "Ferry" -> (transportation.getDistance() * EmissionsData.ferry);
                    default -> EmissionsData.walking;
                }).sum();
    }

    public static double getAccommodationEmissions(Trip editedTrip) {

        return editedTrip.getAccommodations().stream()
                .mapToDouble(Accommodation -> switch (Accommodation.getTypeOfAccommodation()) {
                    case "Hotel" -> (getNumberOfNights(editedTrip) * EmissionsData.hotel);
                    case "House" -> (getNumberOfNights(editedTrip) * EmissionsData.house);
                    case "Apartment" -> (getNumberOfNights(editedTrip) * EmissionsData.apartment);
                    case "Youth Hostel" -> (getNumberOfNights(editedTrip) * EmissionsData.youthHostel);
                    case "Camping Site" -> (getNumberOfNights(editedTrip) * EmissionsData.campSite);
                    default -> (getNumberOfNights(editedTrip) * EmissionsData.cruiseShip);
                }).sum();
    }

    public static double getFoodEmissions(Trip editedTrip) {

        return editedTrip.getFoods().stream()
                .mapToDouble(Food -> switch (Food.getTypeOfDiet()) {
                    case "Much Meat" -> (getNumberOfNights(editedTrip) * EmissionsData.muchMeat);
                    case "Some Meat" -> (getNumberOfNights(editedTrip) * EmissionsData.someMeat);
                    case "Rarely Meat" -> (getNumberOfNights(editedTrip) * EmissionsData.rarelyMeat);
                    case "Vegetarian" -> (getNumberOfNights(editedTrip) * EmissionsData.vegetarian);
                    default -> (getNumberOfNights(editedTrip) * EmissionsData.vegan);
                }).sum();
    }

    public static double getShoppingEmissions(Trip editedTrip) {

        return editedTrip.getShoppings().stream().mapToDouble(shopping -> (
                shopping.getAmountOfClothingItems() * EmissionsData.clothing +
                        shopping.getAmountOfElectronicItems() * EmissionsData.electric +
                        shopping.getAmountOfSouvenirItems() * EmissionsData.souvenir +
                        shopping.getCustomShoppingItemEmission() * shopping.getAmountOfCustomShoppingItem())).sum();
    }

    public static double getActivitiesEmissions(Trip editedTrip) {
        return editedTrip.getActivities().stream().mapToDouble(activities -> (
                activities.getAmountOfBeautyDays() * EmissionsData.beautyDay +
                        activities.getAmountOfSkiingDays() * EmissionsData.skiingDay +
                        activities.getAmountOfGolfRounds() * EmissionsData.golfRounds +
                        activities.getCustomActivityItemEmission() * activities.getAmountOfCustomActivityItem())).sum();
    }

    public static double getAllEmissions(Trip editedTrip) {
        return (getTransportationEmissions(editedTrip) +
                getAccommodationEmissions(editedTrip) +
                getFoodEmissions(editedTrip) +
                getShoppingEmissions(editedTrip) +
                getActivitiesEmissions(editedTrip));
    }

    public static Trip transferEditTrip(Trip editedTrip) {
        List<Transportation> tripTransportations = editedTrip.getTransportations();
        List<Accommodation> tripAccommodations = editedTrip.getAccommodations();
        List<Food> tripFoods = editedTrip.getFoods();
        List<Shopping> tripShoppings = editedTrip.getShoppings();
        List<Activity> tripActivities = editedTrip.getActivities();

        CalculatedEmissions calculatedEmissions = CalculatedEmissions.builder()
                .transportationEmissions(getTransportationEmissions(editedTrip))
                .accommodationEmissions(getAccommodationEmissions(editedTrip))
                .foodEmissions(getFoodEmissions(editedTrip))
                .shoppingEmissions(getShoppingEmissions(editedTrip))
                .activityEmissions(getActivitiesEmissions(editedTrip))
                .totalEmissions(getAllEmissions(editedTrip))
                .build();

        return (Trip.builder()
                .title(editedTrip.getTitle())
                .year(getYearOfTrip(editedTrip))
                .destinationCountry(editedTrip.getDestinationCountry())
                .travellerAmount(editedTrip.getTravellerAmount())
                .dateOfDeparture(editedTrip.getDateOfDeparture())
                .dateOfReturning(editedTrip.getDateOfReturning())
                .numberOfNights(getNumberOfNights(editedTrip))
                .personalBudget(editedTrip.getPersonalBudget())
                .transportations(tripTransportations)
                .accommodations(tripAccommodations)
                .foods(tripFoods)
                .shoppings(tripShoppings)
                .activities(tripActivities)
                .calculatedEmissions(calculatedEmissions)
                .build());

    }
}