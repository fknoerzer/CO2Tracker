package de.neuefische.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TripDto {
    private String title;
    private int distance;
    private String destinationCountry;
    private int travellerAmount;
    private Instant dateOfReturning;
    private Instant dateOfDeparting;
    private int personalBudget;
    private int transportation;
    private int accommodation;
    private int food;
    private int activities;
    private int shopping;
}
