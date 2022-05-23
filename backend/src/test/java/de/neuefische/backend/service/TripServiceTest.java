package de.neuefische.backend.service;

import de.neuefische.backend.calculations.EmissionCalculationService;
import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.Trip;
import de.neuefische.backend.repository.TripRepo;
import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


class TripServiceTest {

    private final TripRepo tripRepo = mock(TripRepo.class);

    private final TripService tripService = new TripService(tripRepo);

    @Test
    void getAllTrips() {
        //Given

        when(tripRepo.findAll())
                .thenReturn(List.of(trip1,trip2));

        //When
        List<Trip> actual = tripService.getAllTrips();

        //Then
        List<Trip> expected = List.of(trip1, trip2);
        verify(tripRepo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addNewTrip() {
        //Given

        when(tripRepo.insert(trip1)).thenReturn(trip1);

        //When
        Trip actual = tripService.addNewTrip(tripDto);

        //Then
        Trip expected = trip1;
        verify(tripRepo).insert(trip1);
        assertEquals(expected, actual);
    }

    TripDto tripDto = TripDto.builder()
            .title("Rom 2022")
            .distance(1.0)
            .destinationCountry("Italy")
            .travellerAmount(1)
            .personalBudget(2500)
            .dateOfDeparture(LocalDate.of(2022, 1, 13))
            .dateOfReturning(LocalDate.of(2022, 1, 20))
            .typeOfTransport("Train")
            .typeOfAccommodation("Hotel")
            .typeOfDiet("MuchMeat")
            .numberOfClothingItems(0)
            .numberOfElectronicItems(0)
            .numberOfSouvenirItems(0)
            .amountOfBeautyDays(0)
            .amountOfSkiingDays(0)
            .amountOfGolfRounds(0)
            .build();

    Trip trip1 = Trip.builder()
            .title("Rom 2022")
            .distance(1)
            .destinationCountry("Italy")
            .travellerAmount(1)
            .dateOfDeparture(LocalDate.of(2022, 1, 13))
            .dateOfReturning(LocalDate.of(2022, 1, 20))
            .numberOfNights(7)
            .year(2022)
            .personalBudget(2500)
            .typeOfTransport("Train")
            .typeOfAccommodation("Hotel")
            .typeOfDiet("MuchMeat")
            .numberOfClothingItems(0)
            .numberOfElectronicItems(0)
            .numberOfSouvenirItems(0)
            .amountOfBeautyDays(0)
            .amountOfSkiingDays(0)
            .amountOfGolfRounds(0)
            .transportationEmissions(0.14)
            .accommodationEmissions(798)
            .foodEmissions(28.770000000000003)
            .activitiesEmissions(0)
            .shoppingEmissions(0)
            .totalEmissions(826.91)
            .build();

    Trip trip2 = Trip.builder()
            .title("Paris 2022")
            .distance(1)
            .destinationCountry("France")
            .travellerAmount(1)
            .dateOfDeparture(LocalDate.of(2022, 2, 13))
            .dateOfReturning(LocalDate.of(2022, 2, 20))
            .numberOfNights(7)
            .year(2022)
            .personalBudget(2500)
            .typeOfTransport("Train")
            .typeOfAccommodation("Hotel")
            .typeOfDiet("MuchMeat")
            .numberOfClothingItems(0)
            .numberOfElectronicItems(0)
            .numberOfSouvenirItems(0)
            .amountOfBeautyDays(0)
            .amountOfSkiingDays(0)
            .amountOfGolfRounds(0)
            .transportationEmissions(0.14)
            .accommodationEmissions(114)
            .foodEmissions(4.11)
            .activitiesEmissions(0)
            .shoppingEmissions(0)
            .build();

}