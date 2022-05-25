package de.neuefische.backend.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Shopping {
    private double numberOfClothingItems;
    private double numberOfElectronicItems;
    private double numberOfSouvenirItems;
    private String customShoppingItem;
    private double customShoppingItemEmission;
    private double amountOfCustomShoppingItem;
}
