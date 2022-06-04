package de.neuefische.backend.dto;

import de.neuefische.backend.model.*;
import lombok.*;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TripDto {
    @NotBlank(message = "Title is mandatory")
    private String title;

    private String destinationCountry;

    @NotNull(message = "Traveller amount is mandatory")
    private double travellerAmount;

    @NotNull(message = "Date of Departure is mandatory")
    private LocalDate dateOfDeparture;

    @NotNull(message = "Date of Returning is mandatory")
    private LocalDate dateOfReturning;

    @NotNull(message = "Personal CO2 Budget is mandatory" )
    private double personalBudget;

    private List<Transportation> transportations;
    private List <Accommodation> accommodations;
    private List <Food> foods;
    private List <Shopping> shoppings;
    private List <Activity> activities;
}