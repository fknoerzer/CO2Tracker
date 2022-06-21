package de.neuefische.backend.service;

import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.TripRepo;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TripServiceTest {

    private final TripRepo tripRepo = mock(TripRepo.class);
    private final TripService tripService = new TripService(tripRepo);


    @Test
    void getTripById_WhenIdIsValid() {
        //Given
        when(tripRepo.findById("1")).thenReturn(
                Optional.of(trip1));

        //When
        Trip actual = tripService.getTripById("1");

        //Then
        Trip expected = trip1;
        verify(tripRepo).findById("1");
        assertEquals(expected, actual);
    }

    @Test
    void getTripById_WhenIdIsValid_shouldThrowException() {
        //Given
        when(tripRepo.findById("0815")).thenReturn(Optional.empty());

        //When //Then
        assertThrows(NoSuchElementException.class, () -> tripService.getTripById("0815"));
        verify(tripRepo).findById("0815");
    }

    @Test
    void getAllTrips() {
        //Given
        when(tripRepo.findAll())
                .thenReturn(List.of(trip1));

        //When
        List<de.neuefische.backend.model.Trip> actual = tripService.getAllTrips();

        //Then
        List<de.neuefische.backend.model.Trip> expected = List.of(trip1);
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

    @Test
    void deleteTrip() {
        //When
        tripService.deleteTrip("1");

        //Then
        verify(tripRepo).deleteById("1");
    }

    @Test
    void editTrip_WhenIdIsValid() {
        //Given
        when(tripRepo.existsById(trip1.getId())).thenReturn(true);
        when(tripRepo.save(trip1)).thenReturn(trip1);

        //When
        Trip actual = tripService.editTrip(trip1);

        //Then
        assertEquals(trip1, actual);
    }

    @Test
    void editTrip_WhenIdIsNotValid() {
        //Given
        when(tripRepo.findById(trip1.getId())).thenReturn(Optional.empty());

        //When//Then
       assertNotNull(trip1);
       assertThrows(NoSuchElementException.class, () -> tripService.editTrip(trip1));
       verify(tripRepo).existsById(trip1.getId());
    }

    Trip trip1 = Trip.builder()
            .title("Rom 2022")
            .year(2022)
            .destinationCountry("Italy")
            .travellerAmount(1.0)
            .personalBudget(2500.0)
            .numberOfNights(7)
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
                    .transportationEmissions(1.2)
                    .accommodationEmissions(798.0)
                    .foodEmissions(63.0)
                    .activityEmissions(46.0)
                    .shoppingEmissions(58.0)
                    .totalEmissions(966.2)
                    .build())
            .build();

    TripDto tripDto = TripDto.builder()
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