package de.neuefische.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TripUpdateActivityEmissionsDto {
    private double amountOfGolfRounds;
    private double amountOfSkiingDays;
    private double amountOfBeautyDays;
    private String customActivityItem;
    private double customActivityItemEmission;
    private double amountOfCustomActivityItem;
}
