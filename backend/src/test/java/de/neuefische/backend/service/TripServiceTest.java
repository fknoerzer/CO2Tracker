package de.neuefische.backend.service;

import de.neuefische.backend.model.Trip;
import de.neuefische.backend.repository.TripRepo;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;


class TripServiceTest {

    private final TripRepo tripRepo = mock(TripRepo.class);
    private final TripService tripService = new TripService(tripRepo);

    @Test
    void getAllTrips() {
        //Then
        Trip trip1 = Trip.builder()
                .id("1")
                .title("Rom 2022")
                .build();

        when(tripRepo.findAll())
                .thenReturn(List.of(trip1));

        //When
        List<Trip> actual = tripService.getAllTrips();


        //Then
        List<Trip> expected = List.of(Trip.builder()
                .id("1")
                .title("Rom 2022")
                .build());

        verify(tripRepo).findAll();
        assertEquals(expected, actual);
    }

    @Test
    void addNewTrip() {
        //Given
        Trip trip1 = Trip.builder()
                .id("1")
                .title("Rom 2022")
                .build();

when(tripRepo.insert(trip1)).thenReturn(Trip.builder()
        .id("1")
        .title("Rom 2022")
        .build());

        //When
        Trip actual = tripService.addNewTrip(trip1);

        //Then
        Trip expected = Trip.builder()
                .id("1")
                .title("Rom 2022")
                .build();
        verify(tripRepo).insert(trip1);
        assertEquals(expected, actual);
    }

}