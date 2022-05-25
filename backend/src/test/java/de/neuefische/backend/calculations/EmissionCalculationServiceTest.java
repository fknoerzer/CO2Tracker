package de.neuefische.backend.calculations;

import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.*;
import org.junit.jupiter.api.Test;
import java.time.LocalDate;
import static org.junit.jupiter.api.Assertions.assertEquals;

class EmissionCalculationServiceTest {


    @Test
    void getNumberOfNights() {
        //When
        long acutal = EmissionCalculationService.getNumberOfNights(tripDto);

        //Then
        long expected = 7;
        assertEquals(expected, acutal);
    }

    @Test
    void getYearOfTrip() {
        //when
        long actual = EmissionCalculationService.getYearOfTrip(tripDto);

        //Then
        long expected = 2022;
        assertEquals(expected, actual);
    }

    @Test
    void getTransportationEmissions() {
        //when
        double actual = EmissionCalculationService.getTransportationEmissions(tripDto);

        //Then
        double expected = 0.14;
        assertEquals(expected, actual);
    }

    @Test
    void getAccommodationEmissions() {
        //when
        double actual = EmissionCalculationService.getAccommodationEmissions(tripDto);

        //Then
        double expected = 798;
        assertEquals(expected, actual);
    }

    @Test
    void getFoodEmissions() {
        //when
        double actual = EmissionCalculationService.getFoodEmissions(tripDto);

        //Then
        double expected = 63;
        assertEquals(expected, actual);
    }

    @Test
    void getShoppingEmissions() {
        //when
        double actual = EmissionCalculationService.getShoppingEmissions(tripDto);

        //Then
        double expected = 0;
        assertEquals(expected, actual);
    }

    @Test
    void getActivitiesEmissions() {
        //when
        double actual = EmissionCalculationService.getActivitiesEmissions(tripDto);

        //Then
        double expected = 0;
        assertEquals(expected, actual);
    }

    @Test
    void getAllEmissions () {
        //when
        double actual = EmissionCalculationService.getAllEmissions(tripDto);

        //Then
        double expected = 861.14;
        assertEquals(expected,actual);
    }

    TripDto tripDto = TripDto.builder()
            .title("Rom 2022")
            .transportation(Transportation.builder()
                    .typeOfTransport("Train")
                    .distance(1)
                    .build())
            .destinationCountry("Italy")
            .travellerAmount(1)
            .personalBudget(2500)
            .dateOfDeparture(LocalDate.of(2022, 1, 13))
            .dateOfReturning(LocalDate.of(2022, 1, 20))
            .accommodation(Accommodation.builder()
                    .typeOfAccommodation("Hotel")
                    .build())
            .food(Food.builder().
                    typeOfDiet("MuchMeat")
                    .build())
            .shopping(Shopping.builder()
                    .numberOfClothingItems(0)
                    .numberOfElectronicItems(0)
                    .numberOfSouvenirItems(0)
                    .build())
            .activity(Activity.builder()
                    .amountOfBeautyDays(0)
                    .amountOfSkiingDays(0)
                    .amountOfGolfRounds(0)
                    .build())
            .build();
}