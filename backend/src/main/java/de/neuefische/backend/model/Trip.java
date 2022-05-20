package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "trips")
public class Trip {
    @Id
    private String id;
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
