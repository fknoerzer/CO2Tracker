package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Activity {
    @NotNull(message = "Amount of Golf Rounds is mandatory")
    private double amountOfGolfRounds;

    @NotNull(message = "Amount of Skiing Days is mandatory")
    private double amountOfSkiingDays;

    @NotNull(message = "Amount of Beauty Days is mandatory")
    private double amountOfBeautyDays;


    private String customActivityItem;

    @NotNull(message = "Amount of Custom Item Emissions is mandatory")
    private double customActivityItemEmission;

    @NotNull(message = "Amount of Custom Items is mandatory")
    private double amountOfCustomActivityItem;
}