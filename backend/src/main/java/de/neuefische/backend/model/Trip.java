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
    private long year;

    private String destinationCountry;
    private double travellerAmount;
    private LocalDate dateOfDeparture;
    private LocalDate dateOfReturning;
    private double numberOfNights;
    private double personalBudget;

    private Transportation transportation;
    private Accommodation accommodation;
    private Food food;
    private Shopping shopping;
    private Activity activity;
    private CalculatedEmissions calculatedEmissions;
}