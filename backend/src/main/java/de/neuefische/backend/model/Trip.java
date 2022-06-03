package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "trips")
public class Trip {

    @Id
    private String id;

    @NotNull(message = "Title is mandatory")
    private String title;

    private String destinationCountry;

    @NotNull(message = "Traveller amount is mandatory")
    private double travellerAmount;

    @NotNull(message = "Date of Departure is mandatory")
    private LocalDate dateOfDeparture;

    private double year;

    private long numberOfNights;

    @NotNull(message = "Date of Returning is mandatory")
    private LocalDate dateOfReturning;

    private double personalBudget;

    private List<Transportation> transportations;
    private List<Accommodation> accommodations;
    private List<Food> foods;
    private List<Shopping> shoppings;
    private List<Activity> activities;
    private CalculatedEmissions calculatedEmissions;
}