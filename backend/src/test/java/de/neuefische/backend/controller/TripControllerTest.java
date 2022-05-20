package de.neuefische.backend.controller;

import de.neuefische.backend.model.Trip;
import de.neuefische.backend.repository.TripRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TripControllerTest {

    @Autowired
    private WebTestClient webTestClient;

    @Autowired
    private TripRepo tripRepo;

    @BeforeEach
    public void cleanUp() {
        tripRepo.deleteAll();
    }

    @Test
    void getAllTrips() {

        //Given
        Trip trip1 = Trip.builder()
                .id("1")
                .title("Rom 2022")
                .build();

        Trip trip2 = Trip.builder()
                .id("2")
                .title("Paris 2022")
                .build();

        tripRepo.insert(trip1);
        tripRepo.insert(trip2);

        //When
        List<Trip> actual = webTestClient.get()
                .uri("/api/trips")
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(Trip.class)
                .returnResult()
                .getResponseBody();

        //Then
        List<Trip> expected = List.of((Trip.builder()
                        .id("1")
                        .title("Rom 2022")
                        .build()),
                Trip.builder()
                        .id("2")
                        .title("Paris 2022")
                        .build());
        assertEquals(expected, actual);
    }

    @Test
    void addNewTrip() {
        //Given
        Trip trip1 = Trip.builder()
                .id("1")
                .title("Rom 2022")
                .build();

        //When
        Trip actual = webTestClient.post()
                .uri("/api/trips")
                .bodyValue(trip1)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(Trip.class)
                .returnResult()
                .getResponseBody();

        //Then
        assertNotNull(actual);
        assertNotNull(actual.getId());
        Trip expected = Trip.builder().id("1")
                .title("Rom 2022")
                .build();
        assertEquals(expected, actual);

    }
}