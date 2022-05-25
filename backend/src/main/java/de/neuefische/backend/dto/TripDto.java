package de.neuefische.backend.dto;

import de.neuefische.backend.model.*;
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
    private String destinationCountry;
    private double travellerAmount;
    private LocalDate dateOfDeparture;
    private LocalDate dateOfReturning;
    private double personalBudget;

    private Transportation transportation;
    private Accommodation accommodation;
    private Food food;
    private Shopping shopping;
    private Activity activity;
}
