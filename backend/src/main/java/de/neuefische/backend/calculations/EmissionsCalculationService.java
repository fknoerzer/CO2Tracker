package de.neuefische.backend.calculations;

import de.neuefische.backend.model.CalculatedEmissions;
import de.neuefische.backend.model.Trip;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
@Service
public class EmissionsCalculationService {

    private EmissionsCalculationService() {
    }

    public static long getNumberOfDays(Trip editedTrip) {

        LocalDate departureDate = editedTrip.getDateOfDeparture();
        LocalDate returningDate = editedTrip.getDateOfReturning();
        return ChronoUnit.DAYS.between(departureDate, returningDate);
    }

    public static long getYearOfTrip(Trip editedTrip) {
        LocalDate departureDate = editedTrip.getDateOfDeparture();
        return departureDate.getYear();
    }

    public static double getTransportationEmissions(Trip editedTrip) {

        return editedTrip.getTransportations().stream().mapToDouble(transportation -> switch (transportation.getTypeOfTransport()) {
            case "Airplane" -> (transportation.getDistance() * EmissionsData.AIRPLANE);
            case "Car" -> (transportation.getDistance() * EmissionsData.CAR);
            case "Camper" -> (transportation.getDistance() * EmissionsData.CAMPER);
            case "Train" -> (transportation.getDistance() * EmissionsData.TRAIN);
            case "Bus" -> (transportation.getDistance() * EmissionsData.BUS);
            case "Motorbike" -> (transportation.getDistance() * EmissionsData.MOTORBIKE);
            case "Ferry" -> (transportation.getDistance() * EmissionsData.FERRY);
            default -> EmissionsData.WALKING;
        }).sum();
    }

    public static double getAccommodationEmissions(Trip editedTrip) {

        return editedTrip.getAccommodations().stream().mapToDouble(accommodation -> switch (accommodation.getTypeOfAccommodation()) {
            case "Hotel" -> (getNumberOfDays(editedTrip) * EmissionsData.HOTEL);
            case "House" -> (getNumberOfDays(editedTrip) * EmissionsData.HOUSE);
            case "Apartment" -> (getNumberOfDays(editedTrip) * EmissionsData.APARTMENT);
            case "Youth Hostel" -> (getNumberOfDays(editedTrip) * EmissionsData.YOUTH_HOSTEL);
            case "Camping Site" -> (getNumberOfDays(editedTrip) * EmissionsData.CAMP_SITE);
            default -> (getNumberOfDays(editedTrip) * EmissionsData.CRUISE_SHIP);
        }).sum();
    }

    public static double getFoodEmissions(Trip editedTrip) {

        return editedTrip.getFoods().stream().mapToDouble(food -> switch (food.getTypeOfDiet()) {
            case "Much Meat" -> (getNumberOfDays(editedTrip) * EmissionsData.MUCH_MEAT);
            case "Some Meat" -> (getNumberOfDays(editedTrip) * EmissionsData.SOME_MEAT);
            case "Rarely Meat" -> (getNumberOfDays(editedTrip) * EmissionsData.RARELY_MEAT);
            case "Vegetarian" -> (getNumberOfDays(editedTrip) * EmissionsData.VEGETARIAN);
            default -> (getNumberOfDays(editedTrip) * EmissionsData.VEGAN);
        }).sum();
    }

    public static double getShoppingEmissions(Trip editedTrip) {

        return editedTrip.getShoppings().stream().mapToDouble(shopping ->
                (shopping.getAmountOfClothingItems() * EmissionsData.CLOTHING +
                        shopping.getAmountOfElectronicItems() * EmissionsData.ELECTRIC +
                        shopping.getAmountOfSouvenirItems() * EmissionsData.SOUVENIR +
                        shopping.getCustomShoppingItemEmission() * shopping.getAmountOfCustomShoppingItem())).sum();
    }

    public static double getActivitiesEmissions(Trip editedTrip) {
        return editedTrip.getActivities().stream().mapToDouble(activities ->
                (activities.getAmountOfBeautyDays() * EmissionsData.BEAUTY_DAY +
                        activities.getAmountOfSkiingDays() * EmissionsData.SKIING_DAY +
                        activities.getAmountOfGolfRounds() * EmissionsData.GOLF_ROUNDS +
                        activities.getCustomActivityItemEmission() * activities.getAmountOfCustomActivityItem())).sum();
    }

    public static double getAllEmissions(Trip editedTrip) {
        return (getTransportationEmissions(editedTrip) +
                getAccommodationEmissions(editedTrip) +
                getFoodEmissions(editedTrip) +
                getShoppingEmissions(editedTrip) +
                getActivitiesEmissions(editedTrip));
    }

    public static Trip transferEmissions(Trip editedTrip) {

        CalculatedEmissions calculatedEmissions = CalculatedEmissions.builder()
                .transportationEmissions(getTransportationEmissions(editedTrip))
                .accommodationEmissions(getAccommodationEmissions(editedTrip))
                .foodEmissions(getFoodEmissions(editedTrip))
                .shoppingEmissions(getShoppingEmissions(editedTrip))
                .activityEmissions(getActivitiesEmissions(editedTrip))
                .totalEmissions(getAllEmissions(editedTrip))
                .build();

        return (Trip.builder()
                .id(editedTrip.getId())
                .title(editedTrip.getTitle())
                .year(getYearOfTrip(editedTrip))
                .destinationCountry(editedTrip.getDestinationCountry())
                .travellerAmount(editedTrip.getTravellerAmount())
                .dateOfDeparture(editedTrip.getDateOfDeparture())
                .dateOfReturning(editedTrip.getDateOfReturning())
                .numberOfNights(getNumberOfDays(editedTrip))
                .personalBudget(editedTrip.getPersonalBudget())
                .transportations(editedTrip.getTransportations())
                .accommodations(editedTrip.getAccommodations())
                .foods(editedTrip.getFoods())
                .shoppings(editedTrip.getShoppings())
                .activities(editedTrip.getActivities())
                .calculatedEmissions(calculatedEmissions)
                .build());
    }
}