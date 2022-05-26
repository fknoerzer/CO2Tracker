package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Activity {
    private double amountOfGolfRounds;
    private double amountOfSkiingDays;
    private double amountOfBeautyDays;
    private String customActivityItem;
    private double customActivityItemEmission;
    private double amountOfCustomActivityItem;
}
