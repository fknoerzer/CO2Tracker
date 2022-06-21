package de.neuefische.backend.controller;

import de.neuefische.backend.dto.TripDto;
import de.neuefische.backend.model.*;
import de.neuefische.backend.repository.TripRepo;
import de.neuefische.backend.security.model.AppUser;
import de.neuefische.backend.security.repository.AppUserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.time.LocalDate;
import java.util.List;

import static de.neuefische.backend.calculations.EmissionsCalculationService.transferEmissions;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class TripControllerTest {

    private String jwtToken;

    @Autowired
    private AppUserRepository appUserRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @LocalServerPort
    private int port;

    @Autowired
    private WebTestClient webTestClient;

    @Autowired
    private TripRepo tripRepo;

    @BeforeEach
    public void cleanUp() {
        tripRepo.deleteAll();
        appUserRepository.deleteAll();
        jwtToken = generateJWTToken();
    }

    @Test
    void getTripById_whenIdIsValid() {
        //Given
        tripRepo.insert(trip1);
        String trip1Id = "1";

        //When
        List<Trip> actual = webTestClient.get()
                .uri("/api/trips/" + trip1Id)
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(de.neuefische.backend.model.Trip.class)
                .returnResult()
                .getResponseBody();

        //Then
        assertNotNull(actual);
        List<Trip> expected = List.of(trip1);
        assertEquals(expected, actual);
    }

    @Test
    void getTripById_whenIdIsNotValid() {
        //Given
        tripRepo.insert(trip1);
        String trip1IdWrong = "2";

        //When
        webTestClient.get()
                .uri("/api/trips/" + trip1IdWrong)
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()

                //Then
                .expectStatus().is4xxClientError();
    }

    @Test
    void getAllTrips() {
        //Given
        tripRepo.insert(trip1);
        tripRepo.insert(trip2);

        //When
        List<Trip> actual = webTestClient.get()
                .uri("/api/trips")
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBodyList(de.neuefische.backend.model.Trip.class)
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
                .bodyValue(tripDto1)
                .headers(http -> http.setBearerAuth(jwtToken))
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

    @Test
    void deleteTrip() {
        //Given
        tripRepo.insert(trip1);
        tripRepo.insert(trip2);

        //When
        webTestClient.delete()
                .uri("http://localhost:" + port + "/api/trips/" + trip1.getId())
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()

                //Then
                .expectStatus().is2xxSuccessful();
    }

    @Test
    void editTripById_whenIdIsValid() {
        //Given
        Trip addedTrip = webTestClient.post()
                .uri("http://localhost:" + port + "/api/trips/")
                .bodyValue(tripDto1)
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(Trip.class)
                .returnResult()
                .getResponseBody();

        //When
        assertNotNull(addedTrip);
        Trip editedTrip = Trip.builder()
                .id(addedTrip.getId())
                .title("Paris 2022")
                .year(2022)
                .destinationCountry("France")
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
                        .amountOfBeautyDays(5.0)
                        .amountOfSkiingDays(14.0)
                        .amountOfGolfRounds(1.0)
                        .build()))
                .build();

        Trip updatedTrip = transferEmissions(editedTrip);

        Trip actual = webTestClient.put()
                .uri("http://localhost:" + port + "/api/trips/" + updatedTrip.getId())
                .bodyValue(updatedTrip)
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(Trip.class)
                .returnResult()
                .getResponseBody();

        //Then
        Trip expected = updatedTrip;
        assertEquals(expected, actual);
    }

    @Test
    void editTripById_whenIdIsNotValid() {
        //Given
        Trip addedTrip = webTestClient.post()
                .uri("http://localhost:" + port + "/api/trips/")
                .bodyValue(tripDto1)
                .headers(http -> http.setBearerAuth(jwtToken))
                .exchange()
                .expectStatus().is2xxSuccessful()
                .expectBody(Trip.class)
                .returnResult()
                .getResponseBody();

        //When
        Trip editedTrip = Trip.builder()
                .id("0815")
                .title("Paris 2022")
                .year(2022)
                .destinationCountry("France")
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
                        .amountOfBeautyDays(5.0)
                        .amountOfSkiingDays(14.0)
                        .amountOfGolfRounds(1.0)
                        .build()))
                .build();

        Trip updatedTrip = transferEmissions(editedTrip);

        webTestClient.put()
                .uri("http://localhost:" + port + "/api/trips/" + updatedTrip.getId())
                .bodyValue(updatedTrip)
                .exchange()
                //THEN
                .expectStatus().isForbidden();
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
                    .amountOfCustomShoppingItem(0.0)
                    .customShoppingItemEmission(0.0)
                    .build()))
            .activities(List.of(Activity.builder()
                    .amountOfBeautyDays(1.0)
                    .amountOfSkiingDays(1.0)
                    .amountOfGolfRounds(1.0)
                    .amountOfCustomActivityItem(0.0)
                    .customActivityItemEmission(0.0)
                    .build()))
            .build();

    private String generateJWTToken() {
        String hashedPassword = passwordEncoder.encode("passwort");
        AppUser testUser = AppUser.builder()
                .username("testuser")
                .id("123")
                .password(hashedPassword)
                .build();
        appUserRepository.save(testUser);

        return webTestClient.post()
                .uri("/auth/login")
                .bodyValue(AppUser.builder()
                        .username("testuser")
                        .id("123")
                        .password("passwort")
                        .build())
                .exchange()
                .expectBody(String.class)
                .returnResult()
                .getResponseBody();
    }
}