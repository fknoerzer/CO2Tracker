package de.neuefische.backend.controller;


import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.TripRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.time.LocalDate;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.contains;
import static org.hamcrest.Matchers.containsInAnyOrder;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TripControllerTest {

    @LocalServerPort
    private int port;

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

        tripRepo.insert(trip1);
        tripRepo.insert(trip2);

        //When
        List<de.neuefische.backend.model.Trip> actual = webTestClient.get()
                .uri("/api/trips")
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(de.neuefische.backend.model.Trip.class)
                .returnResult()
                .getResponseBody();

        //Then
        List<de.neuefische.backend.model.Trip> expected = List.of(trip1, trip2);

        assertEquals(expected, actual);
    }

    @Test
    void addNewTrip() {

        //When
        Trip actual = webTestClient.post()
                .uri("http://localhost:" + port + "/api/trips")
                .bodyValue(tripDto1)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(Trip.class)
                .returnResult()
                .getResponseBody();

        //Then
        assertNotNull(actual);
        assertNotNull(actual.getId());
        de.neuefische.backend.model.Trip expected = trip1;
        expected.setId(actual.getId());
        assertEquals(24, actual.getId().length());
        assertEquals(expected, actual);

    }

    @Test
    void deleteTrip() {
        //Given
        tripRepo.insert(trip1);
        tripRepo.insert(trip2);

        //When
        webTestClient.delete()
                .uri("http://localhost:" + port + "/api/trips/" + 1)
                .exchange()

                //Then
                .expectStatus().is2xxSuccessful();
    }

    Trip trip1 = Trip.builder()
            .id("1")
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

    Trip trip1b = Trip.builder()
            .id("1")
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


