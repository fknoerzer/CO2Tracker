package de.neuefische.backend.calculations;

import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class EmissionCalculationServiceTest {

    @Test
    void getNumberOfNights() {
        //When
     long acutal = EmissionsCalculationService.getNumberOfNights(trip1);

        //Then
     long expected = 7;
        assertEquals(expected, acutal);
    }

    @Test
    void getYearOfTrip() {
        //when
        long actual = EmissionsCalculationService.getYearOfTrip(trip1);

        //Then
        long expected = 2022;
        assertEquals(expected, actual);
    }

    @Test
    void getTransportationEmissions() {
        //when
        double actual = EmissionsCalculationService.getTransportationEmissions(trip1);

        //Then
        double expected = 1.2;
        assertEquals(expected, actual);
    }

    @Test
    void getAccommodationEmissions() {
        //when
        double actual = EmissionsCalculationService.getAccommodationEmissions(trip1);

        //Then
        double expected = 798;
        assertEquals(expected, actual);
    }

    @Test
    void getFoodEmissions() {
        //when
        double actual = EmissionsCalculationService.getFoodEmissions(trip1);

        //Then
        double expected = 63.0;
        assertEquals(expected, actual);
    }

    @Test
    void getShoppingEmissions() {
        //when
        double actual = EmissionsCalculationService.getShoppingEmissions(trip1);

        //Then
        double expected = 58.0;
        assertEquals(expected, actual);
    }

    @Test
    void getActivitiesEmissions() {
        //when
        double actual = EmissionsCalculationService.getActivitiesEmissions(trip1);

        //Then
        double expected = 46.0;
        assertEquals(expected, actual);
    }

    @Test
    void getAllEmissions () {
        //when
        double actual = EmissionsCalculationService.getAllEmissions(trip1);

        //Then
        double expected = 966.2;
        assertEquals(expected,actual);
    }

    Trip trip1 = Trip.builder()
            .id("1")
            .title("Rom 2022")
            .year(2022)
            .destinationCountry("Italy")
            .travellerAmount(1.0)
            .personalBudget(2500.0)
            .numberOfNights(8)
            .dateOfDeparture(LocalDate.of(2022, 1, 13))
            .dateOfReturning(LocalDate.of(2022, 1, 20))
            .transportations(List.of(Transportation.builder()
                    .typeOfTransport("Car")
                    .distance(10.0)
                    .build()))
            .accommodations(List.of(Accommodation.builder()
                    .typeOfAccommodation("Hotel")
                    .build()))
            .foods(List.of(Food.builder()
                    .typeOfDiet("Much Meat")
                    .build()))
            .shoppings(List.of(Shopping.builder()
                    .amountOfClothingItems(1.0)
                    .amountOfElectronicItems(1.0)
                    .amountOfSouvenirItems(1.0)
                    .amountOfCustomShoppingItem(0.0)
                    .customShoppingItemEmission(0.0)
                    .build()))
            .activities(List.of(Activity.builder()
                    .amountOfBeautyDays(1.0)
                    .amountOfSkiingDays(1.0)
                    .amountOfGolfRounds(1.0)
                    .amountOfCustomActivityItem(0.0)
                    .customActivityItem("")
                    .customActivityItemEmission(0.0)
                    .build()))
            .calculatedEmissions(CalculatedEmissions.builder()
                    .transportationEmissions(0.14)
                    .accommodationEmissions(798.0)
                    .foodEmissions(63.0)
                    .activityEmissions(0.0)
                    .shoppingEmissions(0.0)
                    .totalEmissions(861.14)
                    .build())
            .build();

    Trip trip1b = Trip.builder()
            .id("1")
            .title("Rom 2023")
            .year(2022)
            .destinationCountry("Italy")
            .travellerAmount(2.0)
            .personalBudget(2500.0)
            .numberOfNights(8)
            .dateOfDeparture(LocalDate.of(2022, 1, 13))
            .dateOfReturning(LocalDate.of(2022, 1, 20))
            .transportations(List.of(Transportation.builder()
                    .typeOfTransport("Car")
                    .distance(10.0)
                    .build()))
            .accommodations(List.of(Accommodation.builder()
                    .typeOfAccommodation("Hotel")
                    .build()))
            .foods(List.of(Food.builder()
                    .typeOfDiet("Much Meat")
                    .build()))
            .shoppings(List.of(Shopping.builder()
                    .amountOfClothingItems(1.0)
                    .amountOfElectronicItems(1.0)
                    .amountOfSouvenirItems(1.0)
                    .build()))
            .activities(List.of(Activity.builder()
                    .amountOfBeautyDays(1.0)
                    .amountOfSkiingDays(1.0)
                    .amountOfGolfRounds(1.0)
                    .build()))
            .calculatedEmissions(CalculatedEmissions.builder()
                    .transportationEmissions(0.14)
                    .accommodationEmissions(798.0)
                    .foodEmissions(63.0)
                    .activityEmissions(0.0)
                    .shoppingEmissions(0.0)
                    .totalEmissions(861.14)
                    .build())
            .build();

    Trip trip2 = Trip.builder()
            .id("2")
            .title("Barcelona 2022")
            .year(2022)
            .destinationCountry("Spain")
            .travellerAmount(2.0)
            .personalBudget(3500.0)
            .numberOfNights(9)
            .dateOfDeparture(LocalDate.of(2022, 1, 13))
            .dateOfReturning(LocalDate.of(2022, 1, 21))
            .transportations(List.of(Transportation.builder()
                    .typeOfTransport("Car")
                    .distance(100.0)
                    .build()))
            .accommodations(List.of(Accommodation.builder()
                    .typeOfAccommodation("Hotel")
                    .build()))
            .foods(List.of(Food.builder()
                    .typeOfDiet("Vegan")
                    .build()))
            .shoppings(List.of(Shopping.builder()
                    .amountOfClothingItems(2.0)
                    .amountOfElectronicItems(2.0)
                    .amountOfSouvenirItems(2.0)
                    .build()))
            .activities(List.of(Activity.builder()
                    .amountOfBeautyDays(1.0)
                    .amountOfSkiingDays(1.0)
                    .amountOfGolfRounds(1.0)
                    .build()))
            .calculatedEmissions(CalculatedEmissions.builder()
                    .transportationEmissions(0.14)
                    .accommodationEmissions(798.0)
                    .foodEmissions(63.0)
                    .activityEmissions(0.0)
                    .shoppingEmissions(0.0)
                    .totalEmissions(861.14)
                    .build())
            .build();

    TripDto tripDto1 = TripDto.builder()
            .title("Rom 2022")
            .destinationCountry("Italy")
            .travellerAmount(1.0)
            .personalBudget(2500.0)
            .dateOfDeparture(LocalDate.of(2022, 1, 13))
            .dateOfReturning(LocalDate.of(2022, 1, 20))
            .transportations(List.of(Transportation.builder()
                    .typeOfTransport("Car")
                    .distance(10.0)
                    .build()))
            .accommodations(List.of(Accommodation.builder()
                    .typeOfAccommodation("Hotel")
                    .build()))
            .foods(List.of(Food.builder()
                    .typeOfDiet("Much Meat")
                    .build()))
            .shoppings(List.of(Shopping.builder()
                    .amountOfClothingItems(1.0)
                    .amountOfElectronicItems(1.0)
                    .amountOfSouvenirItems(1.0)
                    .build()))
            .activities(List.of(Activity.builder()
                    .amountOfBeautyDays(1.0)
                    .amountOfSkiingDays(1.0)
                    .amountOfGolfRounds(1.0)
                    .build()))
            .build();
}