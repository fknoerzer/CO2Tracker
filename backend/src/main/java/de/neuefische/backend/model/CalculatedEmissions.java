package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CalculatedEmissions {
    private double transportationEmissions;
    private double accommodationEmissions;
    private double foodEmissions;
    private double activityEmissions;
    private double shoppingEmissions;
    private double totalEmissions;
}
