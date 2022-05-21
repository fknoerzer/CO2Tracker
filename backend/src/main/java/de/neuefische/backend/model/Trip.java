package de.neuefische.backend.model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "trips")
public class Trip {
    @Id
    private String id;
    private String title;
    private double distance;
    private String destinationCountry;
    private double travellerAmount;
    private LocalDate dateOfDeparture;
    private LocalDate dateOfReturning;
    private double numberOfNights;
    private double personalBudget;
    private String typeOfTransport;
    private String typeOfAccommodation;
    private String typeOfDiet;
    private double numberOfClothingItems;
    private double numberOfElectronicItems;
    private double numberOfSouvenirItems;
    private double amountOfGolfRounds;
    private double amountOfSkiingDays;
    private double amountOfBeautyDays;

    private double transportationEmissions;
    private double accommodationEmissions;
    private double foodEmissions;
    private double activitiesEmissions;
    private double shoppingEmissions;
    private double totalEmissions;
}
