package de.neuefische.backend.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class TripUpdateShoppingEmissionsDto {
    private double numberOfClothingItems;
    private double numberOfElectronicItems;
    private double numberOfSouvenirItems;
    private String customShoppingItem;
    private double customShoppingItemEmission;
    private double amountOfCustomShoppingItem;
}