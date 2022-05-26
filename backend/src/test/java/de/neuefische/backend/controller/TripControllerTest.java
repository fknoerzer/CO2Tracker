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
        List<Trip> actual = webTestClient.get()
                .uri("/api/trips")
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(Trip.class)
                .returnResult()
                .getResponseBody();

        //Then
        List<Trip> expected = List.of(trip1, trip2);

        assertEquals(expected, actual);
    }

    @Test
    void addNewTrip() {

        //When
        Trip actual = webTestClient.post()
                .uri("http://localhost:" + port + "/api/trips")
                .bodyValue(tripDto)
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(Trip.class)
                .returnResult()
                .getResponseBody();

        //Then
        assertNotNull(actual);
        assertNotNull(actual.getId());
        Trip expected = trip1;
        expected.setId(actual.getId());
        assertEquals(24, actual.getId().length());
        assertEquals(expected, actual);

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
                    .activitiesEmissions(0)
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
                    .activitiesEmissions(0)
                    .shoppingEmissions(0)
                    .totalEmissions(861.14)
                    .build())
            .build();
}