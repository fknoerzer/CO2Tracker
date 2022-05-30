package de.neuefische.backend.service;

import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.TripRepo;
import org.junit.jupiter.api.BeforeEach;
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
                .thenReturn(List.of(trip1, trip2));

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

    @Test
    void deleteTrip() {
        //When
        tripService.deleteTrip("1");
        //Then
        verify(tripRepo).deleteById("1");
    }

    @Test
    void editTrip() {
        //Given
        when(tripRepo.existsById(trip1.getId())).thenReturn(true);
        when(tripRepo.save(trip1)).thenReturn(trip1);
        //When
        Trip actual = tripService.editTrip(trip1);

        //Then

        assertEquals(trip1, actual);

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

    Trip trip1 = Trip.builder()
            .title("Rom 2022")
            .year(2022)
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
            .numberOfNights(7)
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
            .calculatedEmissions(CalculatedEmissions.builder()
                    .transportationEmissions(0.14)
                    .accommodationEmissions(798)
                    .foodEmissions(21)
                    .activityEmissions(0)
                    .shoppingEmissions(0)
                    .totalEmissions(819.14)
                    .build())
            .build();

    Trip trip2 = Trip.builder()
            .title("Paris 2022")
            .transportation(Transportation.builder()
                    .typeOfTransport("Train")
                    .distance(1)
                    .build())
            .destinationCountry("Italy")
            .travellerAmount(1)
            .personalBudget(2500)
            .dateOfDeparture(LocalDate.of(2022, 2, 13))
            .dateOfReturning(LocalDate.of(2022, 2, 20))
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
            .calculatedEmissions(CalculatedEmissions.builder()
                    .transportationEmissions(0.14)
                    .accommodationEmissions(798)
                    .foodEmissions(28.770000000000003)
                    .activityEmissions(0)
                    .shoppingEmissions(0)
                    .totalEmissions(826.91)
                    .build())
            .build();

}