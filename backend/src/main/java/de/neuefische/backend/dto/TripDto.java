package de.neuefische.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TripDto {

    private String title;
    private double distance;
    private String destinationCountry;
    private double travellerAmount;
    private LocalDate dateOfDeparture;
    private LocalDate dateOfReturning;
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
}
